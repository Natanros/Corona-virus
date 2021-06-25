import React, { useState, useEffect } from "react";
import "../Routes";
import api from "../services/api.js";
import "./Home_Summary.css";

export default function Home_Summary() {
  const [diarycases, setDiarycases] = useState([]);

  useEffect(() => {
    async function Diary() {
      await api
        .get("all")
        .then((res) => setDiarycases(res.data))
        .catch((error) => console.log(error));
    }
    Diary();
  }, []);

  return (
    <div id="SummaryCases">
      {diarycases ? (
        <div id="centerP">
          <p>Novos Confirmados: {diarycases.todayCases}</p>
          <p>Total Confirmado: {diarycases.cases}</p>
          <p>
            Novas Mortes: <br />
            {diarycases.todayDeaths}
          </p>
          <p>Total de Mortes: {diarycases.deaths}</p>
          <p>
            Recuperados:
            <br />
            {diarycases.recovered}
          </p>
          <p>Total Recuperado: {diarycases.todayRecovered}</p>
        </div>
      ) : null}
    </div>
  );
}
