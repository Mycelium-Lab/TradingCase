import {
    SET_CHAINID,
    SET_ADDRESS,
} from '../types'

export const setChainId = (chainId) => ({
    type: SET_CHAINID,
    payload: { chainId }
})

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: { address }
})