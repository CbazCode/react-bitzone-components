import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { ButtonExit } from '../../components/Drawer/Drawer';
describe('Test en <ButtonExit />', () => {
  test('componente <ButtonExit /> debe renderizarse correctamente sin parametros ', () => {
    const wrapper = shallow(<ButtonExit />);
    expect(wrapper).toMatchSnapshot();
  });
  test('componente debe poder cerrarse al hacer click', () => {
    const mockCallBack = jest.fn();
    const wrapper = shallow(<ButtonExit onClick={mockCallBack}/>);
    
    wrapper.find('button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
