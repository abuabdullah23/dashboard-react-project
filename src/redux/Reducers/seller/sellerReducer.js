import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../../../api/api";


// get seller request
export const get_seller_request = createAsyncThunk(
    'seller/get_seller_request',
    async ({ page, searchValue, perPage }, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-seller-request?page=${page}&&searchValue=${searchValue}&&perPage=${perPage}`, { withCredentials: true });
            // console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// get seller by id for details
export const get_seller = createAsyncThunk(
    'seller/get_seller',
    async (sellerId, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.get(`/get-seller/${sellerId}`, { withCredentials: true });
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// update seller status
export const update_seller_status = createAsyncThunk(
    'seller/update_seller_status',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            const { data } = await api.post(`/update-seller-status`, info, { withCredentials: true });
            console.log(data);
            return fulfillWithValue(data)
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)


const sellerReducer = createSlice({
    name: 'seller',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: false,
        userInfo: '',
        sellers: [],
        totalSeller: 0,
        seller: '',
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
        [get_seller_request.fulfilled]: (state, { payload }) => {
            state.sellers = payload.sellers;
            state.totalSeller = payload.totalSeller;
        },

        [get_seller.fulfilled]: (state, { payload }) => {
            state.seller = payload.seller;
        },

        [update_seller_status.pending]: (state, _) => {
            state.loader = true
        },
        [update_seller_status.rejected]: (state, { payload }) => {
            state.loader = false
            state.errorMessage = payload.error
        },
        [update_seller_status.fulfilled]: (state, { payload }) => {

            state.seller = payload.seller;
            state.successMessage = payload.message;
        },

    }
})

export const { messageClear } = sellerReducer.actions;
export default sellerReducer.reducer;