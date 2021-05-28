import { Redirect, useParams } from "react-router";

import { FavoriteContext } from "../Context/favorite-context";
import FavoriteView from "../components/FavoriteView";
import { Link } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { useContext } from "react";

interface RouteParams {
  num: string;
}

interface Props {
  onClose: () => void;
}

function FavoredRoute( { onClose }: Props ) {
  const favoriteIndex = parseInt( useParams<RouteParams>().num );
  const { favorites } = useContext( FavoriteContext );
  const favorite = favorites[ favoriteIndex ];
  const prevRecipeIndex = favoriteIndex - 1;
  const nextRecipeIndex = favoriteIndex + 1;
  if ( !favorite ) {
    return <Redirect to="/favorites" />;
  }
  return (
    <div>
      <Modal.Body>
        <div className="modal-header" id="modal-header">
          <button className="favorite" type="submit"> Add to Favorites </button>
          <button type="button" className="close" data-dismiss="modal" onClick={ onClose }> × </button><br /><br /><br />
          <FavoriteView favorite={ favorite } />
          { prevRecipeIndex >= 0 && (
            <Link to={ `/favorites/${ prevRecipeIndex }` }>Previous Recipe</Link>
          ) }

          { nextRecipeIndex < favorites.length && (
            <Link to={ `/favorites/${ nextRecipeIndex }` }>Next Recipe</Link>
          ) }

        </div>
      </Modal.Body>
    </div>
  );
};

export default FavoredRoute;