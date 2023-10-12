import {Product, ProductStatus} from "./product";

export interface Order {
    id: string;
    supplier: string;
    shippingDate: Date;
    department: string;
    status: OrderStatus;
    products: OrderProduct[]
}

export interface OrderProduct {
    productId: number;
    product: Product;
    quantity: number;
    status?: ProductStatus
}

export enum OrderStatus {
    APPROVED = 'APPROVED',
    PENDING = 'PENDING'
}