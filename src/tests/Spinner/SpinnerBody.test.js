import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { SpinnerBody } from '../../components/Spinner/SpinnerElements';

describe('Pruebas en compnente <SpinnerBody/>', () => {
    test('debe renderizarse correctamente', () => {
        const { container } = render(<SpinnerBody />);
        expect(container.firstChild).toMatchSnapshot();
    })

    test('debe renderizarse con estilo por defecto', () => {
        const spinner = renderer.create(<SpinnerBody/>).toJSON();
        expect(spinner).toHaveStyleRule('width', '100px');
        expect(spinner).toHaveStyleRule('height', '100px');
        expect(spinner).toHaveStyleRule('position', 'relative');
    })

    test('debe renderizarse con el tamaño escogido por el usuario', () => {
        const spinner = renderer.create(<SpinnerBody size="md" />).toJSON();
        expect(spinner).toHaveStyleRule('width', '100px');
        expect(spinner).toHaveStyleRule('height', '100px');
    })
   
    
})
