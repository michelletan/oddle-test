import fetch from 'isomorphic-fetch'
import camelize from 'camelize'

export const SEARCH_USER = 'SEARCH_USER'
export const GET_USER = 'GET_USER'
export const GET_USER_FOLLOWERS = 'GET_USER_FOLLOWERS'
export const GET_USER_SUBSCRIPTIONS = 'GET_USER_SUBSCRIPTIONS'

export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS'
export const REQUEST_USER = 'REQUEST_USER'
export const REQUEST_USER_FOLLOWERS = 'REQUEST_USER_FOLLOWERS'
export const REQUEST_USER_SUBSCRIPTIONS = 'GET_USER_SUBSCRIPTIONS'

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USER_FOLLOWERS = 'RECEIVE_USER_FOLLOWERS'
export const RECEIVE_USER_SUBSCRIPTIONS = 'RECEIVE_USER_SUBSCRIPTIONS'

// {
//   users: {
//     id: {
//       id: id,
//       name: ...,
//       followers: 0,
//       subscriptions: 0
//     }
//   },
//   queries: {
//     'abc': {
//       isFetching: true,
//       items: [id, id, id]
//     }
//   }
// }

export function searchUser(query) {
  return {
    type: SEARCH_USER,
    query: query
  }
}

export function getUser(userId) {
  return {
    type: GET_USER,
    userId: userId
  }
}

export function getUserFollowers(url) {
  return {
    type: GET_USER_FOLLOWERS,
    url: url
  }
}

export function getUserSubscriptions(userId) {
  return {
    type: GET_USER_SUBSCRIPTIONS,
    url: url
  }
}

export function requestSearchResults(query) {
  return {
    type: REQUEST_SEARCH_RESULTS,
    query: query
  }
}

export function requestUser(userId) {
  return {
    type: REQUEST_USER,
    userId: userId
  }
}

export function requestUserFollowers(url) {
  return {
    type: REQUEST_USER_FOLLOWERS,
    url: url
  }
}

export function requestUserSubscriptions(userId) {
  return {
    type: REQUEST_USER_SUBSCRIPTIONS,
    url: url
  }
}

export function receiveSearchResults(query, json) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    query: query,
    results: camelize(json),
    receivedAt: Date.now()
  }
}

export function receiveUser(userId, json) {
  return {
    type: RECEIVE_USER,
    userId: userId,
    user: json.data
  }
}

export function receiveUserFollowers(url, json) {
  return {
    type: RECEIVE_USER_FOLLOWERS,
    url: url,
    followers: json.data
  }
}

export function receiveUserSubscriptions(url, json) {
  return {
    type: RECEIVE_USER_SUBSCRIPTIONS,
    url: url,
    subscriptions: json.data
  }
}

export function fetchSearchResults(query) {
  return (dispatch) => {
    dispatch(requestSearchResults(query))
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchResults(query, json)))
  }
}
