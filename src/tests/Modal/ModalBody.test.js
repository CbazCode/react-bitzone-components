import { ModalBody } from "../../components/Modal/ModalElements";

//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Pruebas en el componente <ModalBody/>', () => {

    test('debe renderizarse el componente correctamente', () => {
        const wrapper = shallow(<ModalBody />);
        expect(wrapper).toMatchSnapshot();
    })
    
})
