import { createContext, useReducer, useContext } from "react";

export const initialState = {
    theme: "light",
    data: [],
    favorites: []
}

export const ContextGlobal = createContext(undefined);

const reducer = ( state, action ) => {
    switch ( action.type ){
        case "TOGGLE_THEME":
            return { ...state, theme: state.theme === "light" ? "dark" : "light" };
        case "SET_DATA":
            return { ...state, data: action.payload };
        case "ADD_FAV":
            return { ...state, favorites: [...state.favorites, action.payload] };
        case "REMOVE_FAV":
            const newFavorites = state.favorites.filter(item => item.id !== action.payload.id);
            return { ...state, favorites: newFavorites };
        default:
            return state;
    }
}

export const ContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContextGlobal.Provider value={{ state, dispatch }}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(ContextGlobal);
}
