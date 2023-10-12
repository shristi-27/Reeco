import React, {useContext, useMemo} from "react";
import styled from "@emotion/styled";
import {colors} from "../../constants/colors";
import {OrderContext} from "../../contexts/OrderContext";

const OrderInfo: React.FC = () => {
    const {order} = useContext(OrderContext);

    const total = useMemo<number>(() => (
        order.products.reduce((t, product) => t + (product.product.price * product.quantity), 0)
    ),[order.products]);

    return (<Container>
        <InfoSection>
            Supplier
            <p>{order.supplier}</p>
        </InfoSection>
        <InfoSection>
            Shipping date
            <p>{order.shippingDate.toDateString()}</p>
        </InfoSection>
        <InfoSection>
            Total
            <p>$ {total.toLocaleString()}</p>
        </InfoSection>
        <InfoSection>
            Department
            <p>{order.department}</p>
        </InfoSection>
        <InfoSection>
            Status
            <p>{order.status}</p>
        </InfoSection>
    </Container>)
}

const Container = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid ${colors.gray300};
  padding: 16px 8px;
  background-color: white;

  & > :not(:first-child) {
    border-left: 1px solid ${colors.gray300};
  }
`

const InfoSection = styled.div`
  flex: 1;
  padding: 0 24px;
  font-weight: bold;
  font-size: 12px;
  color: ${colors.gray400};
  
  & > p {
    margin: 4px 0;
    font-size: 16px;
    color: ${colors.black}
  }
`

export default OrderInfo;