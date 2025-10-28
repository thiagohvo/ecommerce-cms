import { api } from "../../../lib/axios";
import type { BrandsDTO } from "../dtos/brands.dto";


const _ENDPOINT = "/brands";

export const BrandsService = {
  async list(): Promise<BrandsDTO[]> {
    const result = await api.get(_ENDPOINT);
    return result.data;
  },

  async create(brands: BrandsDTO): Promise<BrandsDTO> {
    const result = await api.post(_ENDPOINT, brands);
    return result.data;
  },

  async getById(id: string): Promise<BrandsDTO> {
    const result = await api.get(`${_ENDPOINT}/${id}`);
    return result.data;
  },

  async update(id: string, brands: BrandsDTO): Promise<BrandsDTO> {
    const result = await api.put(`${_ENDPOINT}/${id}`, brands);
    return result.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`${_ENDPOINT}/${id}`);
  },
};