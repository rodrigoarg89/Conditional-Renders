import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import GetCountryData from "./GetCountryData";

const Country = () => {
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState("Demography"); // 1 = "Demography", 2 = "Location", 3 = "Capital"

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/alpha/de")
      .then((res) => {
        setCountry(res.data[0]);
      })
      .finally(() => setIsLoading(false));
  }, []);

  console.log(country);

  return (
    <div>
      {isLoading ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>{country.name.official}</h1>
          <img src={country.flags.svg} style={{ width: "400px" }} alt="" />
          <br />
          <button onClick={() => setData("Demography")}>Demography</button>
          <button onClick={() => setData("Location")}>Location</button>
          <button onClick={() => setData("Capital")}>Capital</button>
          <GetCountryData data={data} country={country} />
        </>
      )}
    </div>
  );
};

export default Country;
