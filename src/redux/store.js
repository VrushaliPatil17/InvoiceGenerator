import { invoiceReducer } from "./reducers/invoiceReducer";
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage/session';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
}
  
const persistedReducer = persistReducer(persistConfig, invoiceReducer)
  
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
  
export const persistor = persistStore(store)