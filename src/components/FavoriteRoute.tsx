import { useContext } from "react";
import {FavoriteContext} from "../Context/favorite-context";
import { Link } from "react-router-dom";



function FavoriteList(){

const{favorites} = useContext(FavoriteContext);




return (
  <div>
    {favorites.map((favorite, i) => (
      <li key={i}>
        <Link to={`/favorites/${i}`}>{favorite.label}</Link>{" "}
      </li>
    ))}
  </div>
);
}
export default FavoriteList;