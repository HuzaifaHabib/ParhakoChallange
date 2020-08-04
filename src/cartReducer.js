

const CartReducer = ((state, action)=>{
    switch(action.type){
        case "ADD TO CART" : {
            console.log(state)
            return [action.payload.obj, ...state]
        }
        case "REMOVE FROM CART" :{
            return state;
        }

        default:
            return state;
    }

})


export default CartReducer;