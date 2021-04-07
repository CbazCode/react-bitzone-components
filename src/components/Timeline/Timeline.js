import styled, {css} from 'styled-components';
import PropTypes from 'prop-types';



const onDoneTask = (done = false) => {
    return done ?  '#13CE66' : '#DADADA';
};

const onCustomizeLarge = (connectorLenght = 4 ) =>{
    return `${connectorLenght}em`
}

const isFinalTask = (isFinal = false)=>{
    console.log(isFinal);
    return (isFinal ?
    css`
        visibility: hidden;
    `
    :
    css`
        visibility: visible;
    `
    )
}
const TimelineS = styled.div`
    width: 100%;
    
`
const TimelineItemS = styled.div`
    display: flex;
`
const TimelineSeparator = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 10%;
    position: relative;
    top: 1.4em;

`
const TimelineConnector = styled.div`
    width: 1px;
    //Figma
    /* height: 43px; */
    //Mi criterio debe ser personalizable
    height: ${({ connectorLenght }) => onCustomizeLarge(connectorLenght)};

    border: dashed 1px;
    border-color: ${({ done }) => onDoneTask(done)};
    ${({ isFinal }) => isFinalTask(isFinal)}
`

const TimelineDot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ done }) => onDoneTask(done)};
`

const TimelineContent = styled.div`
    color: black;
    width: 90%;
    padding: 0.9em;
`
const TimelineIcon = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: solid 2px;
    border-color:${({ done }) => onDoneTask(done)};
    display: flex;
    justify-content:center;
    align-items:center;
    color:${({ done }) => onDoneTask(done)};
`


export const TimelineItem = ({children, done, connectorLenght, isFinal, iconName}) => {
    return(
        <TimelineItemS>
            <TimelineSeparator>
                { iconName ==='' || !iconName ?
                    <TimelineDot done = {done}/> :

                    <TimelineIcon done = {done}>
                        <i className= {`fas fa-${iconName}`}></i>
                    </TimelineIcon> 
                }
                <TimelineConnector done = {done} connectorLenght ={connectorLenght} isFinal={isFinal}/>             
              
            </TimelineSeparator>
            <TimelineContent>
                {children}
            </TimelineContent>
        </TimelineItemS>
    )
}

export const Timeline = ({children}) =>{
    return(
        <TimelineS>
            {children}
        </TimelineS>
    )
}

Timeline.propTypes = {
    done:PropTypes.bool,
    connectorLenght: PropTypes.number,
}
Timeline.defaultProps = {
    done: false,
    connectorLenght:4
}
  
