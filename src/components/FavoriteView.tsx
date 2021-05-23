import { Favorite } from '../model/model';
import Recipe from "./Recipe"

interface Props {
  favorite: Favorite;
}

function FavoriteView({ favorite }: Props) {


  return (

    <Recipe recipe={favorite}/>
  );
}

export default FavoriteView;
