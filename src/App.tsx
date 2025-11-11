import { Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { CategoryLayout } from "@/cases/categories/components/category-layout"
import { CategoryForm } from "./cases/categories/components/category-form"
import { BrandsLayout } from "./cases/brands/components/brands-layout"
import { BrandForm } from "./cases/brands/components/brands-form"
import { ProductsLayout } from "./cases/products/components/products.layout"
import { ProductForm } from "./cases/products/components/products-form"
import { AppSidebar } from "./components/layout/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"

function App() {

  return (
    <div className="wrapper">
      <SidebarProvider>
        <AppSidebar/>
      
      <main>
        <Routes>
          
          <Route path="/categories" element={ <CategoryLayout />}>
            <Route path="new" element={ <CategoryForm />} />
            <Route path=":id" element={ <CategoryForm />} />
          </Route>

            <Route path="/brands" element={ <BrandsLayout /> }>
              <Route path="new" element={<BrandForm />} />
              <Route path=":id" element={<BrandForm />} />
            </Route>

            <Route path="/products" element={ <ProductsLayout /> }>
              <Route path="new" element={<ProductForm />} />
              <Route path=":id" element={<ProductForm />} />
            </Route>
          
        </Routes>
      </main>
      



      <ToastContainer />
      </SidebarProvider>

    </div>
  )
}

export default App