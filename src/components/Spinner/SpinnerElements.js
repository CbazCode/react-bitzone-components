import styled, { keyframes } from 'styled-components';

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

const setColor = (color) => {
    switch (color) {
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
          return '#9CA3AF';
      }
}


export const SpinnerBody = styled.div` 
    width: ${({ size }) => setSize(size)};
    height: ${({ size }) => setSize(size)};
    position: relative;
`

export const SpinnerPart = styled.div`
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 8px solid transparent;
    border-top-color: ${({ color }) => setColor(color)};
    border-radius: 50%;
    animation: ${spinnerOne} 1.2s linear infinite;

    &:nth-child(2){
        border: 8px solid transparent;
        border-bottom-color: ${({ color }) => setColor(color)};
        animation: ${spinnerTwo} 1.2s linear infinite;
    }
`
