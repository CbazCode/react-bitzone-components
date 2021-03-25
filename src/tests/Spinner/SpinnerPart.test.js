import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { SpinnerPart } from '../../components/Spinner/SpinnerElements';

describe('Pruebas en compnente <SpinnerPart/>', () => {
    test('debe renderizarse correctamente', () => {
        const { container } = render(<SpinnerPart />);
        expect(container.firstChild).toMatchSnapshot();
    })

    test('debe renderizarse con estilo por defecto', () => {
        const spinner = renderer.create(<SpinnerPart/>).toJSON();
        expect(spinner).toHaveStyleRule('width', '100%');
        expect(spinner).toHaveStyleRule('height', '100%');
        expect(spinner).toHaveStyleRule('position', 'absolute');
        expect(spinner).toHaveStyleRule('border', '8px solid transparent');
        expect(spinner).toHaveStyleRule('border-top-color', '#9CA3AF');
        expect(spinner).toHaveStyleRule('border-radius', '50%');
    })

    test('debe renderizarse con el tamaño escogido por el usuario', () => {
        const spinner = renderer.create(<SpinnerPart color="blue" />).toJSON();
        expect(spinner).toHaveStyleRule('width', '100%');
        expect(spinner).toHaveStyleRule('height', '100%');
        expect(spinner).toHaveStyleRule('position', 'absolute');
        expect(spinner).toHaveStyleRule('border', '8px solid transparent');
        expect(spinner).toHaveStyleRule('border-top-color', '#3B82F6');
        expect(spinner).toHaveStyleRule('border-radius', '50%');
    })
   
    
})