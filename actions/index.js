
export const SEARCH_USER = 'SEARCH_USER'
export const GET_USER = 'GET_USER'
export const GET_USER_FOLLOWERS = 'GET_USER_FOLLOWERS'
export const GET_USER_SUBSCRIPTIONS = 'GET_USER_SUBSCRIPTIONS'
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

export function receiveSearchResults(query, json) {
  return {
    type: RECEIVE_SEARCH_RESULTS,
    query: query,
    results: json.data.children.map(child => child.data),
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
    url: url
    followers: json.data
  }
}

export function receiveUserSubscriptions(url, json) {
  return {
    type: RECEIVE_USER_SUBSCRIPTIONS,
    url: url
    subscriptions: json.data
  }
}
