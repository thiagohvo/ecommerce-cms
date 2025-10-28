import { useMutation, useQuery } from "@tanstack/react-query";

import { BrandsService } from "../services/brands.service";
import type { BrandsDTO } from "../dtos/brands.dto";

export function useBrands() {
  return useQuery<BrandsDTO[]>({
    queryKey: ["brands"],
    queryFn: BrandsService.list,
  });
}

export function useBrand(id: string) {
  return useQuery<BrandsDTO>({
    queryKey: ["brands", id],
    queryFn: () => BrandsService.getById(id),
    enabled: !id,
  });
}

export function useCreateBrands() {
  return useMutation<BrandsDTO, Error, Omit<BrandsDTO, "id">>({
    mutationFn: (brands: Omit<BrandsDTO, "id">) => BrandsService.create(brands),
  });
}

export function useUpdateBrands() {
  return useMutation<BrandsDTO, Error, { id: string; brands: BrandsDTO }>({
    mutationFn: ({ id, brands }) => BrandsService.update(id, brands),
  });
}

export function useDeleteBrands() {
  return useMutation<void, Error, string>({
    mutationFn: (id) => BrandsService.delete(id),
  });
}