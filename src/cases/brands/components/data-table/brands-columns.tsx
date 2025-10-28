import type { ColumnDef } from "@tanstack/react-table";
import type { BrandsDTO } from "../../dtos/brands.dto";

export const brandsColumns: ColumnDef<BrandsDTO>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome da Marca",
  },
];