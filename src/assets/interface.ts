type countryType = {
  key: string;
  value: number | any;
};

type genderType = {
  [key: string]: number;
};

type categoryType = {
  [key: string]: number;
};

type toptenType = {
  name: string;
  awards: number;
  id: string;
};

export type { countryType, genderType, categoryType, toptenType };
