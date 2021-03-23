import styled, { css, keyframes } from 'styled-components';

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
	let type = props?.type?.toUpperCase() || 'DEFAULT';
	switch (type) {
		case 'CIRCLE':
			return renderCircle(props?.isLoaded, props.size);
		default:
			return renderLoading(props?.isLoaded);
	}
};

const Skeleton = styled.div`
	width: 100%;
	height: ${(props) => props.height || 'auto'};
	margin-top: ${(props) => props.mt || '5px'};
	margin-right: ${(props) => props.mr || '5px'};
	margin-bottom: ${(props) => props.mb || '5px'};
	margin-left: ${(props) => props.ml || '5px'};
	${(props) => typeSkeleton(props)}
`;

export default Skeleton;
