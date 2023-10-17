import authReducerSlice from "./auth/authReducerSlice";
import categoryReducer from "./category/categoryReducer";
import productReducer from "./product/productReducer";

const rootReducers = {
    auth: authReducerSlice,
    category: categoryReducer,
    products: productReducer,
};

export default rootReducers;