import React from 'react';

const FilterType = ({ all, type, price }) => {

    return (
        <div className="container-filter">
            <form>
                <input type="reset" value="reset" onClick={all}></input>
            </form>
            <div className="container-type">
                <h3 className="tag">Filter by Type</h3>
                <form className="filterButtons">
                    <input type="button" value="character" onClick={type}></input>
                    <input type="button" value="animal" onClick={type}></input>
                    <input type="button" value="other" onClick={type}></input>
                </form>
            </div>

            <div className="container-price">
                <h3 className="tag">Filter by Price</h3>
                <form className="filterButtons">
                    <input type="button" value="3" onClick={price}></input>
                    <input type="button" value="4" onClick={price}></input>
                    <input type="button" value="5" onClick={price}></input>
                </form>
            </div>
        </div>
    )
}

export default FilterType;