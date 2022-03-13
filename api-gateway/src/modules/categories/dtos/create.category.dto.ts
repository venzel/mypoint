import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
    @IsString({ message: 'Informe uma categoria válida!' })
    @IsNotEmpty({ message: 'A categoria não pode ser vazia!' })
    readonly category: string;

    @IsString({ message: 'Informe uma descrição válida!' })
    @IsNotEmpty({ message: 'A descrição não pode ser vazia!' })
    description: string;
}
