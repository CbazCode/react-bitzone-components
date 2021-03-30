import { colors } from "./colors";

import { css } from 'styled-components';

//Establece el background del boton
export const setBgColor = (bgColor = 'text') => {
    switch (bgColor) {
      case 'danger':
        return colors.danger;
      case 'warning':
        return colors.warning;
      case 'success':
        return colors.success;
      case 'primary':
        return colors.primary;
      case 'accent':
        return colors.accent;
      case 'info':
        return colors.info;
      case 'secondary':
        return colors.secondary;
      default:
        return colors.text;
    }
};

//Establece Hover Effect
export const setHover = (bgColor = 'default', color = 'default') => {
    const isWhite = color === 'white';
    switch (bgColor) {
      case 'danger':
        return isWhite ? colors.danger_800 : colors.danger_400;
      case 'warning':
        return isWhite ? colors.warning_500 : colors.warning_300;
      case 'success':
        return isWhite ? colors.success_500 : colors.success_300;
      case 'primary':
        return isWhite ? colors.primary_700 : colors.primary_400;
      case 'accent':
        return isWhite ? colors.accent_600 : colors.danger_400;
      case 'info':
        return isWhite ? colors.info_700 : colors.info_400;
      case 'secondary':
        return isWhite ? colors.secondary_700 : colors.secondary_400;
      default:
        return isWhite ? colors.black : colors.text_300;
    }
  };


export const setOutline = (outliner, outlinerColor) => {
    
  if (outliner) {
    switch (outlinerColor) {
      case 'danger':
        return css`
          color: ${colors.danger};
          border: 1.5px solid ${colors.danger};
          background-color: unset;

          &:hover {
            color: ${colors.text_50};
            background-color: ${colors.danger};
          }
        `;
      case 'warning':
        return css`
          color: ${colors.warning};
          border: 1.5px solid ${colors.warning};
          background-color: unset;

          &:hover {
            color: ${colors.text_50};
            background-color: ${colors.warning};
          }
        `;

      case 'success':
        return css`
          color: ${colors.success};
          border: 1.5px solid ${colors.success};
          background-color: unset;

          &:hover {
            color: ${colors.text_50};
            background-color: ${colors.success};
          }
        `;

      case 'primary':
        return css`
          color: ${colors.primary};
          border: 1.5px solid ${colors.primary};
          background-color: unset;

          &:hover {
            color: ${colors.text_50};
            background-color: ${colors.primary};
          }
        `;

      case 'accent':
        return css`
          color: ${colors.accent};
          border: 1.5px solid ${colors.accent};
          background-color: unset;

          &:hover {
            color: ${colors.text_50};
            background-color: ${colors.accent};
          }
        `;
      case 'info':
        return css`
          color: ${colors.info};
          border: 1.5px solid ${colors.info};
          background-color: unset;

          &:hover {
            color: ${colors.text_50};
            background-color: ${colors.info};
          }
        `;
      case 'secondary':
        return css`
          color: ${colors.secondary};
          border: 1.5px solid ${colors.secondary};
          background-color: unset;

          &:hover {
            color: ${colors.text_50};
            background-color: ${colors.secondary};
          }
        `;
      default:
        return css`
          color: ${colors.black};
          border: 1.5px solid ${colors.black};
          background-color: unset;

          &:hover {
            color: ${colors.text_50};
            background-color: ${colors.black};
          }
        `;
    }
  }
};

//Establece el color de la fuente
export const setColorText = (color = 'default') => {
  return color === 'white' ? colors.text_50 : colors.black ;
};

//Tamaño de fuente
export const setFontSize = (size) => {
  switch (size) {
    case 'xl':
      return '1.25rem';
    case 'lg':
      return '1.125rem';
    case 'md':
      return '1rem';
    case 'sm':
      return '0.875rem';
    default:
      return '1rem';
  }
};

//Establece sombreado
export const setShadow = (isShadow = false) => {
  return isShadow ? '-1px 6px 35px -7px rgba(0,0,0,0.75);' : 'none';
};