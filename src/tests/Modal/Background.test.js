import { Background } from "../../components/Modal/ModalElements";
import renderer from 'react-test-renderer';
//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Pruebas en el componente <Background/>', () => {

    test('debe renderizarse el componente correctamente', () => {
        const wrapper = shallow(<Background />);
        expect(wrapper).toMatchSnapshot();
    })
    
    test('debe tener los estilos', () => {
        const wrapper = renderer
      .create(<Background />)
      .toJSON();
        expect(wrapper).toHaveStyleRule('width', '100vw');
        expect(wrapper).toHaveStyleRule('position', 'fixed');
        expect(wrapper).toHaveStyleRule('top', '0');
        expect(wrapper).toHaveStyleRule('bottom', '0');
        expect(wrapper).toHaveStyleRule('left', '0');
        expect(wrapper).toHaveStyleRule('right', '0');
        expect(wrapper).toHaveStyleRule('display', 'flex');
        expect(wrapper).toHaveStyleRule('justify-content', 'center');
        expect(wrapper).toHaveStyleRule('align-items', 'center');
        expect(wrapper).toHaveStyleRule('overflow-y', 'auto');
        expect(wrapper).toHaveStyleRule('z-index', '999');
    })
    
})