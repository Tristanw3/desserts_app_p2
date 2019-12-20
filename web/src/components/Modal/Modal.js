import React from 'react';
import { Button } from '../Button';
import { ModalWrapper, ModalText } from './ModalStyled';

export const Modal = (props) => {
  return (
    <ModalWrapper
      style={{
        transform: props.show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>

      <ModalText>
        <h1>Enjoy Your Sweets</h1>
        <p>Thanks for shopping with us</p>
      </ModalText>


      <Button onClick={props.close}>Close</Button>
      {/* <StyledLink to="/"><Button onClick={props.close}>Close</Button></StyledLink> */}

    </ModalWrapper>
  )
};