import { Ball, InputSwitch, LabelSwitch, SwitchContainer } from './SwitchElements';

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

export default Switch;
