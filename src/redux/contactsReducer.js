import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { $instance } from './operations';

export const requestContactsThunk = createAsyncThunk(
  'contacts/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await $instance.get('/contacts');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (contactData, thunkApi) => {
    try {
      const { data } = await $instance.post('/contacts', contactData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactThunk',
  async (id, thunkApi) => {
    try {
      const { data } = await $instance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const editContactThunk = createAsyncThunk(
  'contacts/editContactThunk',
  async ({id, newContactData}, thunkApi) => {
    try {
      const {data} = await $instance.patch(`/contacts/${id}`, newContactData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
)

const initialState = {
  contacts: null,
  isLoading: null,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      // ---GET---
      .addCase(requestContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      // ======ADD CONTACT
      // .addCase(addContactThunk.pending, (state) => {

      // })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      // ======DELETE CONTACT
      // .addCase(addContactThunk.pending, (state) => {

      // })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
      // ======EDIT CONTACT
      .addCase(editContactThunk.fulfilled, (state, action) => {
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1, action.payload);
      })
      .addCase(editContactThunk.rejected, (state, action) => {
        state.error = action.payload;
      })
});

export const selectUserContacts = state => state.contacts.contacts;
export const selectContactsIsLoading = state => state.contacts.isLoading;
export const selectContactsError = state => state.contacts.error;

export const contactsReducer = contactsSlice.reducer;
