import React from 'react'
import PropTypes from 'prop-types';
import { SpinnerBody, SpinnerPart } from './SpinnerElements'

const Spinner = ({size, color}) => {
    return (
        <SpinnerBody size={size}>
            <SpinnerPart color={color}/>
            <SpinnerPart color={color}/>
        </SpinnerBody>
    )
}

Spinner.propTypes = {

    /**
     * ~~~
     * Set color letter's spinner. 
     * ~~~
     */
     color: PropTypes.oneOf(['primary', 'secondary','danger','warning','success','info','accent','text']),
      /**
     * ~~~
     * Set size's spinner.
     * ~~~
     * 
     */
    size: PropTypes.oneOf(['sm', 'md','lg','xl']),
}

Spinner.defaultProps = {
    color:"text",   
    size: "md"
}
  

export default Spinner;
