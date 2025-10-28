import type { ColumnDef } from "@tanstack/react-table";
import type { ProductsDTO } from "../../dtos/products.dto";

export const productsColumns: ColumnDef<ProductsDTO>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome do Produto",
  },
];