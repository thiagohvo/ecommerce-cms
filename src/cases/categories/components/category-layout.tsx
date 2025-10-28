import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { CategoryDataTable } from "./data-table/category-data-table"
import { Breadcrumb } from "@/components/layout/bread-crumb"
import { Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Outlet, useNavigate } from "react-router-dom"

export function CategoryLayout() {
  const navigate = useNavigate()

  function handleAddCategory() {
    navigate("/categories/new")
  }

  return (
    <div className="p-4">
      <Breadcrumb title="Categorias" />

      <div className="flex flex-col py-4 gap-4">
        <div className="flex flex-row justify-end gap-4 my-4">
          <InputGroup>
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search/>
            </InputGroupAddon>
          </InputGroup>

          <Button onClick={handleAddCategory} className="flex items-center gap-2">
            <Plus/> Adicionar
          </Button>
        </div>

        <CategoryDataTable />
        <Outlet />
      </div>
    </div>
  )
}
