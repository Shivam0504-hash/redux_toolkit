import { configureStore } from "@reduxjs/toolkit";
import MyProductReducer from './myproductslice'
import MyCartReducer from './mycartslice'

export const MyStore=configureStore(
    {
        reducer:
        {
            product:MyProductReducer,
            cart:MyCartReducer,
        },
    }
);