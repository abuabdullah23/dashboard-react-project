import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../../api/api";

const initialState = {
    successMessage: '',
    errorMessage: '',
    loader: false,
    userInfo: ''
}

// admin login info and api config
export const admin_login = createAsyncThunk(
    'auth/admin_login',
    async (info) => {
        console.log(info);
        try {
            const { data } = await api.post('/admin-login', info, { withCredentials: true })
            console.log(data);
        } catch (error) {
            console.log(error.response.data);
        }
    }
)

const authReducerSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: {

    }
})

export default authReducerSlice.reducer;