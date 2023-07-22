import axios, { AxiosError, AxiosResponse } from "axios";
import { Category, Item } from "./type";

axios.defaults.baseURL = "http://localhost:8000";
axios.interceptors.response.use(
  (res) => Promise.resolve(res.data),
  (error: AxiosError) => {
    const { data, status, config } = error.response!;
    switch (status) {
      case 400:
        alert(data);
        break;

      case 401:
        alert("unauthorised");
        break;

      case 404:
        alert("not-found");
        break;

      case 500:
        alert("server-error");
        break;
    }
    return Promise.reject(error);
  }
);

const categories = {
  getCategories: () =>
    axios.get<Category[]>("/categories").then((response) => response.data),
};

const items = {
  getItems: () => axios.get<Item[]>("/items").then((response) => response.data),
  getDetail: (id: string) =>
    axios.get<Item>(`/items/${id}`).then((response) => response),
};

const api = {
  categories,
  items,
};

export default api;
