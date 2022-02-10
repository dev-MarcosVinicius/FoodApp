import { api } from '../api';

export class ProductServices {
    static findAllProducts(): Promise<any> {
        return api.get('products');
    }
}