import React from 'react'

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import withRedux from 'next-redux-wrapper'
import rootReducer from '../reducers'

import { fetchUser } from '../actions'
import ProfileContainer from '../containers/ProfileContainer'

const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware)))
}

export class Profile extends React.Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    await store.dispatch(fetchUser(query.username))
    return { username: query.username }
  }

  render() {
    return (
      <ProfileContainer username={ this.props.username }/>
    )
  }
}

Profile = withRedux(makeStore)(Profile)

export default Profile
