import React from 'react'
import { StyledHeader, Logo, HeaderTitleBox, HeaderTitle, HeaderSubtitle} from "./styles/Header.styled";
import {ButtonHeader} from "./styles/Button.styled";



function Header() {
  return (
        <StyledHeader>
            <Logo src='./images/opensea-logo.png' alt=''/>
            <HeaderTitleBox>
                    <HeaderTitle>NFT Showcase</HeaderTitle>
                    <HeaderSubtitle>Discover the latest collections</HeaderSubtitle>
                    <ButtonHeader href='#'>Discover collections</ButtonHeader>
            </HeaderTitleBox>
        </StyledHeader>
  )
}

export default Header