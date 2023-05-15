import { combineReducers } from 'redux'
import { userReducer } from './user/user.reducer'
import { categoriesReducers } from './categories/categories.reducer'
import { cartReducer } from './cart/cart.reducer'


export const rootReducer = combineReducers({
    user: userReducer,
    category: categoriesReducers,
    cart : cartReducer
})