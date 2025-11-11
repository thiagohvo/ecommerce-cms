import { SidebarForm } from "@/components/layout/sidebar-form";
import { useNavigate, useParams } from "react-router-dom";
import {
  useBrand,
  useCreateBrands,
  useDeleteBrands,
  useUpdateBrands
} from "../hooks/use-brands";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, "Informe pelo menos 2 caractéres").max(60, "Máximo 60 caractéres")
});

export function BrandForm() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  // busca marca se for edição
  const { data, isLoading } = useBrand(id ?? "");

  // hooks
  const createBrand = useCreateBrands();
  const updateBrand = useUpdateBrands();
  const deleteBrand = useDeleteBrands();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ""
    }
  });

  // quando abrir em modo edição, carregar os dados
  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name
      });
    }
  }, [data, form]);

  function onSubmit(value: z.infer<typeof formSchema>) {
  if (id) {
    updateBrand.mutate(
      { id, brands: { name: value.name } },
      {
        onSettled: () => navigate("/brands")
      }
    );
  } else {
    createBrand.mutate(
      { name: value.name },
      {
        onSettled: () => navigate("/brands")
      }
    );
  }
}


  function onDelete() {
    if (id) {
      deleteBrand.mutate(id, {
        onSettled: () => navigate("/brands")
      });
    }
  }

  return (
    <SidebarForm
      title={id ? "Editar Marca" : "Adicionar Marca"}
      onSave={form.handleSubmit(onSubmit)}
      {...(id && { onDelete })}
      loading={isLoading}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome Marca</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </SidebarForm>
  );
}
