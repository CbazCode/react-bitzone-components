import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { setBgColor, setOutline } from '../../utils/helpers';
//Establece el background del boton


//Establece el color de la fuente
const setColorText = (color = 'default') => {
  return color === 'white' ? '#F9FAFB' : '#111827';
};


//Establece el borde
const roundedBtn = (rounded = 'default') => {
  // return color === 'primary' ? '#2EBD9B' : 'black'
  switch (rounded) {
    case 'full':
      return '20px';
    case 'soft':
      return '10px';
    default:
      return '0px';
  }
};

//Tamaño de fuente
const setFontSize = (size) => {
  switch (size) {
    case 'xl':
      return '1.25rem';
    case 'lg':
      return '1.125rem';
    case 'sm':
      return '0.875rem';
    default:
      return '1rem';
  }
};

//Establece sombreado
const setShadow = (isShadow = false) => {
  return isShadow ? '-1px 6px 35px -7px rgba(0,0,0,0.75);' : 'none';
};

//Establece Hover Effect
const setHover = (bgColor = 'default', color = 'default') => {
  const isWhite = color === 'white';
  switch (bgColor) {
    case 'red':
      return isWhite ? '#991B1B' : '#F87171';
    case 'yellow':
      return isWhite ? '#F59E0B' : '#FCD34D';
    case 'green':
      return isWhite ? '#10B981' : '#6EE7B7';
    case 'blue':
      return isWhite ? '#1D4ED8' : '#60A5FA';
    case 'purple':
      return isWhite ? '#7C3AED' : '#A78BFA';
    case 'indigo':
      return isWhite ? '#4338CA' : '#818CF8';
    case 'pink':
      return isWhite ? '#BE185D' : '#F472B6';
    default:
      return isWhite ? '#000' : '#D1D5DB';
  }
};

//Tamaño de acuerdo al contenedor
const setFullWidth = (full) =>
  full &&
  css`
    width: 100%;
  `;

//Tema en disabled
const themeDisabledBtn = (isDisabled) =>
  isDisabled &&
  css`
    opacity: 0.5;
    &:hover { 
      opacity: 0.5;
    }
  `;

//Button con solo border sin bgColor

const setPlaceHolderColor = (bgColor,outliner=false)=>{
    switch (bgColor) {
        case 'red':
          return outliner ? '#777' : '#ffc7c7';
        case 'yellow':
          return outliner ? '#777' :'#f2e1b3';
        case 'green':
          return outliner ? '#777' :'#d1e0db';
        case 'blue':
          return outliner ? '#777' :'#cadcfa';
        case 'purple':
          return outliner ? '#777' :'#e0d4fa';
        case 'indigo':
          return outliner ? '#777' :'#dadbf0';
        case 'pink':
          return outliner ? '#777' :'#f0d3e1';
        default:
          return outliner ? '#777' :'#dedede';
    }
}
const InputStyled = styled.input.attrs((props) => ({
  disabled: props.isDisabled,
}))`
  background-color: ${({ bgColor }) => setBgColor(bgColor)};
  border: none;
  box-shadow: ${({ isShadow }) => setShadow(isShadow)};
  color: ${({ color }) => setColorText(color)};
  
  cursor: pointer;
  font-family: 'Sora', sans-serif;
  font-size: ${({ size }) => setFontSize(size)};
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: ${({ rounded }) => roundedBtn(rounded)};
  outline: none;
  transition: all 0.2s ease-in-out;
  ${({ full }) => setFullWidth(full)};

  &:hover {
    background-color: ${({ bgColor, color }) => setHover(bgColor, color)};
  }

  ${({ isDisabled }) => themeDisabledBtn(isDisabled)}

  ${({ outliner, outlinerColor }) => setOutline(outliner, outlinerColor)}
  &::placeholder{
      color:${({ bgColor, outliner=false }) => setPlaceHolderColor(bgColor,outliner)};
  }
`;

const Input = (props)=>(
  <InputStyled {...props}/>
)

Input.propTypes = {
  /**
   * ~~~
   *  Disable the Input
   * ~~~
   */
  disabled:PropTypes.bool,
  /**
   * ~~~
   * Set background color's Input. 
   * ~~~
   */
  bgColor:PropTypes.oneOf(['primary', 'secondary','danger','warning','success','info','accent','text']),
  /**
   * ~~~
   * Set shadow's Input
   * ~~~
   */
  isShadow:PropTypes.bool,
  /**
   * ~~~
   * Set color letter's Input. 
   * ~~~
   */
  color:PropTypes.oneOf(['white']),
  /**
   * ~~~
   * Set size's Input.
   * ~~~
   */
  size:PropTypes.oneOf(['sm', 'md','lg','xl']),
  /**
   * ~~~
   * Set the width will be the same to its container
   * ~~~
   */
  full:PropTypes.bool,
  /**
   * ~~~
   * Set an style outliner to the Input
   * ~~~
   */
  outliner:PropTypes.bool,
  /**
   * ~~~
   * Set the background color of the style outliner
   * ~~~
   */
  outlinerColor:PropTypes.oneOf(['primary', 'secondary','danger','warning','success','info','accent','text']),
  /**
   * Set rounded's button
   */
  rounded: PropTypes.oneOf(['soft','full']),
}
 
Input.defaultProps = {
  color:"black",
  bgColor:"text",
  size: "md",
  isShadow: false,
  rounded:"none",
  full: false,
  isDisabled: false,
  outliner: false,
  outlinerColor: "black",
}

export default Input;
