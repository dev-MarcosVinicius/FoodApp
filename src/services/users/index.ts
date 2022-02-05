import { api } from '../api';
import { UserProps } from '../../shared/types/user.type';

export class UsersServices {
    static registerUser(userData: UserProps): Promise<any> {
        return api.post('users', userData);
    }

    static loginUser(email: string, password: string): Promise<any> {
        return api.post('auth/login', {email, password});
    }
}