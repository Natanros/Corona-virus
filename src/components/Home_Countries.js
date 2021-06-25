import React, { useState, useEffect } from "react";
import api from "../services/api.js";
import "./Home_Countries.css";
import "../Routes";
import { Link } from "react-router-dom";
import SummaryCase from "./Home_Summary";

export default function Home() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    async function Country() {
      await api
        .get("countries")
        .then((res) => setCases(res.data))
        .catch((error) => console.log(error));
    }
    Country();
  }, []);

  return (
    <div id="spaces">
      <SummaryCase />
      <main>
        <div id="ShowCountries">
          {cases.map((countries) => (
            <div key={countries.countryInfo.id}>
              <Link
                to={{
                  pathname: `/CountryCases/${countries.country}`,
                }}
              >
                <p id="Countries">{countries.country}</p>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
