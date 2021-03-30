import { Ball, InputSwitch, LabelSwitch, SwitchContainer } from './SwitchElements';
import PropTypes from 'prop-types';

const Switch = ({ id =`${Math.random().toPrecision(4)}`, isDisabled, isChecked, defaultRight, isRequired, name, size, bgColor }) => {
  return (
    <SwitchContainer defaultRight={defaultRight}>
      <InputSwitch
        className="checkbox"
        id={id}
        isDisabled={isDisabled}
        isChecked={isChecked}
        isRequired={isRequired}
        name={name}
      />
      <LabelSwitch className="label" htmlFor={id} size={size} bgColor={bgColor}>
        <Ball className="ball" defaultRight={defaultRight} size={size} />
      </LabelSwitch>
    </SwitchContainer>
  );
};

Switch.propTypes = {

  /**
   * ~~~
   * Set backgorund letter's spinner. 
   * ~~~
   */
  bgColor: PropTypes.oneOf(['primary', 'secondary','danger','warning','success','info','accent','text']),
  /**
   * ~~~
   * Set size's switcher.
   * ~~~
   * 
   */
  size: PropTypes.oneOf(['sm', 'md','lg']),
   /**
   * ~~~
   * Set id's switcher
   * ~~~
   * 
   */
  id: PropTypes.string,
  /**
   * ~~~
   * Set name's switcher
   * ~~~
   * 
   */
   name: PropTypes.string,
   /**
   * ~~~
   * Set if the switcher needly should be checked 
   * ~~~
   * 
   */
  isRequired: PropTypes.bool,
   /**
   * ~~~
   * Set the switcher is checked by default  
   * ~~~
   * 
   */
  isChecked: PropTypes.bool,
  /**
   * ~~~
   * Set the switcher is disable 
   * ~~~
   * 
   */
   isDisabled: PropTypes.bool,
   /**
   * ~~~
   * Set the ball of the switcher is to right
   * ~~~
   * 
   */
    defaultRight: PropTypes.bool
}


Switch.defaultProps = {
  bgColor:"text",   
  size: "md",
  isRequired:false,
  defaultRight: false

}

export default Switch;

// bgColor = "red" - "yellow" - "green" - "blue" - "purple" - "indigo" - "pink" - default
// defaultRight = "true" - "false"
// size = "sm" "md" "lg"
//isDisabled
// isChecked = "true" - "false"
// is Required = "true" - "false"
// name
// id



