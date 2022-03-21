import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dtos/create.category.dto';

@Injectable()
export class CategoriesService {
    logger = new Logger(CategoriesService.name);

    constructor(
        @InjectRepository(CategoryRepository)
        private categoryRepository: CategoryRepository
    ) {}

    async create(createCategoryDto: CreateCategoryDto): Promise<void> {
        await this.categoryRepository.createAndSave(createCategoryDto);

        this.logger.log(`data: ${JSON.stringify(createCategoryDto)}`);
    }
}
