import React from 'react';
import { Button, StyledLink } from '../Button';
import { ModalWrapper } from './ModalStyled';

export const Modal = (props) => {
  return (
    <ModalWrapper
      style={{
        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>

      <h1>Enjoy Your Sweets</h1>
      <p>Thanks for shopping with us</p>

      <StyledLink to="/"><Button onClick={props.close}>Close</Button></StyledLink>

    </ModalWrapper>
  )
};