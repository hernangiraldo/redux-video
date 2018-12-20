import React from 'react';
import './search.css';

const Search = ({handleSubmit, setRef, value, handleChange}) => (
    <form className="Search" onSubmit={handleSubmit}>
        <input
            ref={setRef}
            className="Search-input"
            type="text"
            placeholder="Busca tu video favorito"
            name="search"
            value={value}
            onChange={handleChange}
        />
    </form>
);

export default Search;