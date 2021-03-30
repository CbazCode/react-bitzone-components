import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { setBgColor, setHover, setOutline, setColorText, setFontSize, setShadow} from '../../utils/helpers';




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
    cursor:default;
    &:hover { 
      opacity: 0.5;
    }
  `;

const ButtonStyled = styled.button.attrs((props) => ({
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
`;



const Button = (props)=>(
  <ButtonStyled {...props}/>
)

Button.propTypes = {

  /**
   * ~~~
   * Set color letter's button. 
   * ~~~
   */
  color:PropTypes.oneOf(['white']),
  /**
   * ~~~
   * Set background color's button. 
   * ~~~
   */
   bgColor: PropTypes.oneOf(['primary', 'secondary','danger','warning','success','info','accent','text']),
    /**
   * ~~~
   * Set size's button.
   * ~~~
   * 
   */
  size: PropTypes.oneOf(['sm', 'md','lg','xl']),
 /**
   * ~~~
   * Set shadow's button
   * ~~~
   * 
   */
  isShadow: PropTypes.bool,
  /**
   * ~~~
   * Set rounded's button
   * ~~~
   * 
   */
  rounded:PropTypes.oneOf(['soft','full']),
  /**
   * ~~~
   * Set the width will be the same to its container
   * ~~~
   * 
   */
  full:PropTypes.bool,
  /**
   * ~~~
   * Disable the button
   * ~~~
   * 
   */
  isDisabled: PropTypes.bool,
  /**
   * ~~~
   * Set an style outliner to the button
   * ~~~
   * 
   */
  outliner: PropTypes.bool,
  /**
   * ~~~
   * Set the background color of the style outliner
   * ~~~
   * 
   */
  outlinerColor: PropTypes.oneOf(['primary', 'secondary','danger','warning','success','info','accent','text']),
}
Button.defaultProps = {
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



export default Button;
