import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types'
import { setBgColor } from '../../utils/helpers';
const transforms = {
  top: 'translateY(-100%)',
  right: 'translateX(100%)',
  bottom: 'translateY(100%)',
  left: 'translateX(-100%)',
};
const placements = {
  top: {
    top: 0,
    right: 0,
    left: 0,
  },
  right: {
    top: 0,
    right: 0,
    bottom: 0,
  },
  bottom: {
    right: 0,
    bottom: 0,
    left: 0,
  },
  left: {
    top: 0,
    bottom: 0,
    left: 0,
  },
};


const animation = keyframes`
    from{
        opacity: 0;
        background-color: rgba(0, 0, 0, 0);
    }to{
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.15);

    }
`;
export const DrawerWrapper = styled.div`
  display: block;
  overflow: hidden;
  width: ${(props) =>
    props.position !== 'top' && props.position !== 'bottom' && props.size ? props.size : '300px'};
  height: ${(props) => (props.position === 'top' || props.position === 'bottom') && '100%'};
  transform: ${(props) => (!props.open ? transforms[props.position] : null)};
`;

export const DrawerOverlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 20;

  animation: ${animation} 0.5s linear forwards;
  display: ${(props) => (props.open ? null : 'none')};
`;

export const DrawerContent = styled.div`
  display: block;
  box-sizing: border-box;
  position: fixed;
  ${(props) => placements[props.position]}
  z-index: 30;
  width: ${(props) =>
    props.position !== 'top' && props.position !== 'bottom'
      ? props.size
        ? props.size
        : '300px'
      : '100%'};

  transform: ${(props) => (!props.open ? transforms[props.position] : null)};
  transition: transform 0.2s ease-out;
  overflow-x: hidden;
  color: #fafafa;
  background-color: ${(props) => setBgColor(props.backgroundColor) || '#fff'};
  padding: 1rem 2rem;
  box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.19);
`;
export const ButtonExit = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  ${(props) => placements[props.position]}
  z-index: 30;
  color: #fff;
  font-size: 2rem;
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  transition: transform 0.1s ease-in;
  &:hover {
    color: #d1d1d1;
  }
  &:active {
    transform: scale(0.9);
    color: #d1d1d1;
  }
`;


const Drawer = ({
  open,
  size,
  position,
  onDismiss,
  backgroundColor,
  children,
  buttonExit,
}) => {
  return (
    <DrawerWrapper open={open} size={size} position={position}>
      <DrawerOverlay open={open} onClick={onDismiss} />
      <DrawerContent open={open} size={size} position={position} backgroundColor={backgroundColor}>
        {buttonExit ? (
          <ButtonExit onClick={onDismiss}>
            <MdClose  />
          </ButtonExit>
        ) : null}
        {children}
      </DrawerContent>
    </DrawerWrapper>
  );
};

Drawer.propTypes = {
  /**
   * ~~~
   * Drawer dimension
   * ~~~
   */
  size: PropTypes.number.isRequired,
   /**
   * ~~~
   * Define if Drawer is open
   * ~~~
   */
  open: PropTypes.bool,
  /**
   * ~~~
   * Drawer position
   * ~~~
   */
  position: PropTypes.oneOf(['left,top,right,bottom']),
  /**
   * ~~~
   * Drawer dismiss function
   * ~~~
   */
  onDismiss: PropTypes.func,
  /**
   * ~~~
   * Drawer background color
   * ~~~
   */
  backgroundColor: PropTypes.oneOf(['danger','warning','success','primary','accent','info','secondary','text']),
  /**
   * ~~~
   * Children component
   * ~~~
   */
  children: PropTypes.node.isRequired,
  /**
   * ~~~
   * Drawer exit button
   * ~~~
   */
  buttonExit: PropTypes.bool,

}
Drawer.defaultProps = {
  open: false,
  position: 'left',
  onDismiss: ()=>{},
  backgroundColor: 'text',
  buttonExit: true,
}

/* open = false,
  size,
  position = 'right',
  onDismiss,
  backgroundColor = 'default',
  children,
  buttonExit, */

export default Drawer;
