import React from 'react';

// Takes passed in states and functions from parent component (Products pg component)
const Filter = ({ all, filterType, filterPrice, type, price }) => {
    return (
        <div className="container-filter">
            <div className="container-type">
                <form>
                    <h3>Reset Filter</h3>
                    <input type="button" value="reset" onClick={all}></input>
                </form>
            </div>
            <div className="container-type">
                <h3 className="tag">Filter by Type</h3>
                <form className="filterButtons" name="type-drop">
                    <select onChange={filterType} value={type} >
                        <option defaultValue={true} disabled="disabled" value="">--- Select A Type ---</option>
                        <option value="character">Character</option>
                        <option value="animal">Animal</option>
                        <option value="other">Other</option>
                    </select>
                </form>
            </div>

            <div className="container-price">
                <h3 className="tag">Filter by Price</h3>
                <form className="filterButtons" name="price-drop">
                    <select onChange={filterPrice} value={price}>
                        <option defaultValue={true} disabled="disabled" value="">--- Select A Price ---</option>
                        <option value="3">$3.00</option>
                        <option value="4">$4.00</option>
                        <option value="5">$5.00</option>
                    </select>
                </form>
            </div>
        </div>
    )
}

export default Filter;