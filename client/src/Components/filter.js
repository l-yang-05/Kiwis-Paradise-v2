import React from 'react';

const FilterType = ({ filter, radioAll }) => {

    return (
        <div className="container-filter">
            <div className="container-type">
                <h3 className="tag">Filter by Type</h3>
                <form className="filterButtons">
                    {/* onClick returns itself and the element/ Any click listen fires, grabs the value of the element that its getting it from */}
                    <label className="lab" htmlFor="type-1">Animal</label><input type="radio" className="type" value="animal" id="type-1" name="filterType" onClick={filter} />
                    <label className="lab" htmlFor="type-2">Character</label><input type="radio" className="type" value="character" id="type-2" name="filterType" onClick={filter} />
                    <label className="lab" htmlFor="type-3">Other</label> <input type="radio" className="type" value="other" id="type-3" name="filterType" onClick={filter} />
                </form>
            </div>

            <div className="container-price">
                <h3 className="tag">Filter by Price</h3>
                <form className="filterButtons">
                    <label className="lab" htmlFor="price-1">$3.00</label><input type="radio" className="price" value="3" id="price-1" name="filterPrice" onClick={filter} />
                    <label className="lab" htmlFor="price-2">$4.00</label><input type="radio" className="price" value="4" id="price-2" name="filterPrice" onClick={filter} />
                    <label className="lab" htmlFor="price-3">$5.00</label><input type="radio" className="price" value="5" id="price-3" name="filterPrice" onClick={filter} />
                    <label className="lab" htmlFor="all-price">All</label><input type="radio" className="price" value="All" name="filterPrice" id="all-price" onClick={filter} />
                </form>
            </div>
        </div>
    )
}

export default FilterType;