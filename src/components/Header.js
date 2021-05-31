import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';


function Header() {
    const [burgerStatus, setBurgerStatus] = useState();
    const cars = useSelector(selectCars)
    console.log(cars);
    return (
        <Container>
            <a>
                <img src="/images/logo.png" />
            </a>
            <Menu>
                {cars && cars.map((car, index) =>(

                    <a key={index} href="#">{car}</a>

                ))}
                {/* <p><a href="#">Model 3</a></p>
                <p><a href="#">Model X</a></p>
                <p><a href="#">Model Y</a></p> */}

            </Menu>
            <RightMenu>
                <a href="#">SHOP</a>
                <a href="#">TESLA ACCOUNT</a>
                <CustomMenu onClick={() => { setBurgerStatus(true) }}>
                </CustomMenu>
            </RightMenu>
            <BurgerNav show={burgerStatus}>
                <CloseWraper>

                    <CustomClose onClick={() => { setBurgerStatus(false) }}>

                    </CustomClose>
                </CloseWraper>

                {cars && cars.map((car, index) => (

                    <li key={index}><a href="#">{car}</a> </li>

                ))}
                <li><a href="">Existing Inventory</a></li>
                <li><a href="">Used Inventory</a></li>
                <li><a href="">Trade-in</a></li>
                <li><a href="">Cybertruck</a></li>
                <li><a href="">Roadaster</a></li>
                <li><a href="">Existing Inventory</a></li>

            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div`
      min-height:60px;
      position:fixed;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:0 20px;
      top:0;
      left:0;
      right:0;
      z-index:1;
    


`
const Menu = styled.div`
   display:flex;
   justify-content: center;
   align-items:center;
   flex:1;
   a{
       font-weight:600;
       text-transform:uppercase;
       padding:0px 10px;
       flex-Wrap:nowrap;

   }

   @media(max-width:800px){
       display:none;
       ${'' /* visibility: hidden; */}
       
   }

`
const RightMenu = styled.div`
     display:flex;
     align-items:center;
     
    a{
       font-weight:600;
       text-transform:uppercase;
       margin-right:10px;
       

   }

    

`
const CustomMenu = styled(MenuIcon)`
      cursor:pointer;
      right:0;
      

`

const BurgerNav = styled.div` 
      position:fixed;
      top:0;
      bottom:0;
      right:0;
      background:white;
      width:250px;
      z-index:16;
      list-style:none;
      transform:${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
      transition:transform 0.4s ;
      padding:20px;
      li{
          padding:15px 0px;
          border-bottom:1px solid rgba(0,0,0,0.2);
        a{
            font-weight:600;
        }
          
        }
      

`

const CustomClose = styled(CloseIcon)`
      cursor:pointer;


`

const CloseWraper = styled.div`
     display:flex;
     justify-content:flex-end;


`