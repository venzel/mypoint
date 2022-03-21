import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateCategoryDto } from './dtos/create.category.dto';
import { UpdateCategoryDto } from './dtos/update.category.dto';
import { ClientProxyProduct } from '../../proxyrmq/client.proxy';

@Injectable()
export class CategoriesService {
    private clientAdminBackend =
        this.clientProxyProduct.getClientProxyAdminBackendInstance();

    constructor(private clientProxyProduct: ClientProxyProduct) {}

    create(createCategoryDto: CreateCategoryDto) {
        console.log('executou o service!');

        this.clientAdminBackend.emit('create-category', createCategoryDto);
    }

    findById(id: string): Observable<any> {
        return this.clientAdminBackend.send('find-category-by-id', id ? id : '');
    }

    update(updateCategoryDto: UpdateCategoryDto, id: string) {
        this.clientAdminBackend.emit('update-category', {
            id,
            category: updateCategoryDto,
        });
    }
}
