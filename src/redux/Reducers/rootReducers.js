import authReducerSlice from "./auth/authReducerSlice";
import categoryReducer from "./category/categoryReducer";

const rootReducers = {
    auth: authReducerSlice,
    category: categoryReducer,
};

export default rootReducers;