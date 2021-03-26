import { ModalBody } from "../../components/Modal/ModalElements";
import renderer from 'react-test-renderer';
//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Pruebas en el componente <ModalBody/>', () => {

    test('debe renderizarse el componente correctamente', () => {
        const wrapper = shallow(<ModalBody />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener los estilos', () => {
        const wrapper = renderer
      .create(<ModalBody/>)
      .toJSON();
      expect(wrapper).toHaveStyleRule('padding', '2rem');
    })
    
})
