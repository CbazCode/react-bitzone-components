import {Ball, InputSwitch, LabelSwitch, SwitchContainer} from "./Switch";

const Switch = ({id, isDisabled,isChecked, defaultCheked, isRequired, name, size, bgColor}) => {
    console.log(defaultCheked);
    return (
        <SwitchContainer defaultCheked ={defaultCheked}>
            <InputSwitch className="checkbox" id={id} isDisabled={isDisabled} isChecked ={isChecked} isRequired={isRequired} name={name}/>
            <LabelSwitch className="label" htmlFor={id} size={size} bgColor={bgColor}>
                <Ball className="ball" defaultCheked ={defaultCheked} size={size}/>
            </LabelSwitch>
        </SwitchContainer>  
        
    );
}
 
export default Switch;