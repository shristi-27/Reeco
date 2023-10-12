import React, {useContext, useMemo, useState} from "react";
import {OrderProduct, OrderStatus} from "../../models/orders";
import styled from "@emotion/styled";
import StatusChip from "../../components/StatusChip";
import {AiOutlineCheck} from 'react-icons/ai';
import {RxCross1} from 'react-icons/rx';
import {ProductStatus, ProductStatusData} from "../../models/product";
import {OrderContext} from "../../contexts/OrderContext";
import StatusConfirmationModal from "./StatusConfirmationModal";

interface StatusCellProps {
    product: OrderProduct
}

const StatusSection: React.FC<StatusCellProps> = ({product}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const {order} = useContext(OrderContext);

    const {updateProductStatus} = useContext(OrderContext);

    const approveProduct = () => {
        updateProductStatus(product.productId, ProductStatus.APPROVED)
    }

    const markProductAsMissing = (isUrgent: boolean) => {
        updateProductStatus(product.productId, isUrgent ? ProductStatus.MISSING_URGENT : ProductStatus.MISSING)
        setIsModalOpen(false)
    }

    const isUpdateAllowed = useMemo(() => {
        if (order.status === OrderStatus.APPROVED) {
            return false;
        }
        const currentDate = new Date();
        return currentDate.getTime() < order.shippingDate.getTime()

    }, [])

    return (<Cell>
        <StatusChip status={product.status}/>
        {isUpdateAllowed && (<Actions>
            <AiOutlineCheck
                color={product.status === ProductStatus.APPROVED ? ProductStatusData[ProductStatus.APPROVED] : undefined}
                onClick={approveProduct}/>
            <RxCross1
                color={product.status === ProductStatus.MISSING
                    ? ProductStatusData[ProductStatus.MISSING]
                    : product.status === ProductStatus.MISSING_URGENT
                        ? ProductStatusData[ProductStatus.MISSING_URGENT]
                        : undefined}
                onClick={() => setIsModalOpen(true)}
            />
        </Actions>)}
        {<StatusConfirmationModal
            onClose={() => setIsModalOpen(false)}
            isOpen={isModalOpen}
            name={product.product.name}
            markProductAsMissing={markProductAsMissing}
        />
        }
    </Cell>);
}

const Cell = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
`

const Actions = styled.span`
  display: flex;
  gap: 16px;

  & > * {
    cursor: pointer;
  }
`

export default StatusSection;