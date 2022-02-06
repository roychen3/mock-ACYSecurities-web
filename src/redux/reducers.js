import { combineReducers } from 'redux'

import { USER_LOGOUT_SUCCESS } from '../constants/actionTypes'
import home from './home/reducers'

const reducers = combineReducers({
  home,
})

const rootReducer = (state, action) => {
  if (action.type === USER_LOGOUT_SUCCESS) {
    return reducers(undefined, action)
  }

  return reducers(state, action)
}

export default rootReducer
