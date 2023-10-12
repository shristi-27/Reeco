import React from "react";
import styled from "@emotion/styled";
import {colors} from "../constants/colors";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const NavBar: React.FC = () => {
    return (<Bar>
        <SubSection>
            <Heading>Reeco</Heading>
            <div>Store</div>
            <div>Orders</div>
            <div>Analytics</div>
        </SubSection>
        <SubSection>
            <AiOutlineShoppingCart size={24}/>
            <div>Hello, James</div>
        </SubSection>
    </Bar>)
}

const Bar = styled.div`
    background-color: ${colors.success800};
  padding: 16px 128px;
  color: ${colors.white};
  display: flex;
  justify-content: space-between;
`

const Heading = styled.h2`
    margin: 0
`

const SubSection = styled.div`
    display: flex;
  gap: 42px;
  align-items: center;
`

export default NavBar;