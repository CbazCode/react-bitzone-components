import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { setBgColor, setHover, setOutline, setColorText, setFontSize, setShadow} from '../../utils/helpers';

// @atributes

// color = "white" - default 
// bgColor = "red" - "yellow" - "green" - "blue" - "purple" - "indigo" - "pink" - default
// rounded = "soft" - "full" - default
// size = "sm" - "md"(default) - "lg" - "xl"
// isShadow = {true} - {false}
// full = {true} - {false}
// isDisabled = {true} - {false}
// outliner = {true} - {false}
// outlinerColor = "red" - "yellow" - "green" - "blue" - "purple" - "indigo" - "pink" - default


//Establece el color de la fuente
// const setColorText = (color = 'default') => {
//   return color === 'white' ? '#F9FAFB' : '#111827';
// };

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
   * PARA MEDIR EL TAMANIO DE SU CORAZON
   */
  size: PropTypes.string
}
Button.defaultProps = {
  size: 10
}



export default Button;
