import React from "react";
import Modal from 'react-modal';
import styled from "@emotion/styled";
import {RxCross1} from "react-icons/rx";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '350px'
    },
};

interface StatusConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    name: string;
    markProductAsMissing: (isUrgent: boolean) => void
}

const StatusConfirmationModal: React.FC<StatusConfirmationModalProps> = (
    {
        isOpen,
        onClose,
        name,
        markProductAsMissing
    }) => {

    return (
        <Modal isOpen={isOpen} style={customStyles}>
            <div>
                <Header>
                    <BoldText>Missing Product</BoldText>
                    <RxCross1 onClick={onClose}/>
                </Header>
                <p>
                    Is '{name}' urgent?
                </p>
                <Footer>
                    <BoldText onClick={() => markProductAsMissing(false)}>No</BoldText>
                    <BoldText  onClick={() => markProductAsMissing(true)}>Yes</BoldText>
                </Footer>
            </div>
        </Modal>
    )
}

const Header = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
`

const BoldText = styled.span`
    font-weight: bold;
`

const Footer = styled.div`
    display: flex;
  justify-content: flex-end;
  gap: 24px;
  margin-top: 32px;
  
  & > * {
    cursor: pointer;
  }
`

export default StatusConfirmationModal