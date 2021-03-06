import { combineReducers } from 'redux'
import modalReducer from './modal/reducer'
import walletReducer from './wallets/reducer'
import infoReducer from './info/reducer'

const reducers = combineReducers({
    modal: modalReducer,
    wallet: walletReducer,
    info: infoReducer
})

export default reducers