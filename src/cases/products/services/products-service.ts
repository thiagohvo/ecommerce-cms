import { api } from "../../../lib/axios";
import type { ProductsDTO } from "../dtos/products.dto";


const _ENDPOINT = "/products";

export const ProductsService = {
  async list(): Promise<ProductsDTO[]> {
    const result = await api.get(_ENDPOINT);
    return result.data;
  },

  async create(products: ProductsDTO): Promise<ProductsDTO> {
    const result = await api.post(_ENDPOINT, products);
    return result.data;
  },

  async getById(id: string): Promise<ProductsDTO> {
    const result = await api.get(`${_ENDPOINT}/${id}`);
    return result.data;
  },

  async update(id: string, products: ProductsDTO): Promise<ProductsDTO> {
    const result = await api.put(`${_ENDPOINT}/${id}`, products);
    return result.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`${_ENDPOINT}/${id}`);
  },
};