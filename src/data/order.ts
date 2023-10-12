import {Order, OrderStatus} from "../models/orders";

export const firstOrder: Order = {
    id: '32457ABC',
    department: "300-44-974",
    shippingDate: new Date(2023, 11, 18),
    status: OrderStatus.PENDING,
    supplier: "East Coast fruits & vegetables",
    products: [
        {
            productId: 4,
            product: {
                id: 4,
                name: 'Avacados',
                brand: 'Hormal Black',
                price: 6
            },
            quantity: 5,
        },
        {
            productId: 5,
            product: {
                id: 5,
                name: 'Kiwi',
                brand: 'Hormal Black',
                price: 5
            },
            quantity: 5,
        },
        {
            productId: 2,
            product: {
                id: 2,
                name: 'Oranges',
                brand: 'Hormal Black',
                price: 8
            },
            quantity: 1,
        },
        {
            productId: 1,
            product: {
                id: 1,
                name: 'Apples',
                brand: 'Hormal Black',
                price: 55
            },
            quantity: 1,
        },
        {
            productId: 9,
            product: {
                id: 9,
                name: 'Bananas',
                brand: 'Hormal Black',
                price: 15
            },
            quantity: 0,
        },
        {
            productId: 10,
            product: {
                id: 10,
                name: 'Grapes',
                brand: 'Hormal Black',
                price: 10
            },
            quantity: 4,
        }
    ],
}

export const orderUnit = '6 * 1LB';
