import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

// category add info and api config
export const addProduct = createAsyncThunk(
    'product/addProduct',
    async (productInfo, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/add-product', productInfo, { withCredentials: true });
            // console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const productReducer = createSlice({
    name: 'product',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        products: [],
        totalProducts: 0
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
        [addProduct.pending]: (state, _) => {
            state.loader = true
        },
        [addProduct.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [addProduct.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.successMessage = payload.message;
        },

    }
})

export const { messageClear } = productReducer.actions;
export default productReducer.reducer;