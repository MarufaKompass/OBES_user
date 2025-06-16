import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../ProjectFeatures/common/headerSlice';
import modalSlice from '../ProjectFeatures/common/modalSlice';
import rightDrawerSlice from '../ProjectFeatures/common/rightDrawerSlice';
import leadsSlice from '../ProjectFeatures/leads/leadSlice';
import authSliceReducer from "../features/auth/authSlice";
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
reducer:{
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSliceReducer,
  header : headerSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice,
  lead : leadsSlice
},
 devTools: process.env.NODE_ENV  !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
})

// export default configureStore({
//     reducer: combinedReducer
// })