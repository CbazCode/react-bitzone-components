import styled, { css } from 'styled-components';
import { setBgColor } from '../../utils/helpers';

const setDefaultCheked = (defaultRight) => {
  return !defaultRight ? 'none' : 'translateX(24px)';
};

const setDefaultChekedBall = (defaultRight) => {
  return !defaultRight ? 'translateX(24px)' : 'none';
};

const setSizeBall = (size) => {
  switch (size) {
    case 'sm':
      return '15px';
    case 'md':
      return '22px';
    case 'lg':
      return '30px';
    default:
      return '22px';
  }
};

const setSizeLabel = (size) => {
  switch (size) {
    case 'sm':
      return css`
        height: 19px;
        width: 43px;
      `;
    case 'md':
      return css`
        height: 26px;
        width: 50px;
      `;
    case 'lg':
      return css`
        height: 34px;
        width: 58px;
      `;
    default:
      return css`
        height: 26px;
        width: 50px;
      `;
  }
};

export const SwitchContainer = styled.div`
  margin: 0.5rem;
  box-sizing: border-box;
  .checkbox:checked + .label .ball {
    transform: ${({ defaultRight }) => setDefaultChekedBall(defaultRight)};
  }
`;

export const InputSwitch = styled.input.attrs((props) => ({
  type: 'checkbox',
  id: props.id,
  disabled: props.isDisabled,
  checked: props.isChecked,
  required: props.isRequired,
  name: props.name,
}))`
  position: absolute;
  opacity: 0;
`;
export const LabelSwitch = styled.label.attrs((props) => ({
  htmlFor: props.htmlFor,
}))`
   box-sizing: border-box;
  background-color: ${({ bgColor }) => setBgColor(bgColor)};
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  ${({ size }) => setSizeLabel(size)};
  transform: scale(1.5);
`;

export const Ball = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 50%;
  position: absolute;
  top: 2px;
  left: 2px;
  height: ${({ size }) => setSizeBall(size)};
  width: ${({ size }) => setSizeBall(size)};
  transition: transform 0.2s linear;
  transform: ${({ defaultRight }) => setDefaultCheked(defaultRight)};
`;
