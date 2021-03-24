import { Switch } from '../../components';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { InputSwitch } from '../../components/Switch/Switch';

describe('Test en <Switch />', () => {
  test('Debe renderizarse el componente por defecto', () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('componente debe estar con isChecked ', () => {
    const wrapper = shallow(<Switch isChecked />);
    const attribute = wrapper.getElement('div').props.children[0].props;
    expect(attribute.isChecked).toEqual(true);
  });
  test('componente debe estar con name ', () => {
    const wrapper = shallow(<Switch name="test" />);
    const attribute = wrapper.getElement('div').props.children[0].props;
    expect(attribute.name).toEqual('test');
  });
  test('componente debe estar con id establecido ', () => {
    const wrapper = shallow(<Switch id="testid" />);
    const attribute = wrapper.getElement('div').props.children[0].props;
    expect(attribute.id).toEqual('testid');
  });

  test('componente debe estar con isRequired ', () => {
    const wrapper = shallow(<Switch isRequired />);
    const attribute = wrapper.getElement('div').props.children[0].props;

    expect(attribute.isRequired).toEqual(true);
  });

  test('componente debe deshabilitarse', () => {
    const { container } = render(<InputSwitch isDisabled />);
    expect(container.firstChild).toBeDisabled();
  });

  test('componente debe renderizarse en el tamaño deseado', () => {
    const wrapper = shallow(<Switch size="sm" />);
    const attribute = wrapper.getElement('div').props.children[1].props;
    expect(attribute.size).toEqual('sm');
  });

  test('componente debe renderizarse con el color deseado', () => {
    const wrapper = shallow(<Switch bgColor="red" />);
    const attribute = wrapper.getElement('div').props.children[1].props;
    expect(attribute.bgColor).toEqual('red');
  });
});
