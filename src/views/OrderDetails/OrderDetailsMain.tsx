import React, {useCallback, useMemo, useState} from "react";
import DetailsHeader from "./DetailsHeader";
import {firstOrder} from "../../data/order";
import OrderInfo from "./OrderInfo";
import styled from "@emotion/styled";
import ProductsList from "./ProductsList";
import {colors} from "../../constants/colors";
import {OrderContext} from "../../contexts/OrderContext";
import {ProductStatus} from "../../models/product";

const OrderDetailsMain: React.FC = () => {
    const [order, setOrder] = useState(firstOrder);

    const updateProductStatus = useCallback((productId: number, status: ProductStatus) => {
        setOrder(order => ({
            ...order,
            products: order.products.map(product => {
                if (product.productId !== productId) {
                    return product
                }
                return {
                    ...product,
                    status
                }
            })
        }))
    }, [])

    return (
        <div>
            <OrderContext.Provider  value={{order, updateProductStatus}}>
                <DetailsHeader/>
                <Container>
                    <OrderInfo />
                    <ProductsList />
                </Container>
            </OrderContext.Provider>
        </div>
    );
}


const Container = styled.div`
  padding: 16px 128px;
  background-color: ${colors.gray50};
  height: calc(100vh - 112px);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default OrderDetailsMain