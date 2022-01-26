import { all } from 'redux-saga/effects'

import home from './home/sagas'

export default function* rootSaga() {
  yield all([
    home(),
  ])
}
