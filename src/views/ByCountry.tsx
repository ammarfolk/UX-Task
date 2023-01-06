import "./_style.scss";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ByCountryData } from "../assets/data";

const ByCountry = () => {
  return (
    <article className="wrapper">
      <h1 className="title">Winners distributed by country</h1>
      <section className="chart-bar">
        <Bar data={ByCountryData} />
      </section>
    </article>
  );
};

export default ByCountry;
