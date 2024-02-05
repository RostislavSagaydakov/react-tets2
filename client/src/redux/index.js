import {configureStore} from "@reduxjs/toolkit";
import categories from "./categories/categories";

export const store = configureStore({
    reducer: {
        categories: categories
    }
})