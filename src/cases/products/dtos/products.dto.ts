

import type { BrandDTO } from "@/cases/brands/dtos/brands.dto";
import type { CategoryDTO } from "@/cases/categories/dtos/category.dto";

export interface ProductDTO {
  id?: string;
  name: string;
  description?: string;
  price: number;
  active: boolean;
  category: CategoryDTO;
  brand?: BrandDTO;
}