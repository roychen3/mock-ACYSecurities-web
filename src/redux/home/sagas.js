import {
  all, put, takeLatest, call,
} from 'redux-saga/effects'

import {
  userLoginSuccess,
  userLoginFailure,
} from './actions'

import {
  USER_LOGIN,
} from '../../constants/actionTypes'
import { axiosNoAuth } from '../../util/axios'

// const FAKE_USER_LOGIN_RESPONSE = {
//   user: {
//     id: 124,
//     name: 'yuntest@mailinator.com',
//     username: 'yuntestzhang',
//     email: 'yuntest@mailinator.com',
//     phone: null,
//     last_login: '2022-01-26 14:30:38',
//     created_at: '2019-03-27 12:52:09',
//     updated_at: '2022-01-26 14:30:38',
//     deleted_at: null,
//     last_logout: '2022-01-26 11:55:06',
//     login_count: 48,
//     logout_count: 13,
//     online_duration: 882080,
//     register_method: 'Email',
//     unread_notifications: 0,
//     beta_tester: 0,
//     broadcaster_admin: 0,
//     analysis_count: 0,
//     analysis_like_count: 0,
//     follower_count: 0,
//     analysis_view_count: 0,
//     nick_name: 'yuntest Zhang',
//     country: 'China',
//     city: '',
//     avatar: '',
//     background: '',
//     intro: '',
//     state: '',
//     language: 'en',
//     ui_language: 'en',
//     notification: '1',
//     notification_new_follower_email: '1',
//     notification_followee_new_analysis_email: '1',
//     notification_be_mentioned_in_analysis_comment_email: '1',
//     notification_be_invited_from_new_analysis_email: '1',
//     notification_analysis_strategy_update_email: '1',
//     notification_analysis_has_comment_email: '1',
//     notification_analysis_comment_has_reply_email: '1',
//     notification_analysis_be_picked_email: '1',
//     notification_analysis_be_liked_email: '1',
//     allow_recommend: '1',
//     allow_invited_comment: '1',
//     website: '',
//     first_name: 'yuntest',
//     last_name: 'Zhang',
//     company: '',
//     street: '',
//     zip_code: '',
//     username_last_modified: '',
//     nickname_last_modified: '',
//     hot_markets_theme_index: '3',
//     markets_theme_index: '1',
//     analysis_market_counts: [],
//     analysis_symbol_counts: [],
//     top_tags: [],
//     created_at_formatted: '27/03/19 23:52:09',
//     new_followeds: 0
//   },
//   token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYXBpLmZpbmxvZ2l4LmNvbS92MS9hdXRoL2VtYWlsL2xvZ2luIiwiaWF0IjoxNjQzMjA3NDM4LCJleHAiOjE2NTkyNzc4MzgsIm5iZiI6MTY0MzIwNzQzOCwianRpIjoiQmt3OW02SjZDVHB4MHJjQSIsInN1YiI6MTI0LCJwcnYiOiJmNmI3MTU0OWRiOGMyYzQyYjc1ODI3YWE0NGYwMmI3ZWU1MjlkMjRkIn0.4v9H7yoaDd54HDFNytWaBTPvDf639L5IHPvSmwoGGmc',
// }
const userLoginAPI = () => {
  const postValues = {
    email: 'yuntest@mailinator.com',
    password: 'A123456',
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

function* homeSagas() {
  yield all([
    takeLatest(
      USER_LOGIN,
      userLoginSaga,
    ),
  ])
}

export default homeSagas
