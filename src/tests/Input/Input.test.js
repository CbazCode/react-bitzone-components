import { Input } from '../../components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Test en <Input />', () => {
  test('componente <Input /> debe renderizarse correctamente', () => {
    const { container } = render(<Input rounded />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('componente debe funcionar con parametros por defecto', () => {
    const input = renderer.create(<Input rounded />).toJSON();
    expect(input).toHaveStyleRule('background-color', '#9CA3AF');
    expect(input).toHaveStyleRule('border', 'none');
    expect(input).toHaveStyleRule('box-shadow', 'none');
    expect(input).toHaveStyleRule('color', '#111827');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '0px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule(`&:hover{ background-color: #D1D5DB }`);
  });
  test('componente debe mostrar el color de fuente, background y hover de acuerdo al color escogido por el usuario', () => {
    const input = renderer
      .create(<Input color="white" bgColor="danger" />)
      .toJSON();
    expect(input).toHaveStyleRule('background-color', '#DC2626');
    expect(input).toHaveStyleRule('border', 'none');
    expect(input).toHaveStyleRule('box-shadow', 'none');
    expect(input).toHaveStyleRule('color', '#F9FAFB');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '0px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule(`&:hover{ background-color: #991B1B }`);
  });

  test('componente debe mostrarse con la caja sombreada', () => {
    const input = renderer
      .create(<Input color="white" bgColor="danger" isShadow={true} />)
      .toJSON();
    expect(input).toHaveStyleRule('background-color', '#DC2626');
    expect(input).toHaveStyleRule('border', 'none');
    expect(input).toHaveStyleRule(
      'box-shadow',
      '-1px 6px 35px -7px rgba(0,0,0,0.75)'
    );
    expect(input).toHaveStyleRule('color', '#F9FAFB');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '0px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule(`&:hover{ background-color: #991B1B }`);
  });

  test('componente debe mostrar el estilo outliner por defecto del boton con hover acorde al outliner', () => {
    const input = renderer.create(<Input outliner={true} />).toJSON();

    expect(input).toHaveStyleRule('box-shadow', 'none');
    expect(input).toHaveStyleRule('color', '#111827');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '0px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule('border', '1.5px solid #111827');
    expect(input).toHaveStyleRule('background-color', 'unset');
    expect(input).toHaveStyleRule(
      `&:hover{ color: #F9FAFB; background-color:#111827; }`
    );
  });
  test('componente debe mostrar el estilo outliner escogido por el usuario con hover acorde al outliner', () => {
    const input = renderer
      .create(<Input outliner={true} outlinerColor="danger" />)
      .toJSON();

    expect(input).toHaveStyleRule('box-shadow', 'none');
    expect(input).toHaveStyleRule('color', '#DC2626');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '0px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule('border', '1.5px solid #DC2626');
    expect(input).toHaveStyleRule('background-color', 'unset');
    expect(input).toHaveStyleRule(
      `&:hover{ color: #F9FAFB; background-color:#DC2626; }`
    );
  });

  test('componente debe tener el ancho del 100% de su contenedor', () => {
    const input = renderer.create(<Input full />).toJSON();
    expect(input).toHaveStyleRule('background-color', '#9CA3AF');
    expect(input).toHaveStyleRule('border', 'none');
    expect(input).toHaveStyleRule('box-shadow', 'none');
    expect(input).toHaveStyleRule('color', '#111827');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '0px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule('width', '100%');
    expect(input).toHaveStyleRule(`&:hover{ background-color: #D1D5DB }`);
  });

  test('componente debe tener el border-radius escogido por el usuario', () => {
    const input = renderer.create(<Input rounded="full" />).toJSON();
    expect(input).toHaveStyleRule('background-color', '#9CA3AF');
    expect(input).toHaveStyleRule('border', 'none');
    expect(input).toHaveStyleRule('box-shadow', 'none');
    expect(input).toHaveStyleRule('color', '#111827');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '20px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule(`&:hover{ background-color: #D1D5DB }`);
  });

  test('componente debe tener el tamaño de fuente escogida por el usuario', () => {
    const input = renderer.create(<Input size="lg" />).toJSON();
    expect(input).toHaveStyleRule('background-color', '#9CA3AF');
    expect(input).toHaveStyleRule('border', 'none');
    expect(input).toHaveStyleRule('box-shadow', 'none');
    expect(input).toHaveStyleRule('font-size', '1.125rem');
    expect(input).toHaveStyleRule('color', '#111827');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '0px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule(`&:hover{ background-color: #D1D5DB }`);
  });

  test('componente debe deshabilitarse', () => {
    const { container } = render(<Input isDisabled />);
    expect(container.firstChild).toBeDisabled();
  });

  test('componente debe mostrar sus estilos cuando este deshabilitado', () => {
    const { container } = render(<Input isDisabled />);
    expect(container.firstChild).toBeDisabled();
    const input = renderer.create(<Input isDisabled />).toJSON();
    expect(input).toHaveStyleRule('background-color', '#9CA3AF');
    expect(input).toHaveStyleRule('border', 'none');
    expect(input).toHaveStyleRule('box-shadow', 'none');
    expect(input).toHaveStyleRule('font-size', '1rem');
    expect(input).toHaveStyleRule('color', '#111827');
    expect(input).toHaveStyleRule('margin', '0.5rem');
    expect(input).toHaveStyleRule('padding', '0.5rem 1rem');
    expect(input).toHaveStyleRule('border-radius', '0px');
    expect(input).toHaveStyleRule('outline', 'none');
    expect(input).toHaveStyleRule('opacity', '0.5');
    expect(input).toHaveStyleRule('transition', 'all 0.2s ease-in-out');
    expect(input).toHaveStyleRule(
      `&:hover{ background-color: #D1D5DB; opacity:0.5}`
    );
  });
});
