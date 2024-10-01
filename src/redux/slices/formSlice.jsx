import { createSlice } from "@reduxjs/toolkit"


const initialState={
    item:{
        id:0,
        name:"Name",
        description:"Description",
        price:"0",
        availability:true
    },
    condition:true
}

const formSlice=createSlice({
    name:"form",
    initialState,
    reducers:{
        changeForm:(state,action)=>{
            // state=action.payload;
            state.item=action.payload.item;
            state.condition=action.payload.condition;
            // console.log("Form "+state);
        },
        
        changeCondition:(state,action)=>{
            state.condition=action.payload;
        },
        changeName:(state,action)=>{
            state.item.name=action.payload;
        },
        changeDescription:(state,action)=>{
            state.item.description=action.payload;
        },
        changePrice:(state,action)=>{
            state.item.price=action.payload;
        },
        changeAvailability:(state,action)=>{
            state.item.availability=action.payload;
        }

    }
});


export const {changeForm}=formSlice.actions;
export const {changeName,changeDescription,changePrice,changeAvailability}=formSlice.actions;
export default formSlice.reducer;