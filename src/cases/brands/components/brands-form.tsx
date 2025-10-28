import { useParams } from "react-router-dom";
import { useBrand } from "../hooks/use-brands";
import { SidebarForm } from "@/components/layout/sidebar-form";


export function BrandsForm() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useBrand(id ?? "");

  function handleSave() {}



  return (
    <SidebarForm title="Cadastro de Marca" onSave={handleSave}>
      {isLoading ? <h4>Carregando...</h4> : <p>{JSON.stringify(data)}</p>}
    </SidebarForm>
  );
}