import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const $instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
})

export const setToken = (token) => {
    $instance.defaults.headers['Authorization'] = `Bearer ${token}`;
}

export const clearToken = () => {
    $instance.defaults.headers['Authorization'] = '';
}

export const registerUserThunk = createAsyncThunk(
    'auth/register',
    async (userData, thunkApi) => {
    try {
        const {data} = await $instance.post('/users/signup', userData);
        setToken(data.token);
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message); 
    }
    }
)