import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,

  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,

  GET_POST_LIST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE,
  RESET_GET_POST_LIST,
} from '../../constants/actionTypes'

export const userLogin = (payload) => ({
  type: USER_LOGIN,
  payload,
})
export const userLoginSuccess = (payload) => ({
  type: USER_LOGIN_SUCCESS,
  payload,
})
export const userLoginFailure = (payload) => ({
  type: USER_LOGIN_FAILURE,
  payload,
})

export const userLogout = (payload) => ({
  type: USER_LOGOUT,
  payload,
})
export const userLogoutSuccess = (payload) => ({
  type: USER_LOGOUT_SUCCESS,
  payload,
})
export const userLogoutFailure = (payload) => ({
  type: USER_LOGOUT_FAILURE,
  payload,
})

export const getPostList = (payload) => ({
  type: GET_POST_LIST,
  payload,
})
export const getPostListSuccess = (payload) => ({
  type: GET_POST_LIST_SUCCESS,
  payload,
})
export const getPostListFailure = (payload) => ({
  type: GET_POST_LIST_FAILURE,
  payload,
})
export const resetGetPostList = (payload) => ({
  type: RESET_GET_POST_LIST,
  payload,
})

