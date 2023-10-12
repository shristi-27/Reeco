import React, {useContext} from "react";
import styled from "@emotion/styled";
import {OrderContext} from "../../contexts/OrderContext";
import {colors} from "../../constants/colors";

const DetailsHeader: React.FC = () => {
    const {order} = useContext(OrderContext);

    return (<Container>
        <Breadcrumb>
            Orders <span>{'>'}</span> <span>Order {order.id}</span>
        </Breadcrumb>
        <Header>Order {order.id}</Header>
    </Container>)
}

const Container = styled.div`
  padding: 12px 128px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, .12);
`

const Header = styled.h2`
  margin: 0
`

const Breadcrumb = styled.div`
    color: ${colors.gray500};
  font-size: 12px;
  margin-bottom: 16px;
  display: flex;
  gap: 10px;
  
  & > :last-child {
    text-decoration: underline;
  }
  
`


export default DetailsHeader;