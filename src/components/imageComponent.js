import React, { useState, useContext } from 'react';
import { AppContext } from '../AppContext';



const ImgComponent = (item) => {

    const initState = {
        hovered: false,
        isFavorite: false
    }

    let [state, setstate] = useState(initState);
    let { addFavorite, addToCart } = useContext(AppContext);


    function hoverTrue() {
        setstate({ hovered: true })

        console.log(state.hovered)
    }

    function hoverfalse() {
        setstate({ hovered: false })

        console.log(state.hovered)
    }


    function toggleFavorite(item) {
        addFavorite({
            id: item.id,
            isFavorite: !item.isFavorite
        })
    }

    function addCartItem(item) {
        addToCart({
            item: item
        })
    }

    // Component for Conditional rendering of Photo buttons

    const PhotoButtons = (item) => {
        if (state.hovered === true && item.item.isFavorite === true) {
            console.log(item)
            return (
                <React.Fragment>
                    <div className="overlay"></div>
                    <div className="button">
                        <button>
                            <i className="ri-heart-fill favorite ri-3x" onClick={() => { toggleFavorite(item.item) }}></i>
                        </button>
                        <button>
                            <i className="ri-add-circle-line cart ri-3x" onClick={() => { addToCart(item.item) }} ></i>
                        </button>
                    </div>
                </React.Fragment>
            )
        }
        else if (state.hovered === false && item.item.isFavorite === true) {
            return (
                <React.Fragment>
                    <div className="overlay"></div>
                    <div className="button">
                        <button>
                            <i className="ri-heart-fill favorite ri-3x" onClick={() => { toggleFavorite(item.item) }}></i>
                        </button>
                    </div>
                </React.Fragment>
            )
        }
        else if (state.hovered === true && item.item.isFavorite === false) {
            return (
                <React.Fragment>
                    <div className="overlay"></div>
                    <div className="button">
                        <button>
                            <i className="ri-heart-line favorite ri-3x" onClick={() => { toggleFavorite(item.item) }}></i>
                        </button>
                        <button>
                            <i className="ri-add-circle-line cart ri-3x" onClick={() => { addToCart(item.item) }}></i>
                        </button>

                    </div>
                </React.Fragment>
            )
        }
        else return null;
    }

    return (
        <div className="container" onMouseEnter={() => { hoverTrue() }} onMouseLeave={() => { hoverfalse() }}>
            <img className='menuImg' alt={item.item.id} src={item.item.url} />
            <PhotoButtons item={item.item} />
        </div>

    )
}

export default ImgComponent;