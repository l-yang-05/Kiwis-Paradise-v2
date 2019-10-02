import React from 'react';

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
                        <option selected="true" disabled="disabled" value="">--- Select A Type ---</option>
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
                        <option selected="true" disabled="disabled" value="">--- Select A Price ---</option>
                        <option value="3">$3.00</option>
                        <option value="4">$4.00</option>
                        <option value="5">$5.00</option>
                    </select>
                    {/* <input type="button" value="3" onClick={price}></input>
                    <input type="button" value="4" onClick={price}></input>
                    <input type="button" value="5" onClick={price}></input> */}
                </form>
            </div>
        </div>
    )
}

export default Filter;