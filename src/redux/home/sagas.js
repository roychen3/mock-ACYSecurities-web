import {
  all, put, takeLatest, call,
} from 'redux-saga/effects'

import {
  userLoginSuccess,
  userLoginFailure,

  userLogoutSuccess,
  userLogoutFailure,

  getPostListSuccess,
  getPostListFailure,
} from './actions'
import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_POST_LIST,
} from '../../constants/actionTypes'

import { axiosNoAuth, axiosAuth } from '../../util/axios'
import { FAKE_POST_LIST_RESPONSE } from './fakeData'



const userLoginAPI = (payload) => {
  const postValues = {
    email: payload.email,
    password: payload.password,
  }
  // return FAKE_USER_LOGIN_RESPONSE
  return axiosNoAuth.post('/auth/email/login', postValues)
    .then((res) => res.data)
}
function* userLoginSaga({ payload }) {
  try {
    const response = yield call(userLoginAPI, payload)
    localStorage.setItem('token', response.token)
    yield put(userLoginSuccess(response))
  } catch (err) {
    yield put(userLoginFailure(err.message))
  }
}


const userLogoutAPI = () => {
  // return FAKE_USER_LOGOUY_RESPONSE
  return axiosAuth.post('/auth/logout')
    .then((res) => res.data)
}
function* userLogoutSaga() {
  try {
    const response = yield call(userLogoutAPI)
    localStorage.clear()
    yield put(userLogoutSuccess(response))
  } catch (err) {
    yield put(userLogoutFailure(err.message))
  }
}

const getPostListAPI = (perPage = 12, page = 1) => {
  return FAKE_POST_LIST_RESPONSE
  return axiosNoAuth.get(`/posts?per_page=${perPage}&page=${page}`)
    .then((res) => res.data)
}
function* getPostListSaga({ payload }) {
  try {
    const response = payload
      ? yield call(getPostListAPI, payload.perPage, payload.page)
      : yield call(getPostListAPI)

    const postList = response.data.map((item) => ({
      id: item.id,
      title: item.title,
      content: item.content
      .replaceAll('<p>', '')
      .replaceAll('</p>', '')
      .replaceAll('\n', '')
      .replaceAll('<br>', '<br />')
      .replaceAll('&nbsp;', ' '),
      created_at: item.created_at,
    }))
    const pagination = response.meta.pagination

    yield put(getPostListSuccess({ postList, pagination }))
  } catch (err) {
    yield put(getPostListFailure(err.message))
  }
}

function* homeSagas() {
  yield all([
    takeLatest(
      USER_LOGIN,
      userLoginSaga,
    ),
    takeLatest(
      USER_LOGOUT,
      userLogoutSaga,
    ),
    takeLatest(
      GET_POST_LIST,
      getPostListSaga,
    ),
  ])
}

export default homeSagas
