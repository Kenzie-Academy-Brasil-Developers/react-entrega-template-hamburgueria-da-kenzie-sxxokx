import React from 'react'
import LogoImg from '../../assets/img/logo.svg'
import { StyledHeader } from './style'

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={LogoImg} />
        <input type="search" placeholder='Pesquise aqui' />
      </div>
    </StyledHeader>
  )
}
