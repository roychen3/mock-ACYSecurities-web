import {
  all, put, takeLatest, call, select
} from 'redux-saga/effects'

import {
  userLoginSuccess,
  userLoginFailure,

  userLogoutSuccess,
  userLogoutFailure,

  checkUserTokenSuccess,
  checkUserTokenFailure,

  getPostListSuccess,
  getPostListFailure,

  getRegisteredList,
  getRegisteredListSuccess,
  getRegisteredListFailure,

  postFavouritesSuccess,
  postFavouritesFailure,

  unregisterWebinarSuccess,
  unregisterWebinarFailure,
} from './actions'
import {
  USER_LOGIN,
  USER_LOGOUT,
  CHECK_USER_TOKEN,
  GET_POST_LIST,
  GET_REGISTERED_LIST,
  POST_FAVOURITES,
  UNREGISTER_WEBINAR,
} from '../../constants/actionTypes'

import { axiosNoAuth, axiosAuth } from '../../util/axios'
import {
  FAKE_USER_LOGIN_RESPONSE,
  FAKE_USER_LOGOUY_RESPONSE,
  FAKE_CHECK_USER_TOKEN_RESPONSE,
  FAKE_POST_LIST_RESPONSE,
  FAKE_REGISTERED_LIST_RESPONSE,
  FAKE_POST_FAVOURITES_RESPONSE,
  FAKE_UNREGISTER_WEBINAR_RESPONSE,
} from './fakeData'


const userLoginAPI = (payload) => {
  const postValues = {
    email: payload.email,
    password: payload.password,
  }
  return FAKE_USER_LOGIN_RESPONSE
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
  return FAKE_USER_LOGOUY_RESPONSE
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


const checkUserTokenAPI = () => {
  return FAKE_CHECK_USER_TOKEN_RESPONSE
  return axiosAuth.post('/auth/me')
    .then((res) => res.data)
}
function* checkUserTokenSaga() {
  try {
    const response = yield call(checkUserTokenAPI)
    yield put(checkUserTokenSuccess({
      user: response.user,
      token: localStorage.getItem('token'),
    }))
  } catch (err) {
    yield put(checkUserTokenFailure(err.message))
  }
}


const getPostListAPI = (perPage, page) => {
  return FAKE_POST_LIST_RESPONSE
  return axiosNoAuth.get(`/posts?per_page=${perPage}&page=${page}`)
    .then((res) => res.data)
}
function* getPostListSaga({ payload }) {
  try {
    const { perPage, page } = payload
    const response = yield call(getPostListAPI, perPage, page)

    const postList = []
    let group = []
    response.data.forEach((item, index) => {
      group.push({
        id: `${item.id}`,
        title: item.title,
        content: item.content
          .replaceAll('<p>', '')
          .replaceAll('</p>', '')
          .replaceAll('\n', '')
          .replaceAll('<br>', '<br />')
          .replaceAll('&nbsp;', ' '),
        createdAt: item.created_at,
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
    // const pagination = response.meta.pagination
    // open for use fake data
    const pagination = {
      ...response.meta.pagination,
      current_page: page,
    }


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


const getRegisteredListAPI = (userId, perPage, page) => {
  return FAKE_REGISTERED_LIST_RESPONSE
  return axiosAuth.get(`/posts?favourited=1&author=${userId}&per_page=${perPage}&page=${page}`)
    .then((res) => res.data)
}
function* getRegisteredListSaga({ payload }) {
  try {
    const { userId, perPage, page } = payload
    const response = yield call(getRegisteredListAPI, userId, perPage, page)

    const registeredList = []
    let group = []
    response.data.forEach((item, index) => {
      group.push({
        id: `${item.id}`,
        title: item.title,
        content: item.content
          .replaceAll('<p>', '')
          .replaceAll('</p>', '')
          .replaceAll('\n', '')
          .replaceAll('<br>', '<br />')
          .replaceAll('&nbsp;', ' '),
        createdAt: item.created_at,
      })
      if (index % 6 === 5) {
        registeredList.push({
          groupId: (index + 1) / 6 - 1,
          group
        })
        group = []
      }
    })

    if (group.length > 0) {
      registeredList.push({
        groupId: 1,
        group
      })
      group = []
    }
    // const pagination = response.meta.pagination
    // open for use fake data
    const pagination = {
      ...response.meta.pagination,
      current_page: page,
    }


    const registerTopicOptionList = response.data.map((item) => (
      {
        value: `${item.id}`,
        name: item.title,
      }
    ))

    yield put(getRegisteredListSuccess({ registeredList, pagination, registerTopicOptionList }))
  } catch (err) {
    yield put(getRegisteredListFailure(err.message))
  }
}


const postFavouritesAPI = (ids) => {
  const postValues = { ids, model: 'post', }
  return FAKE_POST_FAVOURITES_RESPONSE
  return axiosAuth.post('/favourites', postValues)
    .then((res) => res.data)
}
function* postFavouritesSaga({ payload: ids }) {
  try {
    const response = yield call(postFavouritesAPI, ids)

    yield put(postFavouritesSuccess(response.success))
  } catch (err) {
    yield put(postFavouritesFailure(err.message))
  }
}


const unregisterWebinarAPI = (id) => {
  const postValues = { id: Number(id) }
  return FAKE_UNREGISTER_WEBINAR_RESPONSE
  return axiosAuth.delete(`/favourites/post/id`, postValues)
    .then((res) => res.data)
}
function* unregisterWebinarSaga({ payload: id }) {
  try {
    const response = yield call(unregisterWebinarAPI, id)

    yield put(unregisterWebinarSuccess(response))

    const userInformation = yield select((state) => state.home.userInformation)
    yield put(getRegisteredList({
      userId: userInformation.user.id,
      perPage: 12,
      page: 1,
    }))
  } catch (err) {
    yield put(unregisterWebinarFailure(err.message))
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
      CHECK_USER_TOKEN,
      checkUserTokenSaga,
    ),
    takeLatest(
      GET_POST_LIST,
      getPostListSaga,
    ),
    takeLatest(
      GET_REGISTERED_LIST,
      getRegisteredListSaga,
    ),
    takeLatest(
      POST_FAVOURITES,
      postFavouritesSaga,
    ),
    takeLatest(
      UNREGISTER_WEBINAR,
      unregisterWebinarSaga,
    ),
  ])
}


export default homeSagas
