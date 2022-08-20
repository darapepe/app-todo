import React from 'react';
import { TodoContext } from '../TodoContext'
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return (
        <center>
            <input
            className="TodoSearch"
            placeholder="Texto a buscar"
            value={searchValue}
            onChange={onSearchValueChange}
        />
        </center>        
    );
}

export { TodoSearch };