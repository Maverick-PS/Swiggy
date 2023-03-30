<<<<<<< HEAD
import {IMG_CON_URL} from "../constants";

const RestuarantCard = ({
=======
import {IMG_CDN_URL} from "../constants";

const RestaurantCard = ({
>>>>>>> ed9798f67cde0dd332a8d405a14112699944d0a4
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
}) => {
    return (
        <div className="card">
<<<<<<< HEAD
            <img src={IMG_CON_URL + cloudinaryImageId}/>
=======
            <img src={IMG_CDN_URL + cloudinaryImageId}/>
>>>>>>> ed9798f67cde0dd332a8d405a14112699944d0a4
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>⭐{avgRating}</h4>
        </div>
    );
};

<<<<<<< HEAD
export default RestuarantCard;
=======
export default RestaurantCard;
>>>>>>> ed9798f67cde0dd332a8d405a14112699944d0a4
