import { Favorite } from '../model/model';
import Recipe from "../components/Recipe";

interface Props {
  favorite: Favorite;
}

function FavoriteView( { favorite }: Props ) {


  return (

    <Recipe recipe={ favorite } onClose={ () => { } } />
  );
}

export default FavoriteView;
