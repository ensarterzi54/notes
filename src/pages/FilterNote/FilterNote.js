import React, { useState } from 'react'

const FilterNote = ({ searchText, setSearchText }) => {
    

    return (
        <div className="m-3">
            <label className="me-5">Not ara</label>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
        </div>
    )
}

export default FilterNote