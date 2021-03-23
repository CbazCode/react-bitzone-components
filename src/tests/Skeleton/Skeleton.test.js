import { Skeleton } from "../../components";
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import 'jest-styled-components';

describe('Test en <Skeleton />', ()=>{
    test('componente <Skeleton /> debe renderizarse correctamente',()=>{
        const { container } = render(<Skeleton />)
        expect(container.firstChild).toMatchSnapshot()
    });
    test('componente debe funcionar con parametros por defecto', () => {
        const button = renderer.create(<Skeleton />).toJSON();
        expect(button).toHaveStyleRule('width','100%')
        expect(button).toHaveStyleRule('height','auto')
        expect(button).toHaveStyleRule('margin-top','5px')
        expect(button).toHaveStyleRule('margin-right','5px')
        expect(button).toHaveStyleRule('margin-bottom','5px')
        expect(button).toHaveStyleRule('margin-left','5px')
        expect(button).toHaveStyleRule('background-color','#cacaca')
        expect(button).toHaveStyleRule('border-radius','4px')
        expect(button).toHaveStyleRule('color','transparent')
        expect(button).toHaveStyleRule('user-select','none')
        expect(button).toHaveStyleRule('animation','dKHzAH 3s linear infinite')
    });
     test('componente debe funcionar con propiedades - default', () => {
        const button = renderer.create(<Skeleton height='20px' mt='6px' mr='6px' mb='6px' ml='6px' />).toJSON();
        expect(button).toHaveStyleRule('width','100%')
        expect(button).toHaveStyleRule('height','20px')
        expect(button).toHaveStyleRule('margin-top','6px')
        expect(button).toHaveStyleRule('margin-right','6px')
        expect(button).toHaveStyleRule('margin-bottom','6px')
        expect(button).toHaveStyleRule('margin-left','6px')
        expect(button).toHaveStyleRule('background-color','#cacaca')
        expect(button).toHaveStyleRule('border-radius','4px')
        expect(button).toHaveStyleRule('color','transparent')
        expect(button).toHaveStyleRule('user-select','none')
        expect(button).toHaveStyleRule('animation','dKHzAH 3s linear infinite')
     });
     test('componente debe funcionar con type circle', () => {
        const button = renderer.create(<Skeleton type='circle' />).toJSON();
        expect(button).toHaveStyleRule('width','calc(5px*10)')
        expect(button).toHaveStyleRule('height','calc(5px*10)')
        expect(button).toHaveStyleRule('margin-top','5px')
        expect(button).toHaveStyleRule('margin-right','5px')
        expect(button).toHaveStyleRule('margin-bottom','5px')
        expect(button).toHaveStyleRule('margin-left','5px')
        expect(button).toHaveStyleRule('background-color','#cacaca')
        expect(button).toHaveStyleRule('border-radius','50%')
        expect(button).toHaveStyleRule('color','transparent')
        expect(button).toHaveStyleRule('animation','dKHzAH 3s linear infinite')
     })
     test('componente debe funcionar con type circle y size', () => {
        const button = renderer.create(<Skeleton type='circle' size={10}/>).toJSON();
        expect(button).toHaveStyleRule('width','calc(10px*10)')
        expect(button).toHaveStyleRule('height','calc(10px*10)')
        expect(button).toHaveStyleRule('margin-top','5px')
        expect(button).toHaveStyleRule('margin-right','5px')
        expect(button).toHaveStyleRule('margin-bottom','5px')
        expect(button).toHaveStyleRule('margin-left','5px')
        expect(button).toHaveStyleRule('background-color','#cacaca')
        expect(button).toHaveStyleRule('border-radius','50%')
        expect(button).toHaveStyleRule('color','transparent')
        expect(button).toHaveStyleRule('animation','dKHzAH 3s linear infinite')
     })

     test('componente debe mostrar contenido cuando esta cargado', () => {
        const button = renderer.create(<Skeleton isLoaded={true}/>).toJSON();
        expect(button).toHaveStyleRule('width','100%')
        expect(button).toHaveStyleRule('height','auto')
        expect(button).toHaveStyleRule('margin-top','5px')
        expect(button).toHaveStyleRule('margin-right','5px')
        expect(button).toHaveStyleRule('margin-bottom','5px')
        expect(button).toHaveStyleRule('margin-left','5px')
    })
     
     
})

