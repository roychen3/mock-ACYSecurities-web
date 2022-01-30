import {
  USER_LOGIN,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILURE,

  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,

  CHECK_USER_TOKEN,
  CHECK_USER_TOKEN_SUCCESS,
  CHECK_USER_TOKEN_FAILURE,

  GET_POST_LIST,
  GET_POST_LIST_SUCCESS,
  GET_POST_LIST_FAILURE,
  RESET_GET_POST_LIST,

  GET_REGISTERED_LIST,
  GET_REGISTERED_LIST_SUCCESS,
  GET_REGISTERED_LIST_FAILURE,
  RESET_GET_REGISTERED_LIST,

  SET_REGISTER_FORM_DATA,

  POST_FAVOURITES,
  POST_FAVOURITES_SUCCESS,
  POST_FAVOURITES_FAILURE,
  RESET_POST_FAVOURITES,

  UNREGISTER_WEBINAR,
  UNREGISTER_WEBINAR_SUCCESS,
  UNREGISTER_WEBINAR_FAILURE,
  RESET_UNREGISTER_WEBINAR,
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

export const checkUserToken = (payload) => ({
  type: CHECK_USER_TOKEN,
  payload,
})
export const checkUserTokenSuccess = (payload) => ({
  type: CHECK_USER_TOKEN_SUCCESS,
  payload,
})
export const checkUserTokenFailure = (payload) => ({
  type: CHECK_USER_TOKEN_FAILURE,
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

export const getRegisteredList = (payload) => ({
  type: GET_REGISTERED_LIST,
  payload,
})
export const getRegisteredListSuccess = (payload) => ({
  type: GET_REGISTERED_LIST_SUCCESS,
  payload,
})
export const getRegisteredListFailure = (payload) => ({
  type: GET_REGISTERED_LIST_FAILURE,
  payload,
})
export const resetGetRegisteredList = (payload) => ({
  type: RESET_GET_REGISTERED_LIST,
  payload,
})

export const setRegisterFormData = (payload) => ({
  type: SET_REGISTER_FORM_DATA,
  payload,
})

export const postFavourites = (payload) => ({
  type: POST_FAVOURITES,
  payload,
})
export const postFavouritesSuccess = (payload) => ({
  type: POST_FAVOURITES_SUCCESS,
  payload,
})
export const postFavouritesFailure = (payload) => ({
  type: POST_FAVOURITES_FAILURE,
  payload,
})
export const resetPostFavourites = (payload) => ({
  type: RESET_POST_FAVOURITES,
  payload,
})

export const unregisterWebinar = (payload) => ({
  type: UNREGISTER_WEBINAR,
  payload,
})
export const unregisterWebinarSuccess = (payload) => ({
  type: UNREGISTER_WEBINAR_SUCCESS,
  payload,
})
export const unregisterWebinarFailure = (payload) => ({
  type: UNREGISTER_WEBINAR_FAILURE,
  payload,
})
export const resetUnregisterWebinar = (payload) => ({
  type: RESET_UNREGISTER_WEBINAR,
  payload,
})

