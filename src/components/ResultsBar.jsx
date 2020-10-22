import moment from 'moment';
import React from 'react';

export default function ResultsBar(props) {
  const { searchResults } = props;

  return (
    <div className="results-bar-content container row">
      <div className="results-bar-item ip-address">
        <p className="results-bar-title row">IP Address</p>
        <h5 className="results-bar-results row">{searchResults.ip}</h5>
      </div>
      <div className="results-bar-item ip-location">
        <p className="results-bar-title row">Location</p>
        <h5 className="results-bar-results row">
          {searchResults.location &&
            `${searchResults.location.city} ${searchResults.location.postalCode}, ${searchResults.location.region}, ${searchResults.location.country}`}
        </h5>
      </div>
      <div className="results-bar-item ip-timezone">
        <p className="results-bar-title row">Time</p>
        <h5 className="results-bar-results row">{`${moment(
          searchResults.timezome,
        ).format('hh:mm:ss')}`}</h5>
      </div>
      <div className="results-bar-item ip-isp">
        <p className="results-bar-title row">ISP</p>
        <h5 className="results-bar-results row">{searchResults.isp}</h5>
      </div>
    </div>
  );
}
