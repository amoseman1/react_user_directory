import React from 'react';


function Searchbox(props) {
    return (
        <form>
            <div className="form-group" id="form">
                <label htmlFor="search">Search:</label>
                <input className="form-control"
                    id="search"
                    value={props.search}
                    name="search"
                    onChange={props.handleInputChange}
                    type="text"
                    placeholder="..." />
                <br />
            </div>
        </form>
    )
}

export default Searchbox;
