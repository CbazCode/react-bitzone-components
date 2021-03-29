import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';

const entry = keyframes`
  from{
      /* transform: scale(0.2); */
      opacity:0;
      background: rgba(0, 0, 0, 0);
  }
  to{
      /* transform: scale(1); */
      opacity:1;
      background: rgba(0, 0, 0, 0.8);
      
      
  }
`;

export const Background = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  animation: ${entry} 0.6s ease-in-out forwards;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 999;
`;

const widthModalWrapper = (withImage) => {
  return withImage ? '850px' : '400px';
};

const gridModalWrapper = (withImage) => {
  return withImage ? '1fr 1fr' : '1fr';
};

export const ModalWrapper = styled.div`
  width: ${({ withImage }) => widthModalWrapper(withImage)};
  font-family: 'Sora', sans-serif;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  /* margin:auto 2rem; */
  grid-template-columns: ${({ withImage }) => gridModalWrapper(withImage)};
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-width: 930px) {
    grid-template-columns: 1fr;
    width: 400px;
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0 10px 10px 0px;
  background: #000;
  @media screen and (max-width: 930px) {
    border-radius: 0 0 10px 10px;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding: 1rem;
`;

export const ModalBody = styled.p`
  padding: 2rem;
`;

export const ModalHeader = styled.h1`
  font-size: 2rem;
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
