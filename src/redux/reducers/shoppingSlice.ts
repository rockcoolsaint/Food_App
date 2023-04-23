import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { ShoppingAction } from '../actions'
// import { FoodAvailability, FoodModel, ShoppingState } from '../models'


// const initialState = {
//     availability: {} as FoodAvailability,
//     availableFoods: {} as [FoodModel]
// }

const initialState = {
    availability: {},
    availableFoods: {}
}


// const ShoppingSlice = (state: ShoppingState = initialState, action: ShoppingAction) => {
const ShoppingSlice = createSlice({
    name: "shopping",
    initialState,
    reducers: {
        someShoppingAction: (state) => {

        }
    }
})

// switch(action.type){
//     case 'ON_AVAILABILITY':
//         return {
//             ...state,
//             availability: action.payload
//         }
//     case 'ON_FOODS_SEARCH':
//         return {
//             ...state,
//             availableFoods: action.payload
//         }


//     default:
//         return state
// }

export const {someShoppingAction} = ShoppingSlice.actions;

export default ShoppingSlice.reducer;