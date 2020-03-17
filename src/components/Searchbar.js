import React from 'react';
import './Searchbar.scss'

const SearchBar = ({searchChange}) => {
    return (
        <div className='searchbar'>
          <p>Use our search bar to find something specific.</p>
          <div className='search-field'>
            <input 
                className='searchInput'
                type='search' 
                placeholder='Search for a product' 
                onChange = {searchChange}
            />
          </div>
        </div>
    );
}

export default SearchBar;