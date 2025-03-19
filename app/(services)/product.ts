import { PaginationApi } from "../(models)/api";
import { IProduct } from "../(models)/product";
import { apiClient } from "../lib/config";

export class ProductService {
    static async getProductCount(): Promise<number> {
        try {
            const response = await apiClient.get<IProduct[]>('/products');

            return response?.data?.length ?? 0;
        } catch(e) {
            console.error(e)
            throw new Error('Error in product service')

        }
    }
    static async getProducts(page: number, limit: number, search: string = ''): Promise<PaginationApi<IProduct[]>>  {
        try {
            const response = await apiClient.get<PaginationApi<IProduct[]>>('/products', {
                params: {
                    _page: page,
                    _per_page: limit,
                }
            });
            const data = response?.data?.data.filter((item: IProduct) => (
                (item.name.toLowerCase().includes(search.toLowerCase()) || item.description.toLowerCase().includes(search.toLowerCase()))
            )) ?? [];


            return {
              ...response.data,
              data
            }
        } catch (e) {
            console.error(e)
            throw new Error('Error in product service')
        }
    }

    static async getSingleProduct(id: number): Promise<IProduct> {
        try {
            const response = await apiClient.get<IProduct>(`/products/${id}`)

            return response.data;
        } catch (e) {
            console.error(e)
            throw new Error('Error in product service')
        }
    }
}