import {  ModalWrapper } from "../../components/Modal/ModalElements";
import renderer from 'react-test-renderer';
//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Pruebas en el componente <ModalWrapper/>', () => {

    test('debe renderizarse el componente correctamente', () => {
        const wrapper = shallow(<ModalWrapper />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe renderizarse con los estilos por defecto', () => {
        const wrapper = renderer
        .create(<ModalWrapper/>)
        .toJSON();
        expect(wrapper).toHaveStyleRule('width', '400px');
        expect(wrapper).toHaveStyleRule('box-shadow', '0 5px 16px rgba(0,0,0,0.2)');
        expect(wrapper).toHaveStyleRule('background', '#fff');
        expect(wrapper).toHaveStyleRule('color', '#000');
        expect(wrapper).toHaveStyleRule('display', 'grid');
        expect(wrapper).toHaveStyleRule('grid-template-columns', '1fr');
        expect(wrapper).toHaveStyleRule('position', 'relative');
        expect(wrapper).toHaveStyleRule('z-index', '10');
        expect(wrapper).toHaveStyleRule('border-radius', '10px');
    })

    test('debe renderizarse con el tamaño y grid debido si hay imagen', () => {
        const wrapper = renderer
        .create(<ModalWrapper withImage/>)
        .toJSON();
        expect(wrapper).toHaveStyleRule('width', '850px');
        expect(wrapper).toHaveStyleRule('box-shadow', '0 5px 16px rgba(0,0,0,0.2)');
        expect(wrapper).toHaveStyleRule('background', '#fff');
        expect(wrapper).toHaveStyleRule('color', '#000');
        expect(wrapper).toHaveStyleRule('display', 'grid');
        expect(wrapper).toHaveStyleRule('grid-template-columns', '1fr 1fr');
        expect(wrapper).toHaveStyleRule('position', 'relative');
        expect(wrapper).toHaveStyleRule('z-index', '10');
        expect(wrapper).toHaveStyleRule('border-radius', '10px');
    })
    
    
})
