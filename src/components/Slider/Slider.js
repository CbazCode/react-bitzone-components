import styled from 'styled-components';
import PropTypes from 'prop-types';
import { setBgColor } from '../../utils/helpers';


//Tamaño de acuerdo al contenedor
const setFullWidth = (full) => (full ? `100%` : `auto`);

const setOrientation = (orient = 'horizontal') =>
  orient === 'horizontal'
    ? `
            transform: rotate(0eg);
        `
    : `
            transform: rotate(270deg);
        `;

const SliderStyled = styled.input.attrs((props) => ({
  min: props.min || 0,
  max: props.max || 100,
  value: props.value || 50,
  step: props.step || 1,
  type: 'range',
}))`
  -webkit-appearance: none;
  ${({ orientation }) => setOrientation(orientation)}

  width: ${(props) => (props.orientation === 'vertical' ? 'auto' : `${setFullWidth(props.full)}`)};
  height: 25px;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 8px;
  background: ${(props) => props.bg || '#d7dcdf'};

  &:hover {
    opacity: 1;
  }
  /* Chrome */
  &::-webkit-slider-thumb {
    appearance: none;
    width: 25px;
    height: 25px;
    background: ${(props) => setBgColor(props.bgThumb)};
    border-radius: 50%;
    cursor: pointer;
    transition: transform 0.15s ease-in-out, box-shadow 0.25s ease-in-out;
  }
  &:active::-webkit-slider-thumb {
    transform: scale(1.1);
    box-shadow: ${(props) => `0 0 0 3px #d7dcdf,
                  0 0 0 6px ${setBgColor(props.bgThumb)}`};
  }

  /* Mozilla */
  &::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: ${(props) => setBgColor(props.bgThumb)};
    cursor: pointer;
    transition: transform 0.15s ease-in-out, box-shadow 0.25s ease-in-out;
  }
  &:active::-moz-range-thumb {
    transform: scale(1.1);
    box-shadow: ${(props) => `0 0 0 3px #d7dcdf,
                  0 0 0 6px ${setBgColor(props.bgThumb)}`};
  }
`;


const Slider = (props)=>(
  <SliderStyled {...props}/>
)
Slider.propTypes = {
  /**
   * ~~~
   * Minimum slider value
   * ~~~
   */
  min: PropTypes.number,
  /**
   * ~~~
   * Maximum slider value
   * ~~~
   */
  max: PropTypes.number,
  /**
   * ~~~
   * Default slider value
   * ~~~
   */
  value: PropTypes.number,
  /**
   * ~~~
   * Size per step
   * ~~~
   */
  step: PropTypes.number,
  /**
   * ~~~
   * Slider direction
   * ~~~
   */
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
   * ~~~
   * Maximum size, equals to full width
   * ~~~
   */
  full: PropTypes.bool,
  /**
   * ~~~
   * Slider color
   * ~~~
   */
  bgThumb: PropTypes.oneOf(['danger','warning','success','primary','accent','info','secondary','text'])
}

Slider.defaultProps = {
  min: 0,
  max: 100,
  value: 50,  
  step: 1,
  orientation: 'horizontal',
  full: true,
  bgThumb: 'text'
}

export default Slider;
