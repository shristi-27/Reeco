import {colors} from "../constants/colors";

export interface Product {
    id: number;
    name: string;
    brand: string;
    price: number;
    image?: string;
}

export enum ProductStatus {
    APPROVED = 'Approved',
    MISSING = 'Missing',
    MISSING_URGENT = 'Missing - Urgent',
}

export const ProductStatusData = {
    [ProductStatus.APPROVED]: colors.success500,
    [ProductStatus.MISSING_URGENT]: colors.error600,
    [ProductStatus.MISSING]: colors.secondary500
}