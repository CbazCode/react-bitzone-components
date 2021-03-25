import React from 'react'
import { SpinnerBody, SpinnerPart } from './SpinnerElements'

const Spinner = ({size, color}) => {
    return (
        <SpinnerBody size={size}>
            <SpinnerPart color={color}/>
            <SpinnerPart color={color}/>
        </SpinnerBody>
    )
}

export default Spinner;
