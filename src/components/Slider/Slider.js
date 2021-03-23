import styled, { css } from 'styled-components';

const setBgColor = (bgColor = 'default') => {
	switch (bgColor) {
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
			return '#4caf50';
	}
};


const setOrientation = (orient = 'horizontal') =>
	orient === 'horizontal'
		? `
            transform: rotate(0eg);
        `
		: `
            transform: rotate(270deg);
        `;

const Slider = styled.input.attrs((props) => ({
	min: props.min || 0,
	max: props.max || 100,
	value: props.value || 50,
	step: props.step || 1,
	type: 'range',
}))`
	-webkit-appearance: none;
	${({ orientation }) => setOrientation(orientation)}

	width: ${(props) => (props.orientation === 'vertical' ? 'auto' : '100%')};
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
		transition: transform 0.15s ease-in-out;
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
		transition: transform 0.15s ease-in-out;
	}
	&:active::-moz-range-thumb {
		transform: scale(1.1);
        box-shadow: ${(props) => `0 0 0 3px #d7dcdf,
                  0 0 0 6px ${setBgColor(props.bgThumb)}`};
	}
`;

export default Slider;
