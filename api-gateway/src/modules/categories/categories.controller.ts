import { ParameterValidationPipe } from './../../common/pipes/parameter.validation';
import {
    Controller,
    Get,
    // Logger,
    Post,
    UsePipes,
    ValidationPipe,
    Body,
    Query,
    Put,
    Param,
} from '@nestjs/common';
import { CreateCategoryDto } from './dtos/create.category.dto';
import { UpdateCategoryDto } from './dtos/update.category.dto';
import { CategoriesService } from './categories.service';

@Controller('api/v1/categories')
export class CategoriesController {
    // private logger = new Logger(CategoriesController.name);

    constructor(private categoriesService: CategoriesService) {}

    @Post()
    @UsePipes(ValidationPipe)
    createCategory(@Body() createCategoryDto: CreateCategoryDto) {
        this.categoriesService.createCategory(createCategoryDto);
    }

    @Get()
    consultarCategorias(@Query('categoryId', ParameterValidationPipe) id: string) {
        return this.categoriesService.findCategory(id);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    updateCategory(
        @Body() updateCategoryDto: UpdateCategoryDto,
        @Param('id') id: string
    ) {
        this.categoriesService.updateCategory(updateCategoryDto, id);
    }
}
