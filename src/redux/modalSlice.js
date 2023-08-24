import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalStatus: (state, action) => {
            return (state = action.payload)
        }
    }
})

export const {setModalStatus} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export const selectModalStatus = state => state.modal; 