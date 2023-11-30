import React from 'react'
import './Info.css'
import info from "../../assets/images/info.svg";

const Info = (props) => {
    const { text } = props;

    return (
        <div className={'input-info'}>
            <img src={info}/>
            <p>{text}</p>
        </div>
    )
}

export default Info;
