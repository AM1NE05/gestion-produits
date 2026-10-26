import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
    private products = [
        { id: 1, name: 'Laptop', price: 2500 },
        { id: 2, name: 'Souris', price: 40 },
    ];
    findAll() { return this.products; }
    findOne(id: number) {
        const p = this.products.find(x => x.id === id);
        if (!p) {
            throw new NotFoundException(`Product with ID ${id} not found`);
        }
        return p;
    }
}

