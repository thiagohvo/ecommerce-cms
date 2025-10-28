
import { useProducts } from "../../hooks/use-products";
import { DataTable } from "@/components/ui/data-table";
import { productsColumns } from "./products-columns";

export function ProductsDataTable() {
  const { data: products, isLoading } = useProducts();

  return (
    <div>
      {isLoading ? (
        <p>Carregando</p>
      ) : (
        <DataTable columns={productsColumns} data={products!} />
      )}
    </div>
  );
}