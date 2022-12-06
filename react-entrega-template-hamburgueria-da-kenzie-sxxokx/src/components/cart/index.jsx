import React from 'react'
import { StyledCart,  } from './style'

export const Cart = ({currentSale, setCurrentSale, removeCurSale}) => {
  return (
    <StyledCart>
      <div className='container-cart-head'>
        <h3>Carrinho de compras</h3>
      </div>
      <div>
      {currentSale.map((itens) => (
        <li className='cart-li-itens' key={itens.id}>
          <div className='container-infos-cart'>
          <img src={itens.img} alt="" />
          <div>
          <h3>{itens.name}</h3>
          <p>{itens.category}</p>
          </div>
          </div>
          <button onClick={() => removeCurSale(itens.id)}>remover</button>
        </li>
      ))}
     </div>
     <div className='container-total-price'>
      <h2>Total</h2>
      <p className="value-total">R$ {currentSale.reduce((acc, elem) => acc+elem.price, 0 ).toFixed(2).toString().replace('.', ',')}</p>
     </div>
    </StyledCart>
  )
}
