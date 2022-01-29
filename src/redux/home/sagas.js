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

  postFavouritesSuccess,
  postFavouritesFailure,
} from './actions'
import {
  USER_LOGIN,
  USER_LOGOUT,
  GET_POST_LIST,
  POST_FAVOURITES,
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

const getPostListAPI = (perPage, page) => {
  return FAKE_POST_LIST_RESPONSE
  // return axiosNoAuth.get(`/posts?per_page=${perPage}&page=${page}`)
  //   .then((res) => res.data)
}
function* getPostListSaga({ payload }) {
  try {
    const { perPage, page } = payload
    const response = yield call(getPostListAPI, perPage, page)

    const postList = []
    let group = []
    response.data.forEach((item, index) => {
      group.push({
        id: item.id,
        title: item.title,
        content: item.content
          .replaceAll('<p>', '')
          .replaceAll('</p>', '')
          .replaceAll('\n', '')
          .replaceAll('<br>', '<br />')
          .replaceAll('&nbsp;', ' '),
        created_at: item.created_at,
      })
      if (index % 6 === 5) {
        postList.push({
          groupId: (index + 1) / 6 - 1,
          group
        })
        group = []
      }
    })

    if (group.length > 0) {
      postList.push({
        groupId: 1,
        group
      })
      group = []
    }
    const pagination = response.meta.pagination
    const registerTopicOptionList = response.data.map((item) => (
      {
        value: `${item.id}`,
        name: item.title,
      }
    ))

    yield put(getPostListSuccess({ postList, pagination, registerTopicOptionList }))
  } catch (err) {
    yield put(getPostListFailure(err.message))
  }
}

const postFavouritesAPI = (ids) => {
  const postValues = { ids, model: '', }
  // return FAKE_POST_FAVOURITES_RESPONSE
  return axiosAuth.post('/favourites', postValues)
    .then((res) => res.data)
}
function* postFavouritesSaga({ payload: ids }) {
  try {
    const response = yield call(postFavouritesAPI, ids)

    yield put(postFavouritesSuccess(response))
  } catch (err) {
    yield put(postFavouritesFailure(err.message))
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
    takeLatest(
      POST_FAVOURITES,
      postFavouritesSaga,
    ),
  ])
}

export default homeSagas
