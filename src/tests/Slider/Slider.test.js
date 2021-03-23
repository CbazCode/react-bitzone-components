import { Slider } from "../../components";
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import 'jest-styled-components';

describe('Test en <Slider />', ()=>{
    test('componente <Slider /> debe renderizarse correctamente sin parametros',()=>{
        const { container } = render(<Slider readOnly/>)
        expect(container.firstChild).toMatchSnapshot()
    });
    test('componente <Slider /> debe renderizarse correctamente con parametros',()=>{
        const { container } = render(<Slider readOnly/>)
        expect(container.firstChild).toMatchSnapshot()
    });
    
});