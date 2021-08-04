import { combineReducers } from 'redux'
import modalReducer from './modal/reducer'
import walletReducer from './wallets/reducer'

const reducers = combineReducers({
    modal: modalReducer,
    wallet: walletReducer
})

export default reducers