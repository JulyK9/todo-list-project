import React from 'react'
import styled from 'styled-components'
import { AiOutlineMenu } from "react-icons/ai";

const MenuBarStyle = styled.div`
  background-color: #FF7D36;
  padding: 10px;
`;

const Nav = () => {
  return (
    <MenuBarStyle className="menuBar">
      <AiOutlineMenu size={30} color="white" />
    </MenuBarStyle>
  );
}

export default Nav