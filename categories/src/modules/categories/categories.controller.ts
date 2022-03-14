import { Controller, Logger } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

const ackErrors: string[] = ['E11000'];

@Controller()
export class CategoriesController {
    logger = new Logger(CategoriesController.name);

    constructor(private readonly categoriesService: CategoriesService) {}

    @EventPattern('create-category')
    async createCategory(@Payload() category: Category, @Ctx() context: RmqContext) {
        const channel = context.getChannelRef();

        const originalMessage = context.getMessage();

        this.logger.log(`data: ${JSON.stringify(category)}`);

        try {
            await this.categoriesService.create(category);

            await channel.ack(originalMessage);
        } catch (error) {
            this.logger.error(`error: ${JSON.stringify(error.message)}`);

            const filterAckError = ackErrors.filter((ackError) => error.message.includes(ackError));

            if (filterAckError.length) {
                await channel.ack(originalMessage);
            }
        }
    }
}
