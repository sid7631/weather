import React from 'react'
import styled from 'styled-components'

const Phone = ({children}) => {
    return (
        <PhoneContainer>
            <div className="camera"></div>
            <div className="speaker"></div>
            {children}
        </PhoneContainer>
    )
}

export default Phone


const PhoneContainer = styled.div`
    width: var(--phone-width);
    height: var(--phone-height);
    //background: var(--phone-bg-color);
    display: block;
    border-radius: 35px;
    border: 8px solid var(--scnd-bg-color);
    position: relative;
    box-shadow: 0px -4px 0 #000, 0px 5px 0 #000, 0px -3px 0 #000, 0px 6px 0 #000, 0px 0px 12px #000, inset 0 0 16px 1px #6c9da9;

    &::before {
        content: '';
        position: absolute;
        left: 25%;
        top: 0;
        width: 50%;
        height: 3%;
        background: var(--scnd-bg-color);
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
    }

    &::after {
        content: '';
        position: absolute;
        left: 25%;
        bottom: 1px;
        width: 50%;
        height: 0.5%;
        background: var(--scnd-bg-color);
        border-radius: 25px;
    }

    .camera {
        width: 8px;
        height: 8px;
        background: white;
        position: absolute;
        right: 31%;
        top: 0;
        border-radius: 50%;
        background: #9d9fa936;
        box-shadow: 1px 0px 3px white;
    }
    
    .speaker {
        content: '';
        position: absolute;
        right: 40%;
        top: 2px;
        width: 23%;
        height: 4px;
        background: #9d9fa936;
        border-radius: 10px;
    }

`;