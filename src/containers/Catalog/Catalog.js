import React, {useEffect, useState} from 'react';
import { useLingui } from "@lingui/react";
import "./Catalog.css";
import Product from "./Product/Product";

const Catalog = () => {
    const catalogText = useLingui().i18n._('CATALOG');
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(json => {
                    console.log(json)
                    setProducts(json.products);
                }
            );
    }, []);

    return (
        <div className={'main-catalog'}>
            <h1>{catalogText["TITLE"]}</h1>
            <div className={'catalog'}>
                {products.map((product, index) => (
                    <Product
                        key={index}
                        product={product}
                    />
                ))}
            </div>
        </div>
    )
}
export default Catalog;
