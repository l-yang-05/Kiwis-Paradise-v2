import React from 'react';

const FilterType = ({ filterHandler }) => {

    return (
        <div className="container-filter">
            <div className="container-type">
                <h3 className="tag">Filter by Type</h3>
                <form className="filterButtons">
                    <select onChange={filterHandler}>
                        <option></option>
                        <option className="type" value="animal" id="type-1"  >Animal</option>
                        <option className="type" value="character" id="type-2" >Character</option>
                        <option className="type" value="other" id="type-3" >Other</option>
                    </select>
                </form>
            </div>

            <div className="container-price">
                <h3 className="tag">Filter by Price</h3>
                <form className="filterButtons">
                    <select>
                        <option></option>
                        <option className="price" value="3" id="price-1" >$3.00</option>
                        <option className="price" value="4" id="price-2">$4.00</option>
                        <option className="price" value="5" id="price-3">$5.00</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default FilterType;