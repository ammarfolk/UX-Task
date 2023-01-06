import laureates from "./laureates.json";
import awards from "./award.json";
import colors from "./chartColors";
import { countryType, genderType, categoryType, toptenType } from "./interface";

/******* CATEGORY *******/
function category() {
  let categoryCount: categoryType = {};

  const categoryData: string[] = awards.map((object) => object.category.en);

  for (const categoryTypeName of categoryData) {
    categoryCount[categoryTypeName] = categoryCount[categoryTypeName]
      ? categoryCount[categoryTypeName] + 1
      : 1;
  }
  return categoryCount;
}

const categoryStats = category();
const ByCategoryData = {
  labels: Object.keys(categoryStats),
  datasets: [
    {
      label: "Winners by category",
      data: Object.values(categoryStats),
      backgroundColor: colors,
      hoverOffset: 0,
    },
  ],
};

/******* BY GENDER *******/
function gender() {
  let genderCount: genderType = {};

  const genderData: string[] = laureates.map((object) =>
    object.gender ? object.gender : "organization"
  );

  for (const genderTypeName of genderData) {
    genderCount[genderTypeName] = genderCount[genderTypeName]
      ? genderCount[genderTypeName] + 1
      : 1;
  }
  return genderCount;
}

const genderStats = gender();
const ByGenderData = {
  labels: Object.keys(genderStats),
  datasets: [
    {
      label: "Winners",
      data: Object.values(genderStats),
      backgroundColor: colors,
      hoverOffset: 0,
    },
  ],
};

/******* BY COUNTRY *******/
function country() {
  let countries: string[] = laureates.map((winner) => {
    let country =
      winner.birth?.place.country.en ??
      winner.founded?.place?.country?.en ??
      "Unknown";
    return country;
  });

  const countryCount: any = {};

  for (const country of countries) {
    countryCount[country] = countryCount[country]
      ? countryCount[country] + 1
      : 1;
  }

  let countryData: countryType[] = [];
  for (const [key, value] of Object.entries(countryCount)) {
    countryData.push({ key: key, value: value });
  }

  countryData.sort((country1, country2) => {
    if (country1.value > country2.value) {
      return -1;
    }
    if (country1.value < country2.value) {
      return 1;
    }
    return 0;
  });
  return countryData.splice(0, 10);
}
console.log(country());

const ByCountryData = {
  labels: country().map((data) => data.key),
  datasets: [
    {
      label: "Winners",
      data: country().map((data) => data.value),
      backgroundColor: colors,
      hoverOffset: 0,
    },
  ],
};

/******* TOPTEN *******/
function topten() {
  let topten: toptenType[] = laureates.map((data) => {
    return {
      name: data.fullName?.en ?? data.orgName?.en ?? "",
      id: data.id,
      awards: data.nobelPrizes.length,
    };
  });

  /*   topten = topten.filter ((winner)=>{return winner.awards>1}) */

  let filteredTopten: toptenType[] = topten.sort((winner1, winner2) => {
    if (winner1.awards > winner2.awards) {
      return -1;
    }
    if (winner1.awards < winner2.awards) {
      return 1;
    }
    return 0;
  });

  return filteredTopten.slice(0, 10);
}

const ByToptenData = {
  labels: topten().map((data) => data.name),
  datasets: [
    {
      label: "Topten",
      data: topten().map((data) => data.awards),

      backgroundColor: colors,
      hoverOffset: 0,
    },
  ],
};

export { ByCategoryData, ByGenderData, ByCountryData, ByToptenData };
