import React from "react";
import { useGlobalContext } from "./utils/global.context";

const Card = ({ dentist}) => {
    const { state, dispatch } = useGlobalContext();
    const isDentistInFavorites = state.favorites.some((favDentist) => favDentist.id === dentist?.id);
    
    const addFavorites = ()=>{
        if(!isDentistInFavorites){
            dispatch({ type: "ADD_FAV", payload: dentist});
        }
    };
    
    return (
        <div className="card">
            <img src="./images/doctor.png" alt="" />
            <h2>{dentist.name}</h2>
            <p>User: {dentist.username}</p>
            {isDentistInFavorites ? (
                <p className="favStatus">It's already in favorites</p>
                ) : (
                    <button onClick={addFavorites} className="favButton">
                    Add fav
                    </button>
            )}
        </div>
    );
};
    
export default Card;
