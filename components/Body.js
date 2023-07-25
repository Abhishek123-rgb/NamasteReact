import { useEffect, useState } from "react";
import { Restrocard } from "./Restrocard";
import { restaurantList } from "./utils/constant";
import axios from "axios";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  const [searchlist, setSearchlist] = useState("");
  const [filterlist, setFilterList] = useState(restaurantList);

  const ratedRestaurant = () => {
    const filteredList = listOfRestaurant.filter(
      (item) => item?.data?.avgRating > 3.9
    );
    console.log("ratedRestaurant",filteredList);
    setFilterList(filteredList);
  };

  const handleSerach = () => {
    const filterdata = listOfRestaurant.filter((item) => item?.data?.name.toLowerCase().includes(searchlist));
    setFilterList(filterdata)
  }

  return (
    <div>
      <div className="header1">
        <div className="search">
          <input type="text" value={searchlist} onChange={(e) => setSearchlist(e.target.value)} />
          <button style={{marginLeft: "5px"}} onClick={handleSerach}>Search</button>
        </div>
        <button className="toprated" onClick={ratedRestaurant}>Top Rated Restaurant</button>
      </div>
      <div className="res-container">
        {filterlist &&
          filterlist.map((item) => {
            return <Restrocard data={item} />;
          })}
      </div>
    </div>
  );
};

export default Body;
