import authReducerSlice from "./auth/authReducerSlice";
import categoryReducer from "./category/categoryReducer";
import productReducer from "./product/productReducer";

const rootReducers = {
    auth: authReducerSlice,
    category: categoryReducer,
    product: productReducer,
};

export default rootReducers;