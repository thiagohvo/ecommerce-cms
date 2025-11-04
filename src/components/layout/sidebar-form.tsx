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
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import { Trash2 } from "lucide-react"

type SidebarFormProps = {
  title: string
  children: ReactNode
  onSave?: () => void
  onDelete?: () => void
  loading: boolean
}

export function SidebarForm({ title, children, onSave, onDelete, loading }: SidebarFormProps) {
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

        <div className="px-8">
          {children}
        </div>

        <SheetFooter className="flex flex-row justify-between">
          <div className="flex flex-row justify-between w-full py-4 gap-1">
            <div className="flex gap-1">
              <Button type="button" onClick={onSave} disabled={loading}>
                Salvar
              </Button>
              <SheetClose asChild>
                <Button variant="outline" disabled={loading}>
                  Cancelar
                </Button>
              </SheetClose>
            </div>

            {onDelete && (
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button 
                    variant="destructive" 
                    size="icon"
                    onClick={onDelete}
                    disabled={loading}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Excluir</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}