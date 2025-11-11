import { useMutation, useQuery } from "@tanstack/react-query";

import { BrandsService } from "../services/brands.service";
import type { BrandDTO } from "../dtos/brands.dto";


export function useBrands() {
  return useQuery<BrandDTO[]>({
    queryKey: ["brands"],
    queryFn: BrandsService.list,
  });
}

export function useBrand(id: string) {
  return useQuery<BrandDTO>({
    queryKey: ["brands", id],
    queryFn: () => BrandsService.getById(id),
    enabled: !id,
  });
}

export function useCreateBrands() {
  return useMutation<BrandDTO, Error, Omit<BrandDTO, "id">>({
    mutationFn: (brands: Omit<BrandDTO, "id">) => BrandsService.create(brands),
  });
}

export function useUpdateBrands() {
  return useMutation<BrandDTO, Error, { id: string; brands: BrandDTO }>({
    mutationFn: ({ id, brands }) => BrandsService.update(id, brands),
  });
}

export function useDeleteBrands() {
  return useMutation<void, Error, string>({
    mutationFn: (id) => BrandsService.delete(id),
  });
}