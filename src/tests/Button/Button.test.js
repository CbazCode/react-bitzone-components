import { Button } from "../../components";
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import 'jest-styled-components';

describe('Test en <Button />', ()=>{
    test('componente <Button /> debe renderizarse correctamente',()=>{
        const { container } = render(<Button />)
        expect(container.firstChild).toMatchSnapshot()
    });
    test('componente funciona con parametros por defecto', () => {
        const button = renderer.create(<Button />).toJSON();
        expect(button).toHaveStyleRule('margin','0.5rem')
    })
    
})
