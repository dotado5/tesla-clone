import React, { useState } from 'react'
import { BurgerNav, CloseWrapper, Container, CustomClose, CustomMenu, Menu, RightMenu} from './components styles/HeaderStyle'

function Header() {
  const[burgerStatus, setBurgerStatus] = useState(false)
  return (
    <Container>
      <a href="">
        <img src='/images/logo.svg'/>
      </a>
      <Menu> 
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model Y</a>
        <a href="#">Model X</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
      </RightMenu>
      <CustomMenu onClick = {()=> setBurgerStatus(true)}/>
     <BurgerNav show ={burgerStatus}>
        <CloseWrapper >
          <CustomClose onClick = {() => setBurgerStatus(false)}/>
        </CloseWrapper>
        <li><a href="#"> Existing Inventory</a></li>
        <li><a href="#"> Used Inventory</a></li>
        <li><a href="#"> Trade-In</a></li>
        <li><a href="#"> Cybertruck</a></li>
        <li><a href="#"> Roadster</a></li>
        <li><a href="#"> Electric Plane</a></li>
        <li><a href="#"> Existing Inventory</a></li>
      </BurgerNav>
    </Container>
  )
}

export default Header
