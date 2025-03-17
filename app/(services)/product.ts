import { IProduct } from "../(models)/product";
import { apiClient } from "../lib/config";

export class ProductService {
    static async getProducts(): Promise<IProduct[]> {
        const response = await apiClient.get<IProduct[]>('/products');
        return response.data;
    }
}