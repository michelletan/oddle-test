import {
  SEARCH_USER,
  GET_USER,
  GET_USER_FOLLOWERS,
  GET_USER_SUBSCRIPTIONS,
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_USER,
  RECEIVE_USER_FOLLOWERS,
  RECEIVE_USER_SUBSCRIPTIONS
} from '../actions'
import { combineReducers } from 'redux'

function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      const newUser = {...state[action.userId], ...action.user}
      return {
        ...state,
        [action.userId]: newUser
      }
    case RECEIVE_USER_FOLLOWERS:
      const newUserF = {...state[action.userId], followers: action.followers}
      return {
        ...state,
        [action.userId]: newUserF
      }
    case RECEIVE_USER_SUBSCRIPTIONS:
      const newUserS = {...state[action.userId], subscriptions: action.subscriptions}
      return {
        ...state,
        [action.userId]: newUserS
      }
    default:
      return state
  }
}

function selectedQuery(state = '', action) {
  switch (action.type) {
    case SEARCH_USER:
      return action.query.slice(0)
    default:
      return state
  }
}

function usersByQueries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      return {
        ...state,
        [action.query]: action.results
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  users,
  selectedQuery,
  usersByQueries
})

export default rootReducer
