import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';

export class ParameterValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata) {
        if (!value) {
            throw new BadRequestException(
                `O valor do parametro ${metadata.data} deve ser informado!`
            );
        }

        return value;
    }
}
