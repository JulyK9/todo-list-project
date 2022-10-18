import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.footer`
  text-align: center;
  height: 30px;
  padding: 1rem;
  /* position: fixed;
  bottom: 0; */
`

const Footer = () => {
  return (
    <FooterStyle>Copyright © 2022 JulyK9 </FooterStyle>
  )
}

export default Footer