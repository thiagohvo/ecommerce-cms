
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Outlet, useNavigate } from "react-router-dom";
import { Breadcrumb } from "@/components/layout/bread-crumb";
import { ProductsDataTable } from "./data-table/products-data-table";

export function ProductsLayout() {
  const navigate = useNavigate();

  function handleCreate() {
    navigate("/brands/create");
  }

  return (
    <div className="p-4">
      <Breadcrumb title="Products" />

      <div className="flex flex-col py-4 gap-4 my-4"></div>

      <div className="flex flex-row justify-end gap-4">
        <InputGroup className="max-w-96">
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
        </InputGroup>
        <Button onClick={handleCreate}>
          <Plus />
          Adicionar
        </Button>
      </div>
      <div>
        <ProductsDataTable />
        <Outlet />
      </div>
    </div>
  );
}