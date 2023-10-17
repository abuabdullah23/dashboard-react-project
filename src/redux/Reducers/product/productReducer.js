import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";

// add product and api config
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

// update product and api config
export const updateProduct = createAsyncThunk(
    'product/updateProduct',
    async (productInfo, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post('/update-product', productInfo, { withCredentials: true });
            // console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// update product image and api config
export const updateProductImage = createAsyncThunk(
    'product/updateProductImage',
    async ({ productId, oldImage, newImage }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const formData = new FormData();
            formData.append('productId', productId);
            formData.append('oldImage', oldImage);
            formData.append('newImage', newImage);
            const { data } = await api.post('/update-product-image', formData, { withCredentials: true });
            console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// get products and api config
export const getProducts = createAsyncThunk(
    'products/getProducts',
    async ({ perPage, page, searchValue }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-products?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true });
            // console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// get product info and api config
export const getProduct = createAsyncThunk(
    'product/getProduct',
    async (productId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-product/${productId}`, { withCredentials: true });
            // console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

const productReducer = createSlice({
    name: 'products',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        products: [],
        product: '',
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

        [getProducts.fulfilled]: (state, { payload }) => {
            state.totalProducts = payload.totalProducts;
            state.products = payload.products;
        },

        // for single product
        [getProduct.fulfilled]: (state, { payload }) => {
            state.product = payload.product;
        },

        [updateProduct.pending]: (state, _) => {
            state.loader = true
        },
        [updateProduct.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [updateProduct.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.product = payload.product;
            state.successMessage = payload.message;
        },

        [updateProductImage.pending]: (state, _) => {
            state.loader = true
        },
        [updateProductImage.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [updateProductImage.fulfilled]: (state, { payload }) => {
            state.loader = false
            state.product = payload.product;
            state.successMessage = payload.message;
        },
    }
})

export const { messageClear } = productReducer.actions;
export default productReducer.reducer;