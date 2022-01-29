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

export const initialState = {
  userInformation: {},
  userLoginLoading: null,
  userLoginError: null,

  userLogoutLoading: null,
  userLogoutError: null,

  postList: [],
  postListPagination: {},
  postListLoading: null,
  postListError: null,
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userInformation: {},
        userLoginLoading: true,
        userLoginError: null,
      }
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userInformation: action.payload,
        userLoginLoading: false,
      }
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        userLoginLoading: false,
        userLoginError: action.payload,
      }

    case USER_LOGOUT:
      return {
        ...state,
        userLogoutLoading: true,
        userLogoutError: null,
      }
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        userLogoutLoading: false,
      }
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        userLogoutLoading: false,
        userLogoutError: action.payload,
      }

    case GET_POST_LIST:
      return {
        ...state,
        postList: [],
        postListPagination: {},
        postListLoading: true,
        postListError: null,
      }
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        postList: action.payload.postList,
        postListPagination: action.payload.pagination,
        postListLoading: false,
      }
    case GET_POST_LIST_FAILURE:
      return {
        ...state,
        postListLoading: false,
        postListError: action.payload,
      }
    case RESET_GET_POST_LIST:
      return {
        ...state,
        postList: [],
        postListPagination: {},
        postListLoading: null,
        postListError: null,
      }

    default:
      return state
  }
}

export default reducer
