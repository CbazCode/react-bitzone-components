import { Button } from '../../components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Test en <Button />', () => {
  test('componente <Button /> debe renderizarse correctamente', () => {
    const { container } = render(<Button/>);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('componente debe funcionar con parametros por defecto', () => {
    const button = renderer.create(<Button />).toJSON();
    expect(button).toHaveStyleRule('background-color', '#9CA3AF');
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule('box-shadow', 'none');
    expect(button).toHaveStyleRule('color', '#111827');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '0px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule(`&:hover{ background-color: #D1D5DB }`);
  });
  test('componente debe mostrar el color de fuente, background y hover de acuerdo al color escogido por el usuario', () => {
    const button = renderer
      .create(<Button color="white" bgColor="red" />)
      .toJSON();
    expect(button).toHaveStyleRule('background-color', '#DC2626');
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule('box-shadow', 'none');
    expect(button).toHaveStyleRule('color', '#F9FAFB');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '0px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule(`&:hover{ background-color: #991B1B }`);
  });

  test('componente debe mostrarse con la caja sombreada', () => {
    const button = renderer
      .create(<Button color="white" bgColor="red" isShadow={true} />)
      .toJSON();
    expect(button).toHaveStyleRule('background-color', '#DC2626');
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule(
      'box-shadow',
      '-1px 6px 35px -7px rgba(0,0,0,0.75)'
    );
    expect(button).toHaveStyleRule('color', '#F9FAFB');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '0px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule(`&:hover{ background-color: #991B1B }`);
  });

  test('componente debe mostrar el estilo outliner por defecto del boton con hover acorde al outliner', () => {
    const button = renderer.create(<Button outliner={true} />).toJSON();

    expect(button).toHaveStyleRule('box-shadow', 'none');
    expect(button).toHaveStyleRule('color', '#111827');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '0px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule('border', '1.5px solid #111827');
    expect(button).toHaveStyleRule('background-color', 'unset');
    expect(button).toHaveStyleRule(
      `&:hover{ color: #F9FAFB; background-color:#111827; }`
    );
  });
  test('componente debe mostrar el estilo outliner escogido por el usuario con hover acorde al outliner', () => {
    const button = renderer
      .create(<Button outliner={true} outlinerColor="red" />)
      .toJSON();

    expect(button).toHaveStyleRule('box-shadow', 'none');
    expect(button).toHaveStyleRule('color', '#dc2626');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '0px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule('border', '1.5px solid #dc2626');
    expect(button).toHaveStyleRule('background-color', 'unset');
    expect(button).toHaveStyleRule(
      `&:hover{ color: #F9FAFB; background-color:#DC2626; }`
    );
  });

  test('componente debe tener el ancho del 100% de su contenedor', () => {
    const button = renderer.create(<Button full />).toJSON();
    expect(button).toHaveStyleRule('background-color', '#9CA3AF');
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule('box-shadow', 'none');
    expect(button).toHaveStyleRule('color', '#111827');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '0px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule('width', '100%');
    expect(button).toHaveStyleRule(`&:hover{ background-color: #D1D5DB }`);
  });

  test('componente debe tener el border-radius escogido por el usuario', () => {
    const button = renderer.create(<Button rounded="full" />).toJSON();
    expect(button).toHaveStyleRule('background-color', '#9CA3AF');
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule('box-shadow', 'none');
    expect(button).toHaveStyleRule('color', '#111827');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '20px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule(`&:hover{ background-color: #D1D5DB }`);
  });

  test('componente debe tener el tamaño de fuente escogida por el usuario', () => {
    const button = renderer.create(<Button size="lg" />).toJSON();
    expect(button).toHaveStyleRule('background-color', '#9CA3AF');
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule('box-shadow', 'none');
    expect(button).toHaveStyleRule('font-size', '1.125rem');
    expect(button).toHaveStyleRule('color', '#111827');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '0px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule(`&:hover{ background-color: #D1D5DB }`);
  });

  test('componente debe deshabilitarse', () => {
    const { container } = render(<Button isDisabled />);
    expect(container.firstChild).toBeDisabled();
  });

  test('componente debe mostrar sus estilos cuando este deshabilitado', () => {
    const { container } = render(<Button isDisabled />);
    expect(container.firstChild).toBeDisabled();
    const button = renderer.create(<Button isDisabled />).toJSON();
    expect(button).toHaveStyleRule('background-color', '#9CA3AF');
    expect(button).toHaveStyleRule('border', 'none');
    expect(button).toHaveStyleRule('box-shadow', 'none');
    expect(button).toHaveStyleRule('font-size', '1rem');
    expect(button).toHaveStyleRule('color', '#111827');
    expect(button).toHaveStyleRule('margin', '0.5rem');
    expect(button).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(button).toHaveStyleRule('border-radius', '0px');
    expect(button).toHaveStyleRule('outline', 'none');
    expect(button).toHaveStyleRule('opacity', '0.5');
    expect(button).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(button).toHaveStyleRule(
      `&:hover{ background-color: #D1D5DB; opacity:0.5}`
    );
  });
});
