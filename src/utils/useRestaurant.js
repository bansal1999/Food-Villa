import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  //get data from API
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // call the API
  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }

  // retrun restaurant data
  return restaurant;
};

export default useRestaurant;
