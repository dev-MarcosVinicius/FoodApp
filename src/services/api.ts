import axios from 'axios';

import { apiUrl } from '../global/environments';

export const api = axios.create({
    baseURL: apiUrl
});