import React from 'react';
import './Searchbar.scss'

const SearchBar = ({searchChange}) => {
    return (
      <div className='searchbar-container'>
        <div className='searchbar'>
          {/* <p>Use the side bar to navigate through the menu by clicking the icon in the top left.</p>
          <p>-OR-</p> */}
          <p>Use our search bar, side drawer or simply scroll down.</p>
          <div className='search-field'>
            <input 
                className='searchInput'
                type='search' 
                placeholder='Search for a product' 
                onChange = {searchChange}
            />
          </div>
        </div>
      </div>
    );
}

export default SearchBar;