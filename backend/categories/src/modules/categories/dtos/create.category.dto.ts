import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
    @IsString({ message: 'Informe uma nome de categoria válido!' })
    @IsNotEmpty({ message: 'O nome da categoria não pode ser vazia!' })
    readonly name: string;

    @IsString({ message: 'Informe uma descrição válida!' })
    @IsNotEmpty({ message: 'A descrição não pode ser vazia!' })
    description: string;
}
