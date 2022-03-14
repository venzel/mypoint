import { InternalServerErrorException } from '@nestjs/common';
import { EntityRepository, getRepository, Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dtos/create.category.dto';
import { CategoryMessage } from './category.message.enum';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
    private repository: Repository<Category>;

    constructor() {
        super();
        this.repository = getRepository<Category>(Category);
    }

    async createAndSave(createCategoryDto: CreateCategoryDto): Promise<Category> {
        const category = this.repository.create(createCategoryDto);

        try {
            await this.repository.save(category);
            return category;
        } catch (_) {
            throw new InternalServerErrorException(CategoryMessage.INTERNAL_ERROR);
        }
    }
}
