import type { CustomerDTO } from "@/cases/customers/dtos/customer";
import type { ProductDTO } from "@/cases/products/dtos/products.dto";



export interface OrderItem{
    id?: string;
    productId: ProductDTO;
    quantity: number;
    price: number;
}
export interface OrderDTO{
    id?: string;
    customer: CustomerDTO;
    status: string;
    totalAmount: number;
    items: OrderItem[];
    createdAt?: Date;
    updatedAt?: Date;
}