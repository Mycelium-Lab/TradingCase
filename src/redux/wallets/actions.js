import {
    SET_CHAINID,
    SET_ADDRESS,
    SET_PROVIDER
} from '../types'

export const setChainId = (chainId) => ({
    type: SET_CHAINID,
    payload: { chainId }
})

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    payload: { address }
})

export const setProvider = (provider) => ({
    type: SET_PROVIDER,
    payload: { provider }
})
