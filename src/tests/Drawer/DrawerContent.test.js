import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { DrawerContent } from '../../components/Drawer/Drawer';

describe('Test en <DrawerContent />', () => {
    test('componente <DrawerContent /> debe renderizarse correctamente sin parametros ', () => {
      const wrapper = shallow(<DrawerContent />);
      expect(wrapper).toMatchSnapshot();
    });
    test('componente debe mostrarse correctamente', () => {
      const wrapper = shallow(<DrawerContent />);
  
      expect(wrapper).toHaveStyleRule('display', 'block');
      expect(wrapper).toHaveStyleRule('box-sizing', 'border-box');
      expect(wrapper).toHaveStyleRule('position', 'fixed');
      expect(wrapper).toHaveStyleRule('z-index', '30');
      expect(wrapper).not.toHaveStyleRule('transform', '20');
      expect(wrapper).toHaveStyleRule('transition', 'transform 0.2s ease-out');
      expect(wrapper).toHaveStyleRule('overflow-x', 'hidden');
      expect(wrapper).toHaveStyleRule('color', '#fafafa');
      expect(wrapper).toHaveStyleRule('background-color', 'rgba(5,29,51,0.9)');
      expect(wrapper).toHaveStyleRule('padding', '1rem 2rem');
      expect(wrapper).toHaveStyleRule('box-shadow', '-10px 0px 10px rgba(0,0,0,0.19)');
    });
    test('componente debe recibir parametro open', () => {
      const wrapper = shallow(<DrawerContent open />);
      const attribute = wrapper.getElement('div').props;
      expect(wrapper).not.toHaveStyleRule('display', 'none');
  
      expect(attribute.open).toBe(true);
    });
    test('componente debe recibir parametro size', () => {
        const wrapper = shallow(<DrawerContent size='500px' />);
        expect(wrapper).toHaveStyleRule('width', '500px');
    
    });
    test('componente debe mostrarse en la posicion indicada', () => {
        const wrapper = shallow(<DrawerContent position="left" />);
        expect(wrapper).toHaveStyleRule('display', 'block');
        expect(wrapper).toHaveStyleRule('transform', 'translateX(-100%)');
    });
    test('componente debe mostrar background indicado', () => {
        const wrapper = shallow(<DrawerContent backgroundColor="purple" />);
        expect(wrapper).toHaveStyleRule('background-color', '#8B5CF6');
    });
    
    
  });