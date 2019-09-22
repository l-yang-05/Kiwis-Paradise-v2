import React, { useState, useEffect } from 'react';
import { useTitle } from 'hookrouter';
import list from './products.json';
import FilterBox from './filter';


const Products = () => {
    useTitle("Kiwi's Paradise | Products")
    const [priceProduct, setPriceProduct] = useState('All');
    const [typeProduct, setTypeProduct] = useState('All');
    const [filteredList, setFilteredList] = useState([]);
    const [arrayList, setArrayList] = useState(list)


    const filterList = (typeProduct, priceProduct) => {
        typeProduct === 'filterType' ? setTypeProduct(typeProduct) : setPriceProduct(priceProduct)
        const filterResult = arrayList.filter((item) => {
            return (priceProduct === item.price,
                typeProduct === item.category)
        });
        setFilteredList([...filterResult]);
    }

    // Reset set filtered list to []

    const allInput = (e) => {
        setFilteredList(list)
        // if (priceProduct === 'All' && typeProduct === 'All')
        //     setFilteredList(list);
    }


    const clickFilter = (e) => {
        const typeProduct = e.target.value;
        const priceProduct = e.target.value;
        filterList(typeProduct, priceProduct)
    }

    return (
        <div>
            <h1>Our Products</h1>
            {/* Extracts the clickFilter from parent and passes it in as its own props */}
            <FilterBox filter={clickFilter} radioAll={allInput} />
            <div className="container-products">

                {filteredList.length ? filteredList.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <img src={item.url} alt={item.alt} />
                            <h3>{item.name}</h3>
                            <p> {item.des}</p>
                            <p> Type: {item.category} </p>
                            <p className="price"> $ {item.price}.00 </p>
                        </div>
                    )
                }
                ) : list.map((item, index) => {
                    return (
                        <div key={index} className="item">
                            <img src={item.url} alt={item.alt} />
                            <h3>{item.name}</h3>
                            <p> {item.des}</p>
                            <p> Type: {item.category} </p>
                            <p className="price"> $ {item.price}.00 </p>
                        </div>
                    )
                }
                )}
            </div>

        </div>
    )
}

export default Products;