import { createSlice } from "@reduxjs/toolkit"

const initialState={
    items:[]
}

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.items.push(action.payload);
        },
        deleteProduct:(state,action)=>{
            state.items=state.items.filter(item=>item.id!==action.payload);
        },
        updateProduct:(state,action)=>{
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload; // Исправлено
            }
        },
        changeAvailability2:(state,action)=>{
            // console.log("CHECK SLICE "+action.payload);
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index].availability = action.payload.checked; // Исправлено
            }
        }
    }
});


export const {addProduct,deleteProduct,updateProduct,changeAvailability2}=productSlice.actions;
export default productSlice.reducer;