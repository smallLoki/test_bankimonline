import React  from 'react';
import { useLingui } from "@lingui/react";
import "./SelectBlock.css";
import SelectBox from "../../../../components/SelectBox/SelectBox";
import Error from "../../../../components/Error/Error";



const SelectBlock = ({label, error, setData, options, placeholder, errorText}) => {
    const selectBlockText = useLingui().i18n._('HOME_LOAN');

    return (
        <div className={'form-label'}>
            <label>{selectBlockText[label]}</label>
            <SelectBox
                error={error}
                onChangeValue={(e) => setData(e)}
                placeholder={selectBlockText[placeholder]}
                options={options}
            />
            {error &&
                <Error text={selectBlockText[errorText]}/>}
        </div>
    )
}
export default SelectBlock;
