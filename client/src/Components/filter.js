import React from 'react';

const FilterType = ({ filter, radioAll }) => {

    return (
        <div className="container-filter">
            <div className="container-type">
                <h3 className="tag">Filter by Type</h3>
                <select className="filterButtons">
                    {/* onClick returns itself and the element/ Any click listen fires, grabs the value of the element that its getting it from */}
                    <label className="lab" htmlFor="type-1">Animal</label><option className="type" value="animal" id="type-1" name="filterType" onClick={filter} />
                    <label className="lab" htmlFor="type-2">Character</label><option className="type" value="character" id="type-2" name="filterType" onClick={filter} />
                    <label className="lab" htmlFor="type-3">Other</label> <option className="type" value="other" id="type-3" name="filterType" onClick={filter} />
                    <label className="lab" htmlFor="all">All</label><option value="All" name="filterType" onClick={radioAll} />
                </select>
            </div>

            <div className="container-price">
                <h3 className="tag">Filter by Price</h3>
                <select className="filterButtons">
                    <label className="lab" htmlFor="price-1">$3.00</label><option className="price" value="3" id="price-1" name="filterPrice" onClick={filter} />
                    <label className="lab" htmlFor="price-2">$4.00</label><option className="price" value="4" id="price-2" name="filterPrice" onClick={filter} />
                    <label className="lab" htmlFor="price-3">$5.00</label><option className="price" value="5" id="price-3" name="filterPrice" onClick={filter} />
                    <label className="lab" htmlFor="all">All</label><option value="other" name="filterPrice" onClick={radioAll} />
                </select>
            </div>
        </div>
    )
}

export default FilterType;