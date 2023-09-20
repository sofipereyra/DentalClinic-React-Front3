import React from "react";
import { useGlobalContext } from "./utils/global.context";
import user from "../img/user.png";

const Card = ({ dentist}) => {
    const { state, dispatch } = useGlobalContext();
    const isDentistInFavorites = state.favorites.some((favDentist) => favDentist.id === dentist?.id);
    
    const addFavorites = ()=>{
        if(!isDentistInFavorites){
            dispatch({ type: "ADD_FAV", payload: dentist});
        }
    };
    const removeFav = ()=>{
        if(isDentistInFavorites){
            dispatch({ type: "REMOVE_FAV", payload: dentist});
        }
    };
    
    return (
        <div className="card">
            <img id="user-logo" src={user} alt="User image" />
            <h2>{dentist.name}</h2>
            <p>User: {dentist.username}</p>
            {isDentistInFavorites ? 
                    (<button onClick={removeFav} id="removeFavBtn">
                        Remove fav
                    </button>
                ) : (
                    <button onClick={addFavorites} id="favButton">
                        Add fav
                    </button>
            )}
        </div>
    );
};
    
export default Card;
