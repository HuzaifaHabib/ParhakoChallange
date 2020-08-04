

const FavReducer = ((state, action)=>{
    switch(action.type) {
        case "ADD PHOTOS" :{
            const newstate = action.payload
            console.log(newstate)
            return newstate;
        }
        case "ADD FAVORITE" :{
            console.log(state)
            let index = state.findIndex(item => item.id === action.payload.id)
            const newdata = state
            newdata[index].isFavorite = action.payload.isFavorite
            return newdata
        }
       
        default :
            return state;

    }
})

export default FavReducer;