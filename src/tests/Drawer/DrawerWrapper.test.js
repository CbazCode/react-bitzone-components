import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { DrawerWrapper } from '../../components/Drawer/Drawer';

describe('Test en <DrawerWrapper />', () => {
  test('componente <DrawerOverlay /> debe renderizarse correctamente sin parametros ', () => {
    const wrapper = shallow(<DrawerWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
  test('componente debe mostrarse en la posicion indicada', () => {
    const wrapper = shallow(<DrawerWrapper position="left" />);

    expect(wrapper).toHaveStyleRule('display', 'block');
    expect(wrapper).toHaveStyleRule('overflow', 'hidden');
    expect(wrapper).toHaveStyleRule('width', '300px');
    expect(wrapper).toHaveStyleRule('transform', 'translateX(-100%)');
  });

  test('componente debe mostrarse con el width indicado', () => {
    const wrapper = shallow(<DrawerWrapper position="left" size="500px" />);
    
    expect(wrapper).toHaveStyleRule('display', 'block');
    expect(wrapper).toHaveStyleRule('overflow', 'hidden');
    expect(wrapper).toHaveStyleRule('width', '500px');
    expect(wrapper).toHaveStyleRule('transform', 'translateX(-100%)');
  });
  test('componente debe mostrar componente al recibir parametro open=true', () => {
    const wrapper = shallow(<DrawerWrapper open />);
    
    expect(wrapper).toHaveStyleRule('display', 'block');
    expect(wrapper).toHaveStyleRule('overflow', 'hidden');
    expect(wrapper).toHaveStyleRule('width', '300px');
    expect(wrapper).not.toHaveStyleRule('transform', 'translateX(-100%)');
  });
});
