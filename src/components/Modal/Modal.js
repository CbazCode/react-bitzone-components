import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Background, CloseModalButton, ModalBody, ModalContent, ModalHeader, ModalImg, ModalWrapper } from './ModalElements';
// import Button from '../Button/Button'
import img from './modal.jpg'
const Modal = ({ showModal, setShowModal, children, appear}) => {
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
            default:
                return showModal ? `translateY(0%)` : `translateY(-100%)`
        }
    }
  
    const animation = useSpring({
      config: {
        duration: 500
      },
      opacity: showModal ? 1 : 0,
    //   transform: showModal ? `translateX(0%)` : `translateX(100%)`
      transform: selectTransform(appear, showModal)
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
              <ModalWrapper showModal={showModal}>
                  {
                      false &&
                      <ModalImg src={img} alt='camera' />
                  }
                <ModalContent>
                  <ModalHeader>Are you ready?</ModalHeader>
                  <ModalBody>Get exclusive access to our next launch. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis minima ratione placeat facere illo fuga non id aliquam cumque molestias! pruebbda dasdasda asd asdasdadadafasfafafasfafafaf Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni incidunt excepturi quae.</ModalBody>
                  {/* <Button color="white" bgColor="red" size="xl" rounded="full">Join Now</Button> */}
                  {children}
                </ModalContent>
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