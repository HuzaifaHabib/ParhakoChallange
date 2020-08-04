import React, { createContext, useEffect, useReducer } from "react";
import FavReducer from './Appreducer'
import CartReducer from './cartReducer'


export const AppContext = createContext([]);


export const AppContextProvider = ({ children }) => {

    // const [photos, setPhotos] = useState();
    let initstate = []

    let [state, dispatch] = useReducer(FavReducer,initstate)

    let [cartItem , setCartItem] = useReducer(CartReducer,[])

    function addToCart (item) {
        setCartItem({
            type: "ADD TO CART",
            payload: {
                obj : item
            }
        })
    }

    function addFavorite(item) {
        dispatch({
            type: "ADD FAVORITE",
            payload: {
                isFavorite: item.isFavorite,
                id: item.id
            }
        })
    }



    useEffect(()=> {
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
        .then(res => res.json())
        .then((results)=> {
            dispatch({
                type: 'ADD PHOTOS',
                payload: results
            });
        })
    },[])

    return (
        <AppContext.Provider value={{
                photos: state,
                cartItem: cartItem,
                addFavorite,
                addToCart
                }}>
            {children}

        </AppContext.Provider>
    )
}