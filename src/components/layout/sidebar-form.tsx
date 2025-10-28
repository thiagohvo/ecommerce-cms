import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { useNavigate, useLocation } from "react-router-dom"
import type { ReactNode } from "react"


type SidebarFormProps = {
  title: string
  children: ReactNode
  onSave: () => void
}

export function SidebarForm({ title, children, onSave }: SidebarFormProps) {
  const navigate = useNavigate()
  const location = useLocation()

  function handleCloseForm(open: boolean) {
    if (!open) {
      const currentPath = location.pathname // ex: /categories/new
      const newPath = currentPath.substring(0, currentPath.lastIndexOf("/")) // ex: /categories
      navigate(newPath)
    }
  }

  return (
    <Sheet open={true} onOpenChange={handleCloseForm}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            Preencha os campos abaixo e clique em salvar.
          </SheetDescription>
        </SheetHeader>

        {children}

        <SheetFooter>
          <div className="flex flex-row py-4 gap-1">
            <Button onClick={onSave}>Salvar</Button>
            <SheetClose asChild>
              <Button variant="outline">Cancelar</Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}