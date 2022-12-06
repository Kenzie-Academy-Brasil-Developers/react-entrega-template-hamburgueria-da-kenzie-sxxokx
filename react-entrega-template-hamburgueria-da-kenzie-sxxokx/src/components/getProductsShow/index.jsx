import {React, useState} from "react";
import { StyledGetProductsShow } from "./style";


export const GetProductsShow = ({productsShow, addCurSale, removeCurSale}) => {
 
    return (
        <StyledGetProductsShow>
            <img src={productsShow.img} alt="" />
            <div>
            <h3>{productsShow.name}</h3>
            <p>{productsShow.category}</p>
            <span>R$ {productsShow.price.toFixed(2).toString().replace('.', ',')}</span>
            <button onClick={() => addCurSale(productsShow)} >Adicionar</button>
            </div>
        </StyledGetProductsShow>
    )
}