import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

// category add info and api config
export const categoryAdd = createAsyncThunk(
    'category/categoryAdd',
    async ({ name, image }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const formData = new FormData()
            formData.append('name', name)
            formData.append('image', image)
            const { data } = await api.post('/category-add', formData, { withCredentials: true });
            // console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// category get info and api config
export const categoryGet = createAsyncThunk(
    'category/categoryGet',
    async ({ page, searchValue, perPage }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/category-get?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true });
            // console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const categoryReducer = createSlice({
    name: 'category',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        categories: [],
        totalCategory: 0
    },
    reducers: {
        // for message clear after action when error or success
        messageClear: (state, _) => {
            state.errorMessage = '';
            state.successMessage = '';
        }
    },

    extraReducers: {
        // for loader spinner when login state is pending, rejected, fulfill
        [categoryAdd.pending]: (state, _) => {
            state.loader = true
        },
        [categoryAdd.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [categoryAdd.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message;
            state.categories = [...state.categories, payload.category]
        },
        [categoryGet.fulfilled]: (state, { payload }) => {
            state.totalCategory = payload.totalCategory;
            state.categories = payload.categories;
        },
    }
})

export const { messageClear } = categoryReducer.actions;
export default categoryReducer.reducer;