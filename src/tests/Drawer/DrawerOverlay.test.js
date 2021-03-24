import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { DrawerOverlay } from '../../components/Drawer/Drawer';


describe('Test en <DrawerOverlay />', () => {
  test('componente <DrawerOverlay /> debe renderizarse correctamente sin parametros ', () => {
    const wrapper = shallow(<DrawerOverlay />);
    expect(wrapper).toMatchSnapshot();
  });
  test('componente debe mostrarse correctamente', () => {
    const wrapper = shallow(<DrawerOverlay />);

    expect(wrapper).toHaveStyleRule('position', 'fixed');
    expect(wrapper).toHaveStyleRule('top', '0px');
    expect(wrapper).toHaveStyleRule('right', '0px');
    expect(wrapper).toHaveStyleRule('bottom', '0px');
    expect(wrapper).toHaveStyleRule('left', '0px');
    expect(wrapper).toHaveStyleRule('z-index', '20');
    expect(wrapper).toHaveStyleRule('animation', 'horNPL 0.5s linear forwards');
  });
  test('componente debe recibir parametro open', () => {
    const wrapper = shallow(<DrawerOverlay open />);
    const attribute = wrapper.getElement('div').props;
    expect(wrapper).not.toHaveStyleRule('display', 'none');

    expect(attribute.open).toBe(true);
  });
  test('componente debe poder cerrarse al hacer click', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<DrawerOverlay onClick={mockCallBack}/>);
    
    wrapper.find('div').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
