import styled, { css } from "styled-components";



//Establece el background del boton
const setBgColor = (bgColor = "default")=> {
   
    switch (bgColor) {
        case "red":
            return '#DC2626'
        case "yellow":
            return '#FBBF24'
        case "green":
            return '#34D399'
        case "blue":
            return '#3B82F6'
        case "purple":
            return '#8B5CF6'
        case "indigo":
            return '#6366F1'
        case "pink":
            return '#EC4899'
        default:
            return "#F9FAFB";
    }
}

//Establece el color de la fuente
const setColorText = (color = "default")=> {
  return (color === "white") ? '#F9FAFB' : "#111827"
}

//Establece el borde
const roundedBtn = (rounded = "default")=> {
    // return color === 'primary' ? '#2EBD9B' : 'black'
    switch (rounded) {
        case "full":
            return '20px'
        case "soft":
            return '10px'
        default:
            return "0px";
    }
}

//Tamaño de fuente
const setFontSize = (size) => {
    switch (size) {
      case "xl": 
        return '1.25rem';
      case "lg":
        return '1.125rem';       
      case "sm":
        return '0.875rem';    
      default:
        return '1rem';
    }
}


//Establece sombreado
const setShadow = (isShadow = false) => {
  return isShadow ? '-1px 6px 35px -7px rgba(0,0,0,0.75);':'none'
}

//Establece Hover Effect
const setHover = (bgColor = "default", color = "default") =>{
  const isWhite = (color === "white") 
  switch (bgColor) {
    case "red":
        return isWhite ? '#991B1B':'#F87171'
    case "yellow":
        return isWhite ? '#F59E0B' : '#FCD34D'
    case "green":
        return isWhite ? '#10B981' : '#6EE7B7'
    case "blue":
        return isWhite ? '#1D4ED8' : '#60A5FA'
    case "purple":
        return isWhite ? '#7C3AED' :'#A78BFA'
    case "indigo":
        return isWhite ? '#4338CA' : '#818CF8'
    case "pink":
        return isWhite ? '#BE185D' :'#F472B6'
    default:
        return "#D1D5DB"
}
}


//Tamaño de acuerdo al contenedor
const setFullWidth = (full)=>(
  full && 
  css`
    width: 100%;
  `
)

//Tema en disabled
const themeButton = (isDisabled) =>(
  isDisabled &&
  css`
  opacity: 0.5;
  &:hover {
    opacity: 0.5;
  }
  `  
) 



const Button = styled.button.attrs(props => (
  {
    disabled: props.isDisabled
  }
))
`
  box-sizing:'border-box';
  background-color: ${({bgColor}) => setBgColor(bgColor)};
  border: none;
  box-shadow: ${({isShadow}) => setShadow(isShadow)};
  color: ${({color}) => setColorText(color)};
  cursor:pointer;
  font-family: 'Sora', sans-serif;
  font-size:  ${({size}) => setFontSize(size)};
  margin: 0.5em;
  padding: 0.5em 1em;
  border-radius: ${({rounded}) => roundedBtn(rounded)};
  outline: none;
  transition: all 0.2s ease-in-out;
  ${({full})=> setFullWidth(full)};
  
  &:hover{
    background-color: ${ ( { bgColor, color } ) => setHover(bgColor, color)};
  }

  ${({isDisabled})=> themeButton(isDisabled)}
 
`;

export default Button