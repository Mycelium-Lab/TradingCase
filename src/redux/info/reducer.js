import {
    SET_USER,
    SET_GLOBAL
} from '../types'

const initialState = {
    user: {},
    global: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USER: {
            return {
                ...state,
                user: action.payload.user
            }
        }
        case SET_GLOBAL: {
            return {
                ...state,
                global: action.payload.global
            }
        }
        default:
            return {
                ...state,
            }
    }
}