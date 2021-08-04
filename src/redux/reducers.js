import { combineReducers } from 'redux'
import modalReducer from './modal/reducer'

const reducers = combineReducers({
    modal: modalReducer,
})

export default reducers