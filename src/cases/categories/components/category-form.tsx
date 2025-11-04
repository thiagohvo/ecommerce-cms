import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { SidebarForm } from "@/components/layout/sidebar-form";
import {
  useCategory,
  useCreateCategory,
  useDeleteCategory,
  useUpdateCategory,
} from "../hooks/use-category";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z
    .string()
    .min(2, "informe pelo menos 2 caracteres")
    .max(60, "máximo 60 caracteres"),
});

export function CategoryForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading } = useCategory(id ?? "");
  const createCategory = useCreateCategory();
  const updateCategory = useUpdateCategory();
  const deleteCategory = useDeleteCategory();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (data) {
      form.reset({
        name: data.name,
      });
    }
  }, [data, form]);

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (id) {
      updateCategory.mutate(
        {
          id,
          category: {
            id,
            name: values.name,
          },
        },
        {
          onSuccess: () => {
            navigate("/categories");
          },
        }
      );
    } else {
      createCategory.mutate(
        {
          name: values.name,
        },
        {
          onSuccess: () => {
            navigate("/categories");
          },
        }
      );
    }
  }

  function onDelete() {
    if (id) {
      deleteCategory.mutate(id, {
        onSettled: () => {
          navigate("/categories");
        },
      });
    }
  }

  return (
  <SidebarForm
    title={id ? "Editar Categoria" : "Criar Categoria"}
    onSave={form.handleSubmit(onSubmit)}
    {...(id && { onDelete })}
    loading={
      isLoading ||
      createCategory.isPending ||
      updateCategory.isPending ||
      deleteCategory.isPending
    }
  >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome da Categoria</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o nome da categoria" {...field} />
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