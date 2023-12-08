import React, { Fragment, useState } from 'react';
import { useLingui } from "@lingui/react";
import 'rc-slider/assets/index.css';
import "./HomeLoan.css";
import { cityOptions, planOptions, typeOptions, propertyOptions } from '../../Data/HomeLoanData'
import SelectBlock from "./FormBlock/SelectBlock/SelectBlock";
import InputSliderBlock from "./FormBlock/InputSliderBlock/InputSliderBlock";
import InputBlock from "./FormBlock/InputBlock/InputBlock";



const HomeLoan = () => {
    const homeLoanText = useLingui().i18n._('HOME_LOAN');
    const [propertyValue, setPropertyValue] = useState(1000000);
    const [city, setCity] = useState("");
    const [plan, setPlan] = useState("");
    const [downPayment, setDownPayment] = useState(1000000);
    const [type, setType] = useState("");
    const [property, setProperty] = useState("");
    const [deadline, setDeadline] = useState(20);
    const [monthlyPayment, setMonthlyPayment] = useState(2654);
    const [errors, setErrors] = useState({
        propertyValue: false,
        city: false,
        plan: false,
        downPayment: false,
        type: false,
        property: false,
        deadline: false,
        monthlyPayment: false,
    });

    const sendResult = () => {
        setErrors({
            propertyValue: (propertyValue <= 0),
            city: (city === ""),
            plan: (plan === ""),
            downPayment: (downPayment <= 0),
            type: (type === ""),
            property: (property === ""),
            deadline: (deadline < 4 || deadline > 30),
            monthlyPayment: (monthlyPayment < 2654),
        });
    }

    console.log(errors)
    return (
        <Fragment>
            <div className={'main-block'}>
                <div className={'main-form'}>
                    <h1>{homeLoanText["TITLE"]}</h1>
                    <div className={'form-block'}>
                        <div className={'form-input-block'}>
                            <InputBlock
                                label={"PROPERTY_VALUE"}
                                error={errors.propertyValue}
                                errorText={"PAYMENT_DESCRIPTION"}
                                value={propertyValue}
                                setValue={(e) => setPropertyValue(e)}
                            />
                            <SelectBlock
                                label={"CITY"}
                                placeholder={"SELECT_CITY"}
                                error={errors.city}
                                errorText={"SELECT_ERROR"}
                                setData={(e) => setCity(e)}
                                options={cityOptions}
                            />
                            <SelectBlock
                                label={"HOME_LOAN_PLAN"}
                                placeholder={"SELECT_PLAN"}
                                error={errors.plan}
                                errorText={"SELECT_ERROR"}
                                setData={(e) => setPlan(e)}
                                options={planOptions}
                            />
                        </div>
                    </div>
                    <div className={'form-block'}>
                        <div className={'form-input-block'}>
                            <InputSliderBlock
                                label={"DOWN_PAYMENT"}
                                info={"PAYMENT_DESCRIPTION"}
                                error={errors.downPayment}
                                errorText={"DOWN_PAYMENT_ERROR"}
                                min={1}
                                max={1000000}
                                value={downPayment}
                                setValue={(e) => setDownPayment(e)}
                            />
                            <SelectBlock
                                label={"TYPE"}
                                placeholder={"SELECT_TYPE"}
                                error={errors.type}
                                errorText={"SELECT_ERROR"}
                                setData={(e) => setType(e)}
                                options={typeOptions}
                            />
                            <SelectBlock
                                label={"HAVE_PROPERTY"}
                                placeholder={"SELECT_ANSWER"}
                                error={errors.property}
                                errorText={"SELECT_ERROR"}
                                setData={(e) => setProperty(e)}
                                options={propertyOptions}
                            />
                        </div>
                    </div>
                    <div className={'form-block top-line'}>
                        <div className={'form-input-block'}>
                            <InputSliderBlock
                                label={"DEADLINE"}
                                error={errors.deadline}
                                errorText={"DEADLINE_ERROR"}
                                min={4}
                                max={30}
                                minMaxLabels={{min: "4 года", max: "30 лет"}}
                                value={deadline}
                                setValue={(e) => setDeadline(e)}
                            />
                            <InputSliderBlock
                                label={"MONTHLY_PAYMENT"}
                                info={"ADVICE_MONTHLY_PAYMENT"}
                                error={errors.monthlyPayment}
                                errorText={"PAYMENT_AMOUNT_ERROR"}
                                min={2654}
                                max={51130}
                                minMaxLabels={{min: "2,654 ₪", max: "51,130 ₪"}}
                                value={monthlyPayment}
                                setValue={(e) => setMonthlyPayment(e)}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={'main-block top-line'}>
                <div className={'btn-block'}>
                    <button className={'btn'} onClick={sendResult}>
                        {homeLoanText["CONTINUE"]}
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
export default HomeLoan;
