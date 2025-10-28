import { brandsColumns } from "./brands-columns";
import { DataTable } from "@/components/ui/data-table";
import { useBrands } from "../../hooks/use-brands";

export function BrandsDataTable() {
  const { data: brands, isLoading } = useBrands();

  return (
    <div>
      {isLoading ? (
        <p>Carregando</p>
      ) : (
        <DataTable columns={brandsColumns} data={brands!} />
      )}
    </div>
  );
}