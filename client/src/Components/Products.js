import React, { useState } from 'react';
import { useTitle } from 'hookrouter';
import list from './products.json';
import FilterBox from './filter';

let typeItem;
let priceItem;
let allSelected;
let filteredList = list;

const Products = () => {
    useTitle("Kiwi's Paradise | Products")
    const [counter, setCounter] = useState(0);

    const filterList = (value, isPrice) => {
        if (value === 'All' && isPrice) {
            filteredList = list;
            allSelected = true;
            setCounter(counter + 1);
        } else if (value !== 'All' && isPrice) {
            allSelected = false;
            priceItem = Number(value);
        } else {
            typeItem = value;
        }


        const filterResult = list.filter((item) => {
            if (allSelected) {
                return item.category;
            } else if (typeItem && priceItem && !allSelected) {
                return item.category === typeItem && item.price === priceItem;
            } else if (typeItem && !allSelected) {
                return item.category === typeItem;
            } else if (priceItem && !allSelected) {
                return item.price === priceItem;
            }
        });
        filteredList = filterResult;
        setCounter(counter + 1);

    }

    // Reset set filtered list to []
    const clickFilter = (e) => {
        const value = e.target.value;
        const isPrice = e.target.name === 'filterPrice';
        filterList(value, isPrice)
    }

    return (
        <div className="productpg-wrapper">
            <h1>Our Products</h1>
            {/* Extracts the clickFilter from parent and passes it in as its own props */}
            <FilterBox filter={clickFilter} />
            <div className="container-products">

                {filteredList.map((item, index) => {
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