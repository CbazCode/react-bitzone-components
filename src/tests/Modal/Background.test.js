import { Background } from "../../components/Modal/ModalElements";

//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Pruebas en el componente <Background/>', () => {

    test('debe renderizarse el componente correctamente', () => {
        const wrapper = shallow(<Background />);
        expect(wrapper).toMatchSnapshot();
    })
    
})