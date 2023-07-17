import { useState } from "react";
import {Restrocard} from "./Restrocard";
import { restaurantList } from "./utils/constant";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);

  const ratedRestaurant = () => {
    const filteredList =  listOfRestaurant.filter((item) => item?.data?.avgRating > 4);
    setListOfRestaurant(filteredList)
  }

  return (
    <div>
      <div className="search"> Search </div>
      <button onClick={ratedRestaurant}>Top Rated Restaurant</button>
      <div className="res-container">
        {listOfRestaurant &&
          listOfRestaurant.map((item) => {
            return <Restrocard data={item} />;
          })}
      </div>
    </div>
  );
};

export default Body;