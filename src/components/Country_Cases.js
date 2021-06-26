import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./Country_Cases.css";

export default function Countries_Cases(props) {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    async function Country() {
      await api
        .get(`countries/${props.match.params.name}`)
        .then((res) => setCases(res.data))
        .catch((error) => console.log(error));
    }
    Country();
  });

  return (
    <div>
      {cases ? (
        <div id="cases">
          <div id="daily-informations">
            <p>Confirmados hoje: {cases.todayCases}</p> 
            <p>Mortos hoje: {cases.todayDeaths}</p>
            <p>Recuperados Hoje: {cases.todayRecovered}</p>
          </div>
          <div id="country-data">
            <h1 id="titleCase"> {props.match.params.name} </h1>
            <div id="cases-align">
              <p>Confirmados: {cases.cases}</p>
              <p>Recuperados: {cases.recovered}</p>
              <p>Mortos: {cases.deaths}</p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h1 id="errCases">Não foi encontrado dados do país selecionado</h1>
        </div>
      )}
    </div>
  );
}
