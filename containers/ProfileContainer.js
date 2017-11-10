import React from 'react'
import { connect } from 'react-redux'

import Profile from '../components/Profile'

import {
  fetchUser,
  fetchUserRepositories,
  fetchUserFollowing,
  fetchUserFollowers
} from '../actions'

const mapStateToProps = (state) => {
  return {
    user: state.users[state.selectedUser],
    selectedQuery: state.selectedQuery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUserLoaded: (username) => {
      dispatch(fetchUserRepositories(username))
      dispatch(fetchUserFollowing(username))
      dispatch(fetchUserFollowers(username))
    }
  }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer
