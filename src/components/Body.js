import { useEffect, useState } from "react";  /* This is named export */
import {restuarantList} from "../constants";
import RestuarantCard from "./RestuarantCard";
import Shimmer from "./Shimmer"; /* This is default export */
import { swiggy_api_URL } from "../constants";


// Filter the restaurant data according input type
function filterData(searchInput, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    return filterData;
}
// Body Component for body section: It contain all restaurant cards
const Body = () => {
    // useState: To create a state variable, searchText, allRestaurants and filteredRestaurants is local state variable
    const [allRestuarants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    
    // use useEffect for one time call getRestaurants using empty dependency array
    useEffect(() => {
        getRestaurants();
    }, []);

    // async function getRestaurant to fetch Swiggy API data
    async function getRestaurants(){
        const data = await fetch(swiggy_api_URL);
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    // if allRestaurants is empty don't render restaurants cards
    if(!allRestuarants) return null;

    if(filteredRestaurants?. length==0) 
        return <h1>No Restaurant match your filter!! </h1>;


    return filteredRestaurants?.length == 0 ? ( 
    <Shimmer/>
    ) : (
    <>
        <div>
            <input
                type="text"
                className="search-container"
                placeholder="Search"
                value={searchInput}
                onChange = {(e) => {
                    setSearchInput(e.target.value);
                }}
            />
            <button 
                className="search-btn" 
                onClick={() => {
                    const data = filterData(searchInput, allRestuarants);
                    setFilteredRestaurants(data);
                }}
            >
            Search
            </button>
        </div>
        <div className="restaurant-list">
            {filteredRestaurants.map((restaurant) => {
                return (
                    <RestuarantCard {...restaurant.data} key={restaurant.data.id}/>
                );
            })}
        </div>        
    </>
    );
};

export default Body;