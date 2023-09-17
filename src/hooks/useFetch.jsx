import { useReducer, useEffect } from "react";

function fetchReducer(state, action){
    switch (action.type) {
        case "FETCH_INIT":
            return {...state, loading: true, error:null};    
        case "FETCH_SUCCESS":
            return {...state, loading: false, data: action.payload};
        case "FETCH_FAILURE":
            return {...state, loading: false, error: action.payload};
    }
}

function useFetch(url) {
    const initialState = {
        data: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(fetchReducer, initialState);

    useEffect(()=>{
        fetch(url)
            .then((res)=>{
                if(!res.ok) throw new Error("Error al traer los datos");
                return res.json();
            })
            .then((result)=>{
                dispatch({type:"FETCH_SUCCESS", payload: result});
            })
            .catch((err)=>{
                dispatch({type:"FETCH_FAILURE", payload: err})
            })
    },[url])
    return state;
}

export default useFetch;