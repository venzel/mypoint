import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dtos/create.category.dto';
import { UpdateCategoryDto } from './dtos/update.category.dto';
import { ClientProxyProduct } from '../../proxyrmq/client.proxy';

@Injectable()
export class CategoriesService {
    private clientAdminBackend =
        this.clientProxyProduct.getClientProxyAdminBackendInstance();

    constructor(private clientProxyProduct: ClientProxyProduct) {}

    createCategory(createCategoryDto: CreateCategoryDto) {
        this.clientAdminBackend.emit('create-category', createCategoryDto);
    }

    findCategory(id: string): Promise<any> {
        return this.clientAdminBackend
            .send('consultar-categorias', id ? id : '')
            .toPromise();
    }

    updateCategory(updateCategoryDto: UpdateCategoryDto, id: string) {
        this.clientAdminBackend.emit('update-category', {
            id,
            category: updateCategoryDto,
        });
    }
}
