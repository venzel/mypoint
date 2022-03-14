import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDto } from './dtos/create.category.dto';

@Injectable()
export class CategoriesService {
    constructor(@InjectRepository(CategoryRepository) private categoryRepository: CategoryRepository) {}

    async create(createCategoryDto: CreateCategoryDto): Promise<void> {
        console.log('CRIADA E INSERIDA NO BANCO DE DADOS!');
    }
}
