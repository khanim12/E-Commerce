import { configureStore } from '@reduxjs/toolkit'
import slideReducer from '../features/slices/sliderSlice'
import productReducer from '../features/slices/productsSlice'
import cartReducer from '../features/slices/cartSlice'
import authReducer from '../features/slices/authSlice'
export const store = configureStore({
  reducer: {
    slider: slideReducer,
    products: productReducer,
    cart: cartReducer,
    user:authReducer,
  },
})