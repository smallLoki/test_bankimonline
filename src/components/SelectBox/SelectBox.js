import React from 'react'
import Select, { components } from "react-select";
import './SelectBox.css'
import check from "../../assets/images/check.svg";

const { Option } = components;
const CustomSelectOption = (props) => {
    const {
        data: { label }
    } = props;
    return (
        <Option {...props}>
            <div className={'option-block'}>
                <div> {label} </div>
                {props.isSelected && <img src={check} alt=""/>}
            </div>
        </Option>
    );
};

const SelectBox = (props) => {
    const colourStyles = {
        control: (styles, { isFocused, isSelected, isHover }) => ({
            ...styles,
            backgroundColor: '#2A2B31',
            color: "#fff",
            marginTop: 12,
            padding: "4.5px 16px",
            boxShadow: "none",
            border: isHover || isSelected
                ? "1px solid #333535"
                : isFocused
                    ? "1px solid #FBE54D"
                    : props.error
                        ? "1px solid #E76143"
                        : "1px solid #333535"
            ,
            ':hover': {
                border: isHover || isSelected
                    ? "1px solid #333535"
                    : isFocused
                        ? "1px solid #FBE54D"
                        : "1px solid #333535"
            }
        }),
        option: (styles, { isDisabled, isFocused, isSelected }) => {
            return {
                ...styles,
                borderRadius: 8,
                backgroundColor: isDisabled
                    ? undefined
                    : isSelected || isFocused
                        ? '#2A2B31'
                        : undefined,
                color: isDisabled || isSelected
                    ? '#FFF'
                    : undefined,

                ':active': {
                    ...styles[':active'],
                    backgroundColor: !isDisabled
                        ? '#2A2B31'
                        : undefined,
                }
            };
        },
        input: (styles) => ({
            ...styles,
            color: "#FFF",
            fontFamily: "Roboto",
            fontSize: 16,
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "normal",
        }),
        menu: (styles) => ({
            ...styles,
            color: "#FFF",
            backgroundColor: '#2A2B31',
            border: "1px solid #333535",
            borderRadius: 8
        }),
        placeholder: (styles) => ({ ...styles, color: '#848484' }),
        singleValue: (styles) => ({ ...styles, color: "#FFF" }),
        indicatorSeparator: (styles) => ({ display: "none" }),
        undefined: (styles) => ({ color: "#FFF" }),
    };

    return (
      <React.Fragment>
          <Select
              placeholder={props.placeholder}
              options={props.options}
              styles={colourStyles}
              onChange={e => props.onChangeValue(e)}
              components={{
                  Option: CustomSelectOption
              }}
          />
      </React.Fragment>
    )
}

export default SelectBox;
