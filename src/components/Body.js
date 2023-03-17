import { useState } from "react";
import {restuarantList} from "../constants";
import RestuarantCard from "./RestuarantCard";

function filterData(searchInput, restaurants) {
    return restaurants.filter((restaurant) => 
    restaurant.data.name.includes(searchInput)
    );
}

const Body = () => {
    const [searchInput, setSearchInput] = useState();
    const [restaurants, setRestaurants] = useState(restuarantList);
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