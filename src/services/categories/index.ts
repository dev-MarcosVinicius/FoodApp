import { api } from '../api';

export class CategoryServices {
    static findAllCategories(): Promise<any> {
        return api.get('categories');
    }
}