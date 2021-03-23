import { Skeleton } from "../../components";
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import 'jest-styled-components';

describe('Test en <Skeleton />', ()=>{
    test('componente <Skeleton /> debe renderizarse correctamente',()=>{
        const { container } = render(<Skeleton />)
        expect(container.firstChild).toMatchSnapshot()
    });
    test('componente funciona con parametros por defecto', () => {
        const button = renderer.create(<Skeleton />).toJSON();
        expect(button).toHaveStyleRule('width','100%')
    })
    
})
