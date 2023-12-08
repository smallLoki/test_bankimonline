import React, { useState } from 'react';
import { useLingui } from "@lingui/react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./InputSliderBlock.css";
import Info from "../../../../components/Info/Info";
import Error from "../../../../components/Error/Error";
import nis from '../../../../assets/images/currencies/nis.svg';



const InputSliderBlock = ({error, value, setValue, min, max, label, info, errorText, minMaxLabels}) => {
    const inputSliderBlock = useLingui().i18n._('HOME_LOAN');

    const sliderStyles = {
        style:{height: 2, padding: 0},
        trackStyle: { backgroundColor: "#FBE54D", height: 2 },
        railStyle: { backgroundColor: "#333535", height: 2 },
        handleStyle: {
            border: "transparent",
            height: 12,
            width: 12,
            backgroundColor: "#FBE54D"
        },
    }

    return (
        <div className={'form-label'}>
            <label>{inputSliderBlock[label]}</label>
            <div className={'input-label-block'}>
                <input className={`input-with-range ${error && 'error'}`}
                       type="number"
                       value={value}
                       onChange={(e) => setValue(e.target.value)} />
                <div className={'input-label'}>
                    <img src={nis} className={'label-img'} alt=""/>
                </div>
                <Slider
                    {...sliderStyles}
                    min={min}
                    max={max}
                    defaultValue={value}
                    value={value}
                    onChange={(e) => setValue(e)}
                />
            </div>
            {minMaxLabels && <div className={'min-max-slider-block'}>
                <span>{minMaxLabels.min}</span>
                <span>{minMaxLabels.max}</span>
            </div>}
            {info && <Info text={inputSliderBlock[info]}/>}
            {error &&
                <Error text={inputSliderBlock[errorText]}/>}
        </div>
    )
}
export default InputSliderBlock;
