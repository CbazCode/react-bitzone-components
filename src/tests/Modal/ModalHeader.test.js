import { ModalHeader } from "../../components/Modal/ModalElements";
import renderer from 'react-test-renderer';
//import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('Pruebas en el componente <ModalHeader/>', () => {

    test('debe renderizarse el componente correctamente', () => {
        const wrapper = shallow(<ModalHeader />);
        expect(wrapper).toMatchSnapshot();
    })

    test('debe tener los estilos', () => {
        const wrapper = renderer
      .create(<ModalHeader/>)
      .toJSON();
      expect(wrapper).toHaveStyleRule('font-size', '2rem');
    })
    
})
