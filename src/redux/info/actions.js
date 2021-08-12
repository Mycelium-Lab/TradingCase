import {
    SET_USER,
    SET_GLOBAL,
} from '../types'

export const setUser = (user) => ({
    type: SET_USER,
    payload: { user }
})

export const setGlobal = (global) => ({
    type: SET_GLOBAL,
    payload: { global }
})
