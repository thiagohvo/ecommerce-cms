import type { ColumnDef } from "@tanstack/react-table";
import type { CategoryDTO } from "../../dtos/category.dto";
import { DataTableAction } from "@/components/layout/data-table-action";

export const categoryColumns: ColumnDef<CategoryDTO>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome da Categoria",
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const category = row.original;
      return (
        <div className="flex justify-end gap-4">
          <DataTableAction itemId={category.id!} />
        </div>
      );
    },
  },
];
