import { useEffect, useState } from "react";
import {restuarantList} from "../constants";
import RestuarantCard from "./RestuarantCard";

function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchInput)
    );
}

const Body = () => {
    const [restaurants, setRestaurants] = useState(restuarantList);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        getRestaurants();
    }, []);

    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.1805298&lng=75.8629042&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }
    return (
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
                    const data = filterData(searchInput, restaurants);
                    setRestaurants(data);
                }}
            >
            Search
            </button>
        </div>
        <div className="restaurant-list">
            {
                restaurants.map((restaurant) => {
                    return <RestuarantCard {...restaurant.data} key={restaurant.data.id}/>;
                })
            }
        </div>        
    </>
    );
};

export default Body;