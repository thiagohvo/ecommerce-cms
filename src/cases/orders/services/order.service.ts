import { api } from "../../../lib/axios";
import type { OrderDTO } from "../dtos/order.dto";


const _ENDPOINT = "/brands";

export const OrderService = {
  async list(): Promise<OrderDTO[]> {
    const result = await api.get(_ENDPOINT);
    return result.data;
  },

  async create(brands: OrderDTO): Promise<OrderDTO> {
    const result = await api.post(_ENDPOINT, brands);
    return result.data;
  },

  async getById(id: string): Promise<OrderDTO> {
    const result = await api.get(`${_ENDPOINT}/${id}`);
    return result.data;
  },

  async update(id: string, brands: OrderDTO): Promise<OrderDTO> {
    const result = await api.put(`${_ENDPOINT}/${id}`, brands);
    return result.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`${_ENDPOINT}/${id}`);
  },
};