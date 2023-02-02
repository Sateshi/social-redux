import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 1, title: "Ceci est un post", content: "Je suis le texte du post"},
    {id: 2,title: "Ad eternum astra", content:"One-winged angel"}
]

export const postSlice = createSlice({
    name:"post",
    initialState,
    reducers : {
        addPost: (state,action) => {
            state.push(action.payload)
        }
    },
})

export const {addPost} = postSlice.actions;
export default postSlice.reducer