import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const setBgColor = (bgColor = 'default') => {
  switch (bgColor) {
    case 'red':
      return '#DC2626';
    case 'yellow':
      return '#FBBF24';
    case 'green':
      return '#34D399';
    case 'blue':
      return '#3B82F6';
    case 'purple':
      return '#8B5CF6';
    case 'indigo':
      return '#6366F1';
    case 'pink':
      return '#EC4899';
    default:
      return 'rgba(5, 29, 51, 0.9)';
  }
};

const DrawerWrapper = styled.div`
  display: block;
  overflow: hidden;
  width: ${(props) =>
    props.position !== 'top' && props.position !== 'bottom' && props.size ? props.size : '300px'};
  height: ${(props) => (props.position === 'top' || props.position === 'bottom') && '100%'};
  transform: ${(props) => (!props.open ? transforms[props.position] : null)};
`;

const animation = keyframes`
    from{
        opacity: 0;
        background-color: rgba(0, 0, 0, 0);
    }to{
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.15);

    }
`;

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 20;

  animation: ${animation} 0.5s linear forwards;
  display: ${(props) => (props.open ? null : 'none')};
`;

const DrawerContent = styled.div`
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
  transition: transform .2s ease-out;
  overflow-x: hidden;
  color: #fafafa;
  background-color: ${(props) => setBgColor(props.backgroundColor) || '#fff'};
  padding: 1rem 2rem;
  box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.19);
`;

const Drawer = ({ open, size, position, onDismiss, backgroundColor, children }) => {
  return (
    <div>
      <DrawerWrapper open={open} size={size} position={position}>
        <DrawerOverlay open={open} onClick={onDismiss} />
        <DrawerContent
          open={open}
          size={size}
          position={position}
          backgroundColor={backgroundColor}
        >
          {children}
        </DrawerContent>
      </DrawerWrapper>
    </div>
  );
};

export default Drawer;
