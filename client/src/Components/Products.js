import React, { useState, useEffect } from 'react';
import { useTitle } from 'hookrouter';
import FilterBox from './filter';

const Products = () => {
    useTitle("Kiwi's Paradise | Products")


    const [products, setProducts] = useState(null)
    const productsApiCaller = async () => {
        try {
            const res = await fetch("api/products");
            const text = await res.text();
            const response = text.length ? JSON.parse(text) : {}
            setProducts(response);
        }
        catch (error) {
            throw error;
        }
    }

    // const filterApiCaller = async () => {
    //     try {
    //         const res = await fetch("api/product");
    //         const text = await res.text();
    //         const response = text.length ? JSON.parse(text) : {}
    //         setProducts(response)
    //     }
    //     catch (error) {
    //         throw error
    //     }
    // }

    useEffect(() => {
        productsApiCaller()
        // filterApiCaller()
    }, [])


    return (
        <div className="productpg-wrapper">
            <h1>Our Products</h1>
            {/* Extracts the clickFilter from parent and passes it in as its own props */}
            <FilterBox />
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