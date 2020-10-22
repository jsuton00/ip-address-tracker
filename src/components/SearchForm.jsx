import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function SearchForm(props) {
  const { searchTerm, setSearchTerm, searchIPAddress, searchDomains } = props;

  const handleChange = (e) => {
    return setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm) {
      setSearchTerm(searchTerm);
      await searchIPAddress();
      await searchDomains();
    }
  };

  return (
    <form id="search-form" name="search-form form row">
      <div className="search-input-row form-group row">
        <input
          id="search-input"
          name="search-input"
          type="text"
          className="search-input"
          placeholder="Search for any IP address or domain"
          onChange={handleChange}
          value={searchTerm}
        />
        <button
          id="search-button"
          name="search-button"
          type="button"
          className="search-button"
          onClick={handleSearch}
        >
          <span className="search-button-icon">
            <FontAwesomeIcon icon={faCaretRight} />
          </span>
        </button>
      </div>
    </form>
  );
}
