import { useMutation, useQuery } from "@tanstack/react-query";
import type { ProductsDTO } from "../dtos/products.dto";
import { ProductsService } from "../services/products-service";

export function useProducts() {
  return useQuery<ProductsDTO[]>({
    queryKey: ["products"],
    queryFn: ProductsService.list,
  });
}

export function useProduct(id: string) {
  return useQuery<ProductsDTO>({
    queryKey: ["product", id],
    queryFn: () => ProductsService.getById(id),
    enabled: !!id,
  });
}

export function useCreateProducts() {
  return useMutation<ProductsDTO, Error, Omit<ProductsDTO, "id">>({
    mutationFn: (product: Omit<ProductsDTO, "id">) =>
      ProductsService.create(product),
  });
}

export function useUpdateProducts() {
  return useMutation<ProductsDTO, Error, { id: string; product: ProductsDTO }>({
    mutationFn: ({ id, product }) => ProductsService.update(id, product),
  });
}

export function useDeleteProducts() {
  return useMutation<void, Error, string>({
    mutationFn: (id) => ProductsService.delete(id),
  });
}