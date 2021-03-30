import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
//Animacion de pulso
const pulse = keyframes`
  0%{
    background-color: #cacaca;
  }
  50% {
    background-color: #fafafa;
  }
  100%{
    background-color: #cacaca;
  }
`;

//Default, en caso se encuentre cargado muestra imagen
const renderLoading = (isLoaded = false) =>
  !isLoaded &&
  css`
    background-color: #cacaca;
    border-radius: 4px;
    animation: ${pulse} 3s linear infinite;
    color: transparent;
    user-select: none;
  `;
//Renderizado de circulo
const renderCircle = (isLoaded = false, size = 5) =>
  !isLoaded &&
  css`
    height: calc(${size}px*10);
    width: calc(${size}px*10);
    background-color: #cacaca;
    border-radius: 50%;
    color: transparent;
    font-size: 0;
    animation: ${pulse} 3s linear infinite;
  `;

//Selector del tipo de skeleton
const typeSkeleton = (props) => {
  let type = props.type.toUpperCase() || 'DEFAULT';
  switch (type) {
    case 'CIRCLE':
      return renderCircle(props.isLoaded, props.size);
    default:
      return renderLoading(props.isLoaded);
  }
};

const SkeletonStyled = styled.div`
  width: 100%;
  height: ${(props) => `${props.height}px` || 'auto'};
  margin-top: ${(props) => `${props.mt}px` || '5px'};
  margin-right: ${(props) => `${props.mr}px` || '5px'};
  margin-bottom: ${(props) => `${props.mb}px` || '5px'};
  margin-left: ${(props) => `${props.ml}px` || '5px'};
  ${(props) => typeSkeleton(props)}
`;

const Skeleton = (props) => <SkeletonStyled {...props} />;

Skeleton.propTypes = {
  /**
   * ~~~
   * Skeleton dimension
   * ~~~
   */
  height: PropTypes.number,
  /**
   * ~~~
   * Skeleton margin top
   * ~~~
   */
  mt: PropTypes.number,
  /**
   * ~~~
   * Skeleton margin right
   * ~~~
   */
  mr: PropTypes.number,
  /**
   * ~~~
   * Skeleton margin bottom
   * ~~~
   */
  mb: PropTypes.number,
  /**
   * ~~~
   * Skeleton margin left
   * ~~~
   */
  ml: PropTypes.number,
  /**
   * ~~~
   * Skeleton shape
   * ~~~
   */
  type: PropTypes.oneOf( ['DEFAULT','CIRCLE']),
  /**
   * ~~~
   * Skeleton size
   * ~~~
   */
  size: PropTypes.number,
  /**
   * ~~~
   * Skeleton status
   * ~~~
   */
  isLoaded: PropTypes.bool,
  /**
   * ~~~  
   * Skeleton children
   * ~~~
   *
   */ 
  children: PropTypes.node

};
Skeleton.defaultProps = {
  mt: 5,
  mr: 5,
  mb: 5,
  ml: 5,
  type: 'DEFAULT',
  size: 5,
  isLoaded: false,
  children: null,
  height: 200
};

export default Skeleton;
