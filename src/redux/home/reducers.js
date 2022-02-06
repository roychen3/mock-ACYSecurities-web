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

  SET_WEBINAR_DETAIL,

  POST_REGISTER,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAILURE,
  RESET_POST_REGISTER,

  UNREGISTER_WEBINAR,
  UNREGISTER_WEBINAR_SUCCESS,
  UNREGISTER_WEBINAR_FAILURE,
  RESET_UNREGISTER_WEBINAR,
} from '../../constants/actionTypes'

export const initialState = {
  userInformation: {},
  userLoginLoading: null,
  userLoginError: null,

  userLogoutLoading: null,
  userLogoutError: null,

  checkUserTokenLoading: null,
  checkUserTokenError: null,

  postList: [],
  postListPagination: {},
  registerTopicOptionList: [],
  postListLoading: null,
  postListError: null,

  registeredList: [],
  registeredListPagination: {},
  registeredListLoading: null,
  registeredListError: null,

  registerFormData: {
    topic: '',
    firstName: '',
    lastName: '',
    email: '',
  },

  webinarDetail: {},

  postRegisterResponse: '',
  postRegisterLoading: null,
  postRegisterError: null,

  unregisterWebinarResponse: '',
  unregisterWebinarLoading: null,
  unregisterWebinarError: null,
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

    case CHECK_USER_TOKEN:
      return {
        ...state,
        checkUserTokenLoading: true,
        checkUserTokenError: null,
      }
    case CHECK_USER_TOKEN_SUCCESS:
      return {
        ...state,
        userInformation: action.payload,
        checkUserTokenLoading: false,
      }
    case CHECK_USER_TOKEN_FAILURE:
      return {
        ...state,
        checkUserTokenLoading: false,
        checkUserTokenError: action.payload,
      }

    case GET_POST_LIST:
      return {
        ...state,
        postList: [],
        postListPagination: {},
        registerTopicOptionList: [],
        postListLoading: true,
        postListError: null,
      }
    case GET_POST_LIST_SUCCESS:
      return {
        ...state,
        postList: action.payload.postList,
        postListPagination: action.payload.pagination,
        registerTopicOptionList: action.payload.registerTopicOptionList,
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
        registerTopicOptionList: [],
        postListLoading: null,
        postListError: null,
      }

    case GET_REGISTERED_LIST:
      return {
        ...state,
        registeredList: [],
        registeredListPagination: {},
        registeredListLoading: true,
        registeredListError: null,
      }
    case GET_REGISTERED_LIST_SUCCESS:
      return {
        ...state,
        registeredList: action.payload.registeredList,
        registeredListPagination: action.payload.pagination,
        registeredListLoading: false,
      }
    case GET_REGISTERED_LIST_FAILURE:
      return {
        ...state,
        registeredListLoading: false,
        registeredListError: action.payload,
      }
    case RESET_GET_REGISTERED_LIST:
      return {
        ...state,
        registeredList: [],
        registeredListPagination: {},
        registeredListLoading: null,
        registeredListError: null,
      }

    case SET_REGISTER_FORM_DATA:
      return {
        ...state,
        registerFormData: action.payload ? action.payload : initialState.registerFormData,
      }

    case SET_WEBINAR_DETAIL:
      return {
        ...state,
        webinarDetail: action.payload ? action.payload : initialState.webinarDetail,
      }

    case POST_REGISTER:
      return {
        ...state,
        postRegisterResponse: '',
        postRegisterLoading: true,
        postRegisterError: null,
      }
    case POST_REGISTER_SUCCESS:
      return {
        ...state,
        postRegisterResponse: action.payload,
        postRegisterLoading: false,
      }
    case POST_REGISTER_FAILURE:
      return {
        ...state,
        postRegisterLoading: false,
        postRegisterError: action.payload,
      }
    case RESET_POST_REGISTER:
      return {
        ...state,
        postRegisterResponse: '',
        postRegisterLoading: null,
        postRegisterError: null,
      }

    case UNREGISTER_WEBINAR:
      return {
        ...state,
        unregisterWebinarResponse: '',
        unregisterWebinarLoading: true,
        unregisterWebinarError: null,
      }
    case UNREGISTER_WEBINAR_SUCCESS:
      return {
        ...state,
        unregisterWebinarResponse: action.payload,
        unregisterWebinarLoading: false,
      }
    case UNREGISTER_WEBINAR_FAILURE:
      return {
        ...state,
        unregisterWebinarLoading: false,
        unregisterWebinarError: action.payload,
      }
    case RESET_UNREGISTER_WEBINAR:
      return {
        ...state,
        unregisterWebinarResponse: '',
        unregisterWebinarLoading: null,
        unregisterWebinarError: null,
      }

    default:
      return state
  }
}

export default reducer
