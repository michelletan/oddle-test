import {
  REQUEST_SEARCH_RESULTS,
  REQUEST_USER,
  REQUEST_USER_FOLLOWERS,
  REQUEST_USER_FOLLOWING,
  RECEIVE_SEARCH_RESULTS,
  RECEIVE_USER,
  RECEIVE_USER_REPOSITORIES,
  RECEIVE_USER_FOLLOWERS,
  RECEIVE_USER_FOLLOWING,
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
      return {
        ...state,
        [action.username]: {...state[action.username], ...action.user}
      }
    case RECEIVE_USER_REPOSITORIES:
      return {
        ...state,
        [action.username]: {...state[action.username], repositories: action.repositories}
      }
    case RECEIVE_USER_FOLLOWERS:
      return {
        ...state,
        [action.username]: {...state[action.username], followerList: action.followers}
      }
    case RECEIVE_USER_FOLLOWING:
      return {
        ...state,
        [action.username]:{...state[action.username], followingList: action.following}
      }
    default:
      return state
  }
}

function usersByQueries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_SEARCH_RESULTS:
      const newQuery = {...state[action.query], totalCount: action.results.totalCount}
      newQuery[action.page] = action.results.items

      return {
        ...state,
        [action.query]: newQuery
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
