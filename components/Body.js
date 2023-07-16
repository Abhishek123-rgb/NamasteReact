import {Restrocard} from "./Restrocard";
import { restaurantList } from "./utils/constant";
const Body = () => {
  return (
    <div>
      <div className="search"> Search </div>
      <div className="res-container">
        {restaurantList &&
          restaurantList.map((item) => {
            return <Restrocard data={item} />;
          })}
      </div>
    </div>
  );
};

export default Body;