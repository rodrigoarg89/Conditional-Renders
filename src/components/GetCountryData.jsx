import React from "react";

const GetCountryData = ({ data, country }) => {
  switch (data) {
    case "Demography":
      return (
        <>
          <h2>Demography</h2>
          <ul>
            <li>
              <b>Population: </b>
              {country.population}
            </li>
            <li>
              <b>Area: </b>
              {country.area}
            </li>
          </ul>
        </>
      );

    case "Location":
      return (
        <>
          <h2>Location</h2>
          <ul>
            <li>
              <b>Continent: </b>
              {country.continents[0]}
            </li>
            <li>
              <b>Region: </b>
              {country.region}
            </li>
            <li>
              <b>Subregion: </b>
              {country.subregion}
            </li>
          </ul>
        </>
      );

    default:
      return (
        <>
          <h2>Capital</h2>
          <ul>
            <li>
              <b>Capital: </b>
              {country.capital[0]}
            </li>
          </ul>
        </>
      );
  }
};

export default GetCountryData;
