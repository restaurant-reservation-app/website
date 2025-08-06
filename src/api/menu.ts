import axios from "axios";

export interface Dish {
  name: string;
  description: string;
  category: string;
  price: number;
  photoBase64: string;
}

interface SearchParams {
  category?: string;
  dishName?: string;
}

interface SearchParamsRandom {
  amount?: number;
}

export const fetchDish = (params: SearchParams) => {
  return axios.get<Dish[]>("http://localhost:8080/menu", {
    params,
  });
};

export const fetchDishRandom = (params: SearchParamsRandom) => {
  return axios.get<Dish[]>("http://localhost:8080/menu/random", {
    params,
  });
};

export const fetchCategories = () => {
  return axios.get<string[]>("http://localhost:8080/menu/category");
};
