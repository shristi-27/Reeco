import React from "react";
import {ProductStatus, ProductStatusData} from "../models/product";
import styled from "@emotion/styled";
import {colors} from "../constants/colors";

interface StatusChipProps {
    status?: ProductStatus;
}

const StatusChip: React.FC<StatusChipProps> = ({ status }) => {
    return (status ? <Chip status={status}>{status}</Chip> : <span />);
}

const Chip = styled.span(({status}: {status: ProductStatus}) => ({
    padding: '4px 12px',
    color: colors.white,
    backgroundColor: ProductStatusData[status],
    borderRadius: '12px',
    lineHeight: '16px',
    fontSize: '14px',
}))

export default StatusChip;