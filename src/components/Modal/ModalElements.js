import styled , { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';


const entry = keyframes`
  from{
      opacity:0;
      background: rgba(0, 0, 0, 0);
  }
  to{
      opacity:1;
      background: rgba(0, 0, 0, 0.8);
      
  }
`;

export const Background = styled.div`
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  animation: ${entry} 0.5s ease-in-out;
  justify-content: center;
  align-items: center;
  /* transition: all 1s ease-in-out; */
  /* overflow-y: auto; */
  z-index:999;
 
`;

export const ModalWrapper = styled.div`
  /* width: 850px; */
  
  //Pequeño sin imagen
  width: 400px;


  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  /* margin-top:6rem; */
  grid-template-columns: 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  /* border-radius: 10px 0 0 10px; */
  background: #000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding:1rem;
  
  /* button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  } */
`;

export const ModalBody = styled.p`

    padding: 2rem;
    //Pequeño sin imagen
    /* font-size: 0.9rem; */
    /* text-align:justify; */
   
`;

export const ModalHeader = styled.h1`
    //Pequeño sin imagen
    /* font-size: 1.5rem */
    
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;
