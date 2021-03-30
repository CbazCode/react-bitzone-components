import styled, { keyframes } from 'styled-components';
import { setBgColor } from '../../utils/helpers';


//@atributes
// color = "red" - "yellow" - "green" - "blue" - "purple" - "indigo" - "pink" - default
// size = "sm" - "md" - "lg"

const spinnerOne = keyframes`
    0% { transform: rotate(0deg); border-width: 8px; }
    50% { transform: rotate(180deg); border-width: 1px; }
    100% { transform: rotate(360deg); border-width: 8px; }
`;

const spinnerTwo = keyframes`
    0% { transform: rotate(0deg); border-width: 1px; }
    50% { transform: rotate(180deg); border-width: 8px; }
    100% { transform: rotate(360deg); border-width: 1px; }
`;


const setSize = (size) => {
    switch (size) {
        case "sm":
            return '50px';
        case "md":
            return '100px';
        case "lg":
            return '200px';
        default:
            return '100px';
    }
}



export const SpinnerBody = styled.div` 
    width: ${({ size }) => setSize(size)};
    height: ${({ size }) => setSize(size)};
    position: relative;
    margin: 0.5rem
`

export const SpinnerPart = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-top-color: ${({ color }) => setBgColor(color)};
    border-radius: 50%;
    animation: ${spinnerOne} 1.2s linear infinite;

    &:nth-child(2){
        border: 8px solid transparent;
        border-bottom-color: ${({ color }) => setBgColor(color)};
        animation: ${spinnerTwo} 1.2s linear infinite;
    }
`
