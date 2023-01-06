import "./_style.scss";
import "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { ByGenderData } from "../assets/data";

const ByGender = () => {
  return (
    <article className="wrapper">
      <h1 className="title">Winners distributed by gender and organizations</h1>
      <section className="chart-pie">
        <Pie data={ByGenderData} />
      </section>
    </article>
  );
};

export default ByGender;
