import {
  REQUEST_SEARCH_RESULTS,
  REQUEST_USER,
  REQUEST_USER_FOLLOWERS,
  REQUEST_USER_SUBSCRIPTIONS,
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_USER,
  RECEIVE_USER_FOLLOWERS,
  RECEIVE_USER_SUBSCRIPTIONS,
} from '../actions'
import { combineReducers } from 'redux'

function selectedQuery(state = '', action) {
  switch (action.type) {
    case REQUEST_SEARCH_RESULTS:
      return action.query.slice(0)
    default:
      return state
  }
}

function selectedPage(state = 0, action) {
  switch (action.type) {
    case REQUEST_SEARCH_RESULTS:
    case RECEIVE_SEARCH_RESULTS:
      return action.page
    default:
      return state
  }
}

function selectedUser(state = '', action) {
  switch (action.type) {
    case REQUEST_USER:
      return action.username.slice(0)
    default:
      return state
  }
}

function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      const newUser = {...state[action.username], ...action.user}
      return {
        ...state,
        [action.username]: newUser
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

function usersByQueries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
    console.log(action)
      // const results = action.results.items
      // const userIds = results.map((user) => {
      //
      // })
      return {
        ...state,
        [action.query]: action.results
      }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  selectedQuery,
  selectedPage,
  selectedUser,
  users,
  usersByQueries
})

export default rootReducer
