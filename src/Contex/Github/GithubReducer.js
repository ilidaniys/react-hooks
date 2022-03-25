import {CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USER, SET_LOADING} from "../Types";


const handlers = {
    [SEARCH_USER]: (state, action) => ({...state, users: action.payload, loading: false}),
    [GET_REPOS]: (state, action) => ({...state, repos: action.payload, loading: false}),
    [GET_USER]: (state, action) => ({...state, user: action.payload, loading: false}),
    [SET_LOADING]: (state) => ({...state, loading: true}),
    [CLEAR_USERS]: state => ({...state, users: []}),
    DEFAULT: state => state

}

export const githubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFOULT
    return handler(state, action)
}