import "./_style.scss";
import "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { ByToptenData } from "../assets/data";

const ByTopten = () => {
  return (
    <article className="wrapper">
      <h1 className="title">Topten Winners</h1>
      <section className="chart-bar">
        <Bar data={ByToptenData} />
      </section>
    </article>
  );
};

export default ByTopten;
