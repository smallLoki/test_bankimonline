import React, { Fragment, useState } from 'react';
import { useLingui } from "@lingui/react";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./HomeLoan.css";
import SelectBox from "../../components/SelectBox/SelectBox";
import Info from "../../components/Info/Info";
import Error from "../../components/Error/Error";
import nis from '../../assets/images/currencies/nis.svg';



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

    const cityOptions = [
        { value: 'Тель-авив', label: 'Тель-авив' },
        { value: 'Акко', label: 'Акко' },
        { value: 'Ариэль', label: 'Ариэль' },
    ];

    const planOptions = [
        { value: '1', label: 'В ближайший месяц' },
        { value: '2', label: 'В ближайшие 2 месяц' },
        { value: '3', label: 'В ближайшие 3 месяца' },
        { value: '6', label: 'В ближайшие 6 месяцев' },
    ];

    const typeOptions = [
        { value: '1', label: 'Квартира от застройщика' },
        { value: '2', label: 'Квартира на вторичном рынке' },
        { value: '3', label: 'Частный дом' },
        { value: '4', label: 'Земельный участок / Строительство' },
        { value: '5', label: 'Коммерческая недвижимость' },
    ];

    const propertyOptions = [
        { value: '1', label: 'Нет, я пока не владею недвижимостью' },
        { value: '2', label: 'Да, у меня уже есть недвижимость в собственности' },
        { value: '3', label: 'Я собираюсь продать единственную недвижимость в ближайшие два года, чтобы использовать полученный капитал для приобретения новой' },
    ];

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
                            <div className={'form-label'}>
                                <label>{homeLoanText["PROPERTY_VALUE"]}</label>
                                <div className={'input-label-block'}>
                                    <input className={`input-with-label ${errors.propertyValue && 'error'}`} type="number"
                                           value={propertyValue}
                                           onChange={(e) => setPropertyValue(e.target.value)} />
                                    <div className={'input-label'}>
                                        <img src={nis} className={'label-img'} alt=""/>
                                    </div>
                                </div>
                                {errors.propertyValue &&
                                    <Error text={homeLoanText["PAYMENT_DESCRIPTION"]}/>}
                            </div>
                            <div className={'form-label'}>
                                <label>{homeLoanText["CITY"]}</label>
                                <SelectBox
                                    error={errors.city}
                                    onChangeValue={(e) => setCity(e)}
                                    placeholder={homeLoanText["SELECT_CITY"]}
                                    options={cityOptions}
                                />
                                {errors.city &&
                                    <Error text={homeLoanText["SELECT_ERROR"]}/>}
                            </div>
                            <div className={'form-label'}>
                                <label>{homeLoanText["HOME_LOAN_PLAN"]}</label>
                                <SelectBox
                                    error={errors.plan}
                                    onChangeValue={(e) => setPlan(e)}
                                    placeholder={homeLoanText["SELECT_PLAN"]}
                                    options={planOptions}
                                />
                                {errors.plan &&
                                    <Error text={homeLoanText["SELECT_ERROR"]}/>}
                            </div>
                        </div>
                    </div>
                    <div className={'form-block'}>
                        <div className={'form-input-block'}>
                            <div className={'form-label'}>
                                <label>{homeLoanText["DOWN_PAYMENT"]}</label>
                                <div className={'input-label-block'}>
                                    <input className={`input-with-range ${errors.downPayment && 'error'}`} type="number"
                                           value={downPayment}
                                           onChange={(e) => setDownPayment(e.target.value)} />
                                    <div className={'input-label'}>
                                        <img src={nis} className={'label-img'} alt=""/>
                                    </div>
                                    <Slider
                                        {...sliderStyles}
                                        min={1}
                                        max={1000000}
                                        defaultValue={downPayment}
                                        value={downPayment}
                                        onChange={(e) => setDownPayment(e)}
                                    />
                                </div>
                                <Info text={homeLoanText["PAYMENT_DESCRIPTION"]}/>
                                {errors.downPayment &&
                                    <Error text={homeLoanText["DOWN_PAYMENT_ERROR"]}/>}
                            </div>
                            <div className={'form-label'}>
                                <label>{homeLoanText["TYPE"]}</label>
                                <SelectBox
                                    error={errors.type}
                                    onChangeValue={(e) => setType(e)}
                                    placeholder={homeLoanText["SELECT_TYPE"]}
                                    options={typeOptions}
                                />
                                {errors.type &&
                                    <Error text={homeLoanText["SELECT_ERROR"]}/>}
                            </div>
                            <div className={'form-label'}>
                                <label>{homeLoanText["HAVE_PROPERTY"]}</label>
                                <SelectBox
                                    error={errors.property}
                                    onChangeValue={(e) => setProperty(e)}
                                    placeholder={homeLoanText["SELECT_ANSWER"]}
                                    options={propertyOptions}
                                />
                                {errors.property &&
                                    <Error text={homeLoanText["SELECT_ERROR"]}/>}
                            </div>
                        </div>
                    </div>
                    <div className={'form-block top-line'}>
                        <div className={'form-input-block'}>
                            <div className={'form-label'}>
                                <label>{homeLoanText["DEADLINE"]}</label>
                                <div className={'input-label-block'}>
                                    <input className={`input-with-range ${errors.deadline && 'error'}`} type="number"
                                           value={deadline}
                                           onChange={(e) => setDeadline(e.target.value)} />
                                    <div className={'input-label'}>
                                        <img src={nis} className={'label-img'} alt=""/>
                                    </div>
                                    <Slider
                                        {...sliderStyles}
                                        min={4}
                                        max={30}
                                        defaultValue={deadline}
                                        value={deadline}
                                        onChange={(e) => setDeadline(e)}
                                    />
                                </div>
                                <div className={'min-max-slider-block'}>
                                    <span>4 года</span>
                                    <span>30 лет</span>
                                </div>
                                {errors.deadline &&
                                    <Error text={homeLoanText["DEADLINE_ERROR"]}/>}
                            </div>
                            <div className={'form-label'}>
                                <label>{homeLoanText["MONTHLY_PAYMENT"]}</label>
                                <div className={'input-label-block'}>
                                    <input className={`input-with-range ${errors.monthlyPayment && 'error'}`} type="number"
                                           value={monthlyPayment}
                                           onChange={(e) => setMonthlyPayment(e.target.value)} />
                                    <div className={'input-label'}>
                                        <img src={nis} className={'label-img'} alt=""/>
                                    </div>
                                    <Slider
                                        {...sliderStyles}
                                        min={2654}
                                        max={51130}
                                        defaultValue={monthlyPayment}
                                        value={monthlyPayment}
                                        onChange={(e) => setMonthlyPayment(e)}
                                    />
                                </div>
                                <div className={'min-max-slider-block'}>
                                    <span>2,654 ₪</span>
                                    <span>51,130 ₪</span>
                                </div>
                                <Info text={homeLoanText["ADVICE_MONTHLY_PAYMENT"]}/>
                                {errors.monthlyPayment &&
                                    <Error text={homeLoanText["PAYMENT_AMOUNT_ERROR"]}/>}
                            </div>
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
