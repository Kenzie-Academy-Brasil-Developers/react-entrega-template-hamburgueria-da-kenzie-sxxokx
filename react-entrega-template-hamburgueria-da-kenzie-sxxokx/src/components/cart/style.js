import styled from "styled-components";

export const StyledCart = styled.ul`
    width: 100%;
    max-width: 365px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    list-style-type: none;
    
    button{
        background-color: transparent;
        border: none;
        font-size: 12px;
        font-weight: 400;
        color: #828282;
    }

    .container-cart-head{
        background-color:  #27AE60;
        
        width: 100%;
        height: 65px;
        margin-left: 16px;
        border-bottom: solid 1px #E0E0E0;
        
        border-radius: 5px 5px 0px 0px;
        display:flex;
        h3{
            margin-left: 16px;
            font-size: 18px;
            font-weight: 700;
            color: #ffffff;
        }

    }

    .cart-li-itens{
        display: flex;
        justify-content: space-between;
        background-color: #F5F5F5;
        align-items:center;
        width: 365px;
        max-width: 100%;
        height: 80px;
        position:relative;
        left:8px;
        gap: 8px;

    }
    .container-infos-cart{
        display: flex;  
        justify-content:center;
        align-items: center;
        gap: 10px;
        img{
            width:70px;
            height: 70px;
        }
        h3{
            font-size: 18px;
            font-weight: 700;
            color: #333333;
        }
        p{
            font-size: 12px;
            font-weight: 400;
            color: #828282;
        }
    }

    .container-total-price{
        width:350px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-size: 14px;
            font-weight: 600;
        }
        p{
            font-size: 14px;
            font-weight: 600;
            color: #828282;
        }
    }

    @media(min-width: 1300px){
        position: absolute;
        top: 90px;
        right: 10%;
    }

`
