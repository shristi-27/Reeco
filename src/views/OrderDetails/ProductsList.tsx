import React, {useContext} from "react";
import styled from "@emotion/styled";
import {orderUnit} from "../../data/order";
import {colors} from "../../constants/colors";
import StatusSection from "./StatusSection";
import {OrderContext} from "../../contexts/OrderContext";
import logo from '../../images/avocado.jpg';


const ProductsList: React.FC = () => {
    const {order: {products}} = useContext(OrderContext);

    return (<Container>
        <StyledTable>
            <HeaderRow>
                <ColumnHeader></ColumnHeader>
                <ColumnHeader>Product name</ColumnHeader>
                <ColumnHeader>Brand</ColumnHeader>
                <ColumnHeader>Price</ColumnHeader>
                <ColumnHeader>Quantity</ColumnHeader>
                <ColumnHeader>Total</ColumnHeader>
                <ColumnHeader colSpan={2}>Status</ColumnHeader>
            </HeaderRow>
            {products.map(product => (
                <BodyRow key={product.productId}>
                    <td><Image src={product.product.image || logo} alt="product"/></td>
                    <td width={'400px'}>{product.product.name}</td>
                    <td width={'200px'}>{product.product.brand}</td>
                    <td width={'120px'}>${product.product.price} / {orderUnit}</td>
                    <td width={'120px'}>
                        <BoldText>{product.quantity}</BoldText>
                        <LightText>x {orderUnit}</LightText>
                    </td>
                    <td width={'100px'}>{product.quantity ? `$${product.quantity * product.product.price}` : 0}</td>
                    <StatusCell width={'300px'}>
                        <StatusSection product={product}/>
                    </StatusCell>
                </BodyRow>
            ))}
        </StyledTable>
    </Container>)
}


const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`

const Container = styled.div`
  display: flex;
  border-radius: 12px;
  border: 1px solid ${colors.gray300};
  padding: 32px;
  background-color: white;
`

const HeaderRow = styled.tr`
  & > th {
    padding: 8px 0;
    font-weight: normal;
    color: ${colors.gray600};
    border-bottom: 1px solid ${colors.gray200};
    border-top: 1px solid ${colors.gray200};
  }

  & > :first-child {
    border-left: 1px solid ${colors.gray200};
    border-top-left-radius: 12px;
    padding-left: 4px;
  }

  & > :last-child {
    border-right: 1px solid ${colors.gray200};
    border-top-right-radius: 12px;
    padding-left: 4px;
  }

`

const BodyRow = styled.tr`
  & > td {
    padding: 16px 4px 16px 0;
    border-bottom: 1px solid ${colors.gray400};
  }

  & > :first-child {
    padding-left: 4px;
  }
`

const StatusCell = styled.td`
  background-color: ${colors.gray50};
`

const ColumnHeader = styled.th`
  text-align: left
`

const BoldText = styled.span`
  font-weight: bold;
`

const LightText = styled.span`
  color: ${colors.gray600}
`

const Image = styled.img`
  height: 35px;
  padding: 0 8px;
`

export default ProductsList