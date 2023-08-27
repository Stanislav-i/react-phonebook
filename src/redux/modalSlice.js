import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
    editContactData: null,
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setModalStatus: (state, action) => {
           state.isModalOpen = action.payload
        },
        setEditContactData: (state, action) => {
            state.editContactData = action.payload
        },
    }
})

export const {setModalStatus, setEditContactData} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export const selectModalStatus = state => state.modal.isModalOpen; 
export const selectEditContactData = state => state.modal.editContactData;
