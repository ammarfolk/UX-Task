import "./_style.scss";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { ByCategoryData } from "../assets/data";

const ByCategory = () => {
  return (
    <article className="wrapper">
      <h1 className="title">Total winnings distributed by category</h1>
      <section className="chart-pie">
        <Pie data={ByCategoryData} />
      </section>
    </article>
  );
};

export default ByCategory;
