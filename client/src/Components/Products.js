import React, { useState, useEffect } from 'react';
import { useTitle } from 'hookrouter';
import FilterBox from './filter';

const Products = () => {
    useTitle("Kiwi's Paradise | Products")


    const [products, setProducts] = useState(null)
    const [price, setPrice] = useState('')
    const [type, setType] = useState('')
    const productsApiCaller = async () => {
        try {
            const res = await fetch("api/products");
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setProducts(response)
            setType('')
            setPrice('');
        }
        catch (error) {
            throw error;
        }
    }

    const fetchType = async (e) => {
        e.preventDefault();
        const val = e.target.value;
        setType(val);
        try {
            const res = await fetch(`api/productfilter?type=${val}`);
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setProducts(response)
        }
        catch (error) {
            throw error
        }
    }

    const fetchPrice = async (e) => {
        e.preventDefault();
        const val = e.target.value;
        setPrice(val);
        try {
            const res = await fetch(`api/productfilter?price=${val}`);
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setProducts(response)
        }
        catch (error) {
            throw error
        }
    }

    const testFilter = async (type, price) => {
        const res = await fetch(`api/productfilter?type=${type}&price=${price}`);
        const text = await res.text();
        const response = text.length ? JSON.parse(text) : {}
        setProducts(response)
    }
    // Handles default list of products
    useEffect(() => {
        productsApiCaller()
    }, [])
    // Handles if buttons are selected
    useEffect(() => {
        if (price && type) {
            testFilter(type, price)
        }
    }, [type, price])


    return (
        <div className="productpg-wrapper">
            <h1>Our Products</h1>
            {/* Extracts the clickFilter from parent and passes it in as its own props */}
            <FilterBox all={productsApiCaller} type={fetchType} price={fetchPrice} />
            <div className="container-products">
                {products && products.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <img src={item.img} alt={item.alt} />
                            <h3>{item.product_name}</h3>
                            <p> {item.product_desc}</p>
                            <p> Type: {item.product_type} </p>
                            <p className="price"> $ {item.price}.00 </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Products; 