import React from 'react';
import {useLingui} from "@lingui/react";
import "./Product.css";
import logo from '../../../assets/images/logo.svg'
import star from '../../../assets/images/star.svg'

const Product = (props) => {
    const productText = useLingui().i18n._('CATALOG');
    const { product } = props;

    return (
        <div className={'product'}>
            <div className={'product-img-block'}>
                <span className={'product-like'}></span>
                <img src={product.thumbnail ?? logo} className={'product-img'} alt=""/>
            </div>
            <div className={'info-block'}>
                <div className={'cost'}>
                    {product.price} {productText["CURRENCY"]}
                </div>
                <div className={'title'}>
                    <span className={'brand'}>{product.brand}</span>&nbsp;{product.title}
                </div>
                <div className={'product-details'}>
                    <div className={'product-rating'}>
                        <img src={star} className={'rating-star'} alt=""/>&nbsp;{product.rating}
                    </div>
                    <div className={'product-reviews'}>
                        {product.stock} {productText["STOCK_UNITS"]}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Product;
