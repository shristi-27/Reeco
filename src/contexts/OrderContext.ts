import { createContext } from 'react';
import {firstOrder} from "../data/order";
import {Order} from "../models/orders";
import {ProductStatus} from "../models/product";

interface OrderContextModel {
    order: Order,
    updateProductStatus: (productId: number, status: ProductStatus) => void
}

export const OrderContext = createContext<OrderContextModel>({
    order: firstOrder,
    updateProductStatus: () => {}
});