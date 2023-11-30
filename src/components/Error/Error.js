import React from 'react'
import './Error.css'
import info from "../../assets/images/info.svg";

const Error = (props) => {
    const { text } = props;

    return (
        <div className={'input-error'}>
            <img src={info}/>
            <p>{text}</p>
        </div>
    )
}

export default Error;
