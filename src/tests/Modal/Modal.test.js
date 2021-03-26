
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Modal from '../../components/Modal/Modal'

describe('Pruebas en el componente <Modal/>', () => {

    test('debe renderizarse el componente correctamente', () => {
        const { container } = render(<Modal showModal={true}/>);
        expect(container.firstChild).toMatchSnapshot();
    })
})
