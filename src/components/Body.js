//Most important hooks to learn everything about
import { useEffect, useState } from "react";
import { swiggyApiURL } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing data to RestaurantCard component as props with unique key as index
const Body = () => {
  // local variable in javascript
  // const searchTxt = "KFC";

  // searchText is a local state variable in REACT
  // returns = [variable name, function to update the variable]
  const [searchText, setSearchText] = useState(""); // to create variables
  // const [searchClick, setSearchClicked] = useState("False");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // consists of a callback function and dependency array
  //use useEffect for one time call getRestaurants using empty dependency array
  useEffect(() => {
    //api call
    getRestaurants();
  }, []);

  // async function getRestaurant to fetch Swiggy API data
  async function getRestaurants() {
    //handle the errr using try... catch blocks
    try {
      const data = await fetch(swiggyApiURL);
      const json = await data.json();
      console.log(json);
      // updated state variables restaurants with swiggy API Data
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your connection</h1>;
  }

  //use searchData function and set condition if data empty sjpw error message
  const serachData = (searchText, restaurants) => {
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No Matches found for your search");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  };

  // if allRestraunats is empty we do not need to render restraunts cards
  if (!allRestaurants) return null;

  return (
    <>
      <div className="p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="search-text"
          placeholder="Search"
          value={searchText}
          //update the state varibale searchText when we typing input box
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-purple-400 text-white rounded-lg"
          onClick={() => {
            // user click on button searchData function is called
            serachData(searchText, allRestaurants);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* if restaurants data is not fetched then display Shimmer UI after the fetched data display restaurants cards */}
      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <>
          <div className="flex flex-wrap">
            {filteredRestaurants.map((restaurant) => {
              return (
                <Link
                  to={"/restaurant/" + restaurant.data.id}
                  key={restaurant.data.id}
                >
                  <RestaurantCard {...restaurant.data} />
                </Link>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Body;
