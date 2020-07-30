import React, { createContext, useState, useEffect } from "react";

const InitialState = [];





export const CartContext = createContext(InitialState);


export const AppContextProvider = ({ children }) => {

    const [photos, setPhotos] = useState([])



    useEffect(() => {
        const fetchApi = async () => {
            const data = await fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            console.log(data.body);
            // setstatData(initStat);
        };
        fetchApi();
    }, []);

    return (
        <CartContext.Provider value={photos}>
            {children}

        </CartContext.Provider>
    )
}