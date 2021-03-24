import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, CloseModalButton,  ModalContent, ModalImg, ModalWrapper } from './ModalElements';



const Modal = ({ showModal, setShowModal, children,appear, withImage, sourceImage}) => { 
    const modalRef = useRef(); 

    const selectTransform = (appear, showModal) => {
        switch (appear) {
            case "top":
                return showModal ? `translateY(0%)` : `translateY(-100%)`
            case "bottom":
                return showModal ? `translateY(0%)` : `translateY(100%)`
            case "right":
                return showModal ? `translateX(0%)` : `translateX(100%)`
            case "left":
                return showModal ? `translateX(0%)` : `translateX(-100%)`    
            case "fadeIn":
                return showModal ? `none` : `none`         
            default:
                return showModal ? `translateY(0%)` : `translateY(-100%)`
        }
    }
  
    const animation = useSpring({
      config: {
        duration: 500
      },
      opacity: showModal ? 1 : 0,
      // transform: showModal ? `scale(1)` : `scale(0.5)`
      transform: selectTransform(appear, showModal),
    });
  
    const closeModal = e => {
      if (modalRef.current === e.target) {
        setShowModal(false);
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
          console.log('I pressed');
        }
      },
      [setShowModal, showModal]
    );
  
    useEffect(
      () => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
      },
      [keyPress]
    );
  
    return (
      <>
        {showModal ? (
          <Background onClick={closeModal} ref={modalRef}>
            <animated.div style={animation}>
              <ModalWrapper  withImage={withImage}>
                  
                <ModalContent>
                  {children}
                </ModalContent>
                {
                  withImage &&
                  <ModalImg src={sourceImage} alt='camera' />// eslint-disable-line no-unused-vars
                }
                <CloseModalButton
                  aria-label='Close modal'
                  onClick={() => setShowModal(prev => !prev)}
                />
              </ModalWrapper>
            </animated.div>
          </Background>
        ) : null}
      </>
    );
  };

  export default Modal;