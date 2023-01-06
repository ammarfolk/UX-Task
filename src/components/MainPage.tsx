import "./MainPage.scss";
import anime from "animejs";
import React, { useState, useEffect } from "react";
import Info from "../views/Info";
import ByCategory from "../views/ByCategory";
import ByGender from "../views/ByGender";
import ByCountry from "../views/ByCountry";
import ByTopten from "../views/ByTopten";

/******* Animations *******/
let slide = {
  targets: ".wrapper",
  duraction: 1000,
  translateY: ["-5%", 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
};

let dance = {
  targets: ".wrapper",
  duraction: 1000,
  rotate: [-10, 8, -6, 4 - 2, 0],
  opacity: [0, 1],
  easing: "easeInOutQuad",
};

const MainPage = () => {
  const [selectedChart, setSelectedChart] = useState<String>("");
  const [animationProp, setAnimationProp] = useState<anime.AnimeParams>(slide);

  useEffect(() => {
    setSelectedChart("info");
    let items: NodeListOf<Element> = document.querySelectorAll(".staging > *");
    const selectedClass = "selected";

    for (let i = 0; i < items.length; i++) {
      const element: Element = items[i];
      element.addEventListener("click", () => {
        for (let j = 0; j < items.length; j++) {
          items[j].classList.remove(selectedClass);
        }
        items[i].classList.add(selectedClass);
        let oldSelectedChart = selectedChart;
        setSelectedChart(items[i].id);
        if (oldSelectedChart != selectedChart) {
        }
      });
    }
  }, []);
  useEffect(() => {
    anime(animationProp);
  }, [selectedChart]);

  const Charted: React.FunctionComponent = () => {
    if (selectedChart == "info") {
      return <Info />;
    } else if (selectedChart == "category") {
      return <ByCategory />;
    } else if (selectedChart == "gender") {
      return <ByGender />;
    } else if (selectedChart == "country") {
      return <ByCountry />;
    } else if (selectedChart == "top") {
      return <ByTopten />;
    }
    return <div />;
  };

  return (
    <div className="flex">
      <section className="side-bar">
        <section className="staging">
          <div id="info" className="selected">
            Info
          </div>
          <div id="category"> Winners by category </div>
          <div id="gender"> Winners by gender </div>
          <div id="country">Winners by country</div>
          <div id="top"> Top 10 winners </div>
        </section>

        <section className="anime-opts">
          <h5 className="opts-title">Animations</h5>
          <input
            onChange={() => {
              setAnimationProp(slide);
            }}
            type="radio"
            name="opts"
            defaultChecked
          />
          Slide
          <input
            onChange={() => {
              setAnimationProp(dance);
            }}
            type="radio"
            name="opts"
          />
          Dance
        </section>
      </section>

      <section className="graph">
        <Charted />
      </section>
    </div>
  );
};
export default MainPage;

/* category
gender
countries
top 10. */
