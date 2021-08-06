import {
    SET_ADDRESS,
    SET_CHAINID,
    SET_PROVIDER
} from '../types'

const initialState = {
    chainId: '',
    address: '',
    provider: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PROVIDER: {
            return {
                ...state,
                provider: action.payload.provider
            }
        }
        case SET_CHAINID:
            return {
                ...state,
                chainId: action.payload.chainId
            }
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload.address
            }
        default:
            return {
                ...state,
            }
    }
}