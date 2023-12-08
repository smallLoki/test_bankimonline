import React from 'react';
import { useLingui } from "@lingui/react";
import "./InputBlock.css";
import Error from "../../../../components/Error/Error";
import nis from '../../../../assets/images/currencies/nis.svg';



const InputBlock = ({error, value, setValue, label, errorText}) => {
    const inputBlock = useLingui().i18n._('HOME_LOAN');

    return (
        <div className={'form-label'}>
            <label>{inputBlock[label]}</label>
            <div className={'input-label-block'}>
                <input className={`input-with-label ${error && 'error'}`} type="number"
                       value={value}
                       onChange={(e) => setValue(e.target.value)} />
                <div className={'input-label'}>
                    <img src={nis} className={'label-img'} alt=""/>
                </div>
            </div>
            {error &&
                <Error text={inputBlock[errorText]}/>}
        </div>
    )
}
export default InputBlock;
