import { useEffect, useState } from "react";
import { Restrocard } from "./Restrocard";
import { restaurantList } from "./utils/constant";
import axios from "axios";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  const [searchlist, setSearchlist] = useState("");
  const [filterlist, setFilterList] = useState(restaurantList);

  const ratedRestaurant = () => {
    const filteredList = listOfRestaurant.filter(
      (item) => item?.data?.avgRating > 3.9
    );
    setFilterList(filteredList);
  };

  const handleSerach = () => {
    const filterdata = listOfRestaurant.filter((item) => item?.data?.name.toLowerCase().includes(searchlist));
    setFilterList(filterdata)
  }

  const onlinestatus = useOnlineStatus();

  if(onlinestatus === false){
    return <h1>Please check your internet connection looks like you are offline</h1>
  }

  return (
    <div>
      <div className="flex m-3">
        <div className="">
          <input className="border-solid border-2 border-indigo-600" value={searchlist} onChange={(e) => setSearchlist(e.target.value)} />
          <button className="bg-slate-600 p-2 ml-2 rounded-xl text-white" onClick={handleSerach}>Search</button>
        </div>
        <div>
        <button className="ml-4  bg-green-400 p-2 rounded-xl" onClick={ratedRestaurant}>Top Rated Restaurant</button>
        </div>
      </div>
      <div className="flex justify-around flex-wrap mt-5">
        {filterlist &&
          filterlist.map((item, index) => {
            return <Restrocard key={index} data={item} />;
          })}
      </div>
    </div>
  );
};

export default Body;
