import { Skeleton } from '../../components';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Test en <Skeleton />', () => {
  test('componente <Skeleton /> debe renderizarse correctamente', () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toMatchSnapshot();
  });
  test('componente debe funcionar con parametros por defecto', () => {
    const skeleton = renderer.create(<Skeleton />).toJSON();
    expect(skeleton).toHaveStyleRule('width', '100%');
    expect(skeleton).toHaveStyleRule('height', 'auto');
    expect(skeleton).toHaveStyleRule('margin-top', '5px');
    expect(skeleton).toHaveStyleRule('margin-right', '5px');
    expect(skeleton).toHaveStyleRule('margin-bottom', '5px');
    expect(skeleton).toHaveStyleRule('margin-left', '5px');
    expect(skeleton).toHaveStyleRule('background-color', '#cacaca');
    expect(skeleton).toHaveStyleRule('border-radius', '4px');
    expect(skeleton).toHaveStyleRule('color', 'transparent');
    expect(skeleton).toHaveStyleRule('user-select', 'none');
    expect(skeleton).toHaveStyleRule('animation', 'dKHzAH 3s linear infinite');
  });
  test('componente debe funcionar con propiedades - default', () => {
    const skeleton = renderer
      .create(<Skeleton height="20px" mt="6px" mr="6px" mb="6px" ml="6px" />)
      .toJSON();
    expect(skeleton).toHaveStyleRule('width', '100%');
    expect(skeleton).toHaveStyleRule('height', '20px');
    expect(skeleton).toHaveStyleRule('margin-top', '6px');
    expect(skeleton).toHaveStyleRule('margin-right', '6px');
    expect(skeleton).toHaveStyleRule('margin-bottom', '6px');
    expect(skeleton).toHaveStyleRule('margin-left', '6px');
    expect(skeleton).toHaveStyleRule('background-color', '#cacaca');
    expect(skeleton).toHaveStyleRule('border-radius', '4px');
    expect(skeleton).toHaveStyleRule('color', 'transparent');
    expect(skeleton).toHaveStyleRule('user-select', 'none');
    expect(skeleton).toHaveStyleRule('animation', 'dKHzAH 3s linear infinite');
  });
  test('componente debe funcionar con type circle', () => {
    const skeleton = renderer.create(<Skeleton type="circle" />).toJSON();
    expect(skeleton).toHaveStyleRule('width', 'calc(5px*10)');
    expect(skeleton).toHaveStyleRule('height', 'calc(5px*10)');
    expect(skeleton).toHaveStyleRule('margin-top', '5px');
    expect(skeleton).toHaveStyleRule('margin-right', '5px');
    expect(skeleton).toHaveStyleRule('margin-bottom', '5px');
    expect(skeleton).toHaveStyleRule('margin-left', '5px');
    expect(skeleton).toHaveStyleRule('background-color', '#cacaca');
    expect(skeleton).toHaveStyleRule('border-radius', '50%');
    expect(skeleton).toHaveStyleRule('color', 'transparent');
    expect(skeleton).toHaveStyleRule('animation', 'dKHzAH 3s linear infinite');
  });
  test('componente debe funcionar con type circle y size', () => {
    const skeleton = renderer.create(<Skeleton type="circle" size={10} />).toJSON();
    expect(skeleton).toHaveStyleRule('width', 'calc(10px*10)');
    expect(skeleton).toHaveStyleRule('height', 'calc(10px*10)');
    expect(skeleton).toHaveStyleRule('margin-top', '5px');
    expect(skeleton).toHaveStyleRule('margin-right', '5px');
    expect(skeleton).toHaveStyleRule('margin-bottom', '5px');
    expect(skeleton).toHaveStyleRule('margin-left', '5px');
    expect(skeleton).toHaveStyleRule('background-color', '#cacaca');
    expect(skeleton).toHaveStyleRule('border-radius', '50%');
    expect(skeleton).toHaveStyleRule('color', 'transparent');
    expect(skeleton).toHaveStyleRule('animation', 'dKHzAH 3s linear infinite');
  });

  test('componente debe mostrar contenido cuando esta cargado', () => {
    const skeleton = renderer.create(<Skeleton isLoaded={true} />).toJSON();
    expect(skeleton).toHaveStyleRule('width', '100%');
    expect(skeleton).toHaveStyleRule('height', 'auto');
    expect(skeleton).toHaveStyleRule('margin-top', '5px');
    expect(skeleton).toHaveStyleRule('margin-right', '5px');
    expect(skeleton).toHaveStyleRule('margin-bottom', '5px');
    expect(skeleton).toHaveStyleRule('margin-left', '5px');
  });
});
