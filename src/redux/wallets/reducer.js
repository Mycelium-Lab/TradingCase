import {
    SET_ADDRESS,
    SET_CHAINID,
} from '../types'

const initialState = {
    chainId: '',
    address: '0x0000000000000000000000000000000000000000'
}

export default function (state = initialState, action) {
    switch (action.type) {
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