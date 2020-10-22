import React from 'react';
import ResultsBar from './ResultsBar';
import SearchForm from './SearchForm';

export default function Header(props) {
  const {
    searchTerm,
    setSearchTerm,
    searchIPAddress,
    searchDomains,
    searchResults,
  } = props;

  return (
    <header id="header" className="header container-fluid">
      <div id="header-content" className="header-content container">
        <h1 className="app-title row">IP Address Tracker</h1>
        <SearchForm
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          searchIPAddress={searchIPAddress}
          searchDomains={searchDomains}
        />
        <ResultsBar searchResults={searchResults} />
      </div>
    </header>
  );
}
