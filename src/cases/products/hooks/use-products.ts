import { useMutation, useQuery } from "@tanstack/react-query";

import { ProductsService } from "../services/products-service";
import type { ProductDTO } from "../dtos/products.dto";

export function useProducts() {
  return useQuery<ProductDTO[]>({
    queryKey: ["product"],
    queryFn: ProductsService.list,
  });
}

export function useProduct(id: string) {
  return useQuery<ProductDTO>({
    queryKey: ["product", id],
    queryFn: () => ProductsService.getById(id),
    enabled: !!id,
  });
}

export function useCreateProducts() {
  return useMutation<ProductDTO, Error, Omit<ProductDTO, "id">>({
    mutationFn: (product: Omit<ProductDTO, "id">) =>
      ProductsService.create(product),
  });
}

export function useUpdateProducts() {
  return useMutation<ProductDTO, Error, { id: string; product: ProductDTO }>({
    mutationFn: ({ id, product }) => ProductsService.update(id, product),
  });
}

export function useDeleteProducts() {
  return useMutation<void, Error, string>({
    mutationFn: (id) => ProductsService.delete(id),
  });
}