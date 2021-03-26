import { Slider } from '../../components';
import 'jest-styled-components';
import { shallow } from 'enzyme';

describe('Test en <Slider />', () => {
  test('componente <Slider /> debe renderizarse correctamente sin parametros', () => {
    const wrapper = shallow(<Slider />);
    expect(wrapper).toMatchSnapshot();
  });
  test('componente <Slider /> recibe parametros correctamente', () => {
    const wrapper = shallow(<Slider min={5} max={150} value={30} step={5} />);
    //Atributos de componente
    const attribute = wrapper.getElement('input').props;
    //Evaluar que los atributos se pasen correctamente
    expect(attribute.min).toEqual(5);
    expect(attribute.max).toEqual(150);
    expect(attribute.value).toEqual(30);
    expect(attribute.step).toEqual(5);
    expect(attribute.type).toEqual('range');
    //Evaluar las propiedades de css
    expect(wrapper).toHaveStyleRule('height', '25px');
    expect(wrapper).toHaveStyleRule('outline', 'none');
    expect(wrapper).toHaveStyleRule('opacity', '0.7');
    expect(wrapper).toHaveStyleRule('-webkit-transition', 'opacity 0.2s');
    expect(wrapper).toHaveStyleRule('transition', 'opacity 0.2s');
    expect(wrapper).toHaveStyleRule('border-radius', '8px');
    expect(wrapper).toHaveStyleRule('background', '#d7dcdf');
    expect(wrapper).toHaveStyleRule('opacity', '1', { modifier: ':hover' });

    //Evaluar para chrome
    expect(wrapper).toHaveStyleRule('appearance', 'none', {
      modifier: '::-webkit-slider-thumb',
    });
    expect(wrapper).toHaveStyleRule('width', '25px', {
      modifier: '::-webkit-slider-thumb',
    });
    expect(wrapper).toHaveStyleRule('height', '25px', {
      modifier: '::-webkit-slider-thumb',
    });
    expect(wrapper).toHaveStyleRule('background', '#4caf50', {
      modifier: '::-webkit-slider-thumb',
    });
    expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
      modifier: '::-webkit-slider-thumb',
    });
    expect(wrapper).toHaveStyleRule('transition', 'transform 0.15s ease-in-out,box-shadow 0.25s ease-in-out', {
      modifier: '::-webkit-slider-thumb',
    });
    //Evaluar focus - chrome
    expect(wrapper).toHaveStyleRule('transform', 'scale(1.1)', {
      modifier: ':active::-webkit-slider-thumb',
    });
    expect(wrapper).toHaveStyleRule('box-shadow', '0 0 0 3px #d7dcdf, 0 0 0 6px #4caf50', {
      modifier: ':active::-webkit-slider-thumb',
    });

    //Evaluar para mozilla
    expect(wrapper).toHaveStyleRule('width', '25px', {
      modifier: '::-moz-range-thumb',
    });
    expect(wrapper).toHaveStyleRule('height', '25px', {
      modifier: '::-moz-range-thumb',
    });
    expect(wrapper).toHaveStyleRule('border-radius', '50%', {
      modifier: '::-moz-range-thumb',
    });
    expect(wrapper).toHaveStyleRule('background', '#4caf50', {
      modifier: '::-moz-range-thumb',
    });
    expect(wrapper).toHaveStyleRule('cursor', 'pointer', {
      modifier: '::-moz-range-thumb',
    });
    expect(wrapper).toHaveStyleRule('transition', 'transform 0.15s ease-in-out,box-shadow 0.25s ease-in-out', {
      modifier: '::-moz-range-thumb',
    });
    //Evaluar focus - mozilla
    expect(wrapper).toHaveStyleRule('transform', 'scale(1.1)', {
      modifier: ':active::-moz-range-thumb',
    });
    expect(wrapper).toHaveStyleRule('box-shadow', '0 0 0 3px #d7dcdf, 0 0 0 6px #4caf50', {
      modifier: ':active::-moz-range-thumb',
    });
  });
  test('componente <Slider /> debe mostrar color correspondiente', () => {
    const wrapper = shallow(<Slider bgThumb="purple" />);
    //Chrome
    expect(wrapper).toHaveStyleRule('background', '#8B5CF6', {
      modifier: '::-webkit-slider-thumb',
    });
    expect(wrapper).toHaveStyleRule('box-shadow', '0 0 0 3px #d7dcdf, 0 0 0 6px #8B5CF6', {
      modifier: ':active::-webkit-slider-thumb',
    });
    //Mozilla
    expect(wrapper).toHaveStyleRule('background', '#8B5CF6', {
      modifier: '::-moz-range-thumb',
    });
    expect(wrapper).toHaveStyleRule('box-shadow', '0 0 0 3px #d7dcdf, 0 0 0 6px #8B5CF6', {
      modifier: ':active::-moz-range-thumb',
    });
  });
});
