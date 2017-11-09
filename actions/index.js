import fetch from 'isomorphic-fetch'
import camelize from 'camelize'

export const REQUEST_SEARCH_RESULTS = 'REQUEST_SEARCH_RESULTS'
export const REQUEST_USER = 'REQUEST_USER'
export const REQUEST_USER_REPOSITORIES = 'REQUEST_USER_REPOSITORIES'
export const REQUEST_USER_FOLLOWERS = 'REQUEST_USER_FOLLOWERS'
export const REQUEST_USER_FOLLOWING = 'GET_USER_FOLLOWING'

export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'
export const RECEIVE_USER = 'RECEIVE_USER'
export const RECEIVE_USER_REPOSITORIES = 'RECEIVE_USER_REPOSITORIES'
export const RECEIVE_USER_FOLLOWERS = 'RECEIVE_USER_FOLLOWERS'
export const RECEIVE_USER_FOLLOWING = 'RECEIVE_USER_FOLLOWING'

const prod = process.env.NODE_ENV === 'production'

const clientId = prod ? process.env.GITHUB_CLIENT_ID : require('../token').clientId
const clientSecret = prod ? process.env.GITHUB_CLIENT_SECRET : require('../token').clientSecret

// {
//   selectedQuery: '',
//   selectedPage: 1,
//   selectedUser: 'username',
//   users: {
//     username: {
//       id: id,
//       login: ...,
//       followers: 0,
//       subscriptions: 0
//     }
//   },
//   queries: {
//     'abc': {
//       totalCount: 1000,
//       pages: {
//         1: [user, user, user],
//         2: [user, user, user],
//       }
//     }
//   }
// }


export function requestSearchResults(query, page) {
  return {
    type: REQUEST_SEARCH_RESULTS,
    query: query,
    page: page
  }
}

export function requestUser(username) {
  return {
    type: REQUEST_USER,
    username: username
  }
}

export function requestUserRepositories(username) {
  return {
    type: REQUEST_USER_REPOSITORIES,
    username: username
  }
}

export function requestUserFollowers(username) {
  return {
    type: REQUEST_USER_FOLLOWERS,
    username: username
  }
}

export function requestUserFollowing(username) {
  return {
    type: REQUEST_USER_FOLLOWING,
    username: username
  }
}

export function receiveSearchResults(query, page, json) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    query: query,
    page: page,
    results: camelize(json),
    receivedAt: Date.now()
  }
}

export function receiveUser(username, json) {
  return {
    type: RECEIVE_USER,
    username: username,
    user: camelize(json)
  }
}

export function receiveUserRepositories(username, json) {
  return {
    type: RECEIVE_USER_REPOSITORIES,
    username: username,
    repositories: camelize(json)
  }
}

export function receiveUserFollowers(username, json) {
  return {
    type: RECEIVE_USER_FOLLOWERS,
    username: username,
    followers: camelize(json)
  }
}

export function receiveUserFollowing(username, json) {
  return {
    type: RECEIVE_USER_FOLLOWING,
    username: username,
    following: camelize(json)
  }
}

export function fetchSearchResults(query, page=1) {
  return (dispatch) => {
    dispatch(requestSearchResults(query, page))
    return fetch(`https://api.github.com/search/users?client_id=${clientId}&client_secret=${clientSecret}&q=${query}+type:user+in:login&page=${page}`)
      .then(response => response.json())
      .then(json => dispatch(receiveSearchResults(query, page, json)))
  }
}

export function fetchUser(username) {
  return (dispatch) => {
    dispatch(requestUser(username))
    return fetch(`https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`)
      .then(response => response.json())
      .then(json => {dispatch(receiveUser(username, json))})
  }
}

export function fetchUserRepositories(username) {
  return (dispatch) => {
    dispatch(requestUserRepositories(username))
    return fetch(`https://api.github.com/users/${username}/repos?client_id=${clientId}&client_secret=${clientSecret}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUserRepositories(username, json)))
  }
}

export function fetchUserFollowers(username) {
  return (dispatch) => {
    dispatch(requestUserFollowers(username))
    return fetch(`https://api.github.com/users/${username}/followers?client_id=${clientId}&client_secret=${clientSecret}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUserFollowers(username, json)))
  }
}

export function fetchUserFollowing(username) {
  return (dispatch) => {
    dispatch(requestUserFollowing(username))
    return fetch(`https://api.github.com/users/${username}/following?client_id=${clientId}&client_secret=${clientSecret}`)
      .then(response => response.json())
      .then(json => dispatch(receiveUserFollowing(username, json)))
  }
}
