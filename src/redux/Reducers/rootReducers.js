import authReducerSlice from "./auth/authReducerSlice";
import categoryReducer from "./category/categoryReducer";
import productReducer from "./product/productReducer";
import sellerReducer from "./seller/sellerReducer";

const rootReducers = {
    auth: authReducerSlice,
    category: categoryReducer,
    products: productReducer,
    seller: sellerReducer,
};

export default rootReducers;