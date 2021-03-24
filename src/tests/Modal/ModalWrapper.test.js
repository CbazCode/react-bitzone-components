import {  ModalWrapper } from "../../components/Modal/ModalElements";

//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Pruebas en el componente <ModalWrapper/>', () => {

    test('debe renderizarse el componente correctamente', () => {
        const wrapper = shallow(<ModalWrapper />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
