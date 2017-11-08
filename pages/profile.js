import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import withRedux from 'next-redux-wrapper'
import rootReducer from '../reducers'

import { fetchUser } from '../actions'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

injectGlobal`
  body {
    margin: 0;
    font-family: 'Roboto'
  }
`

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

const Content = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  padding-left: 20px;
`

const ProfileBlock = styled.div`
  width: 300px;
`

const Block = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const Title = styled.h2`
  margin-bottom: 10px;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`

const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware)))
}

export class Profile extends React.Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    store.dispatch(fetchUser(query.username))
    return { }
  }

  render() {
    console.log(this.props.user)
    const loading = 'Loading...'
    const defaultImg = 'http://i0.kym-cdn.com/photos/images/original/001/250/216/305.jpg'
    const placeholder = {
      name: loading,
      login: loading,
      location: loading,
      avatarUrl: defaultImg,
      htmlUrl: 'https://github.com',
      publicRepos: 0,
      following: 0,
      followers: 0
    }
    const user = this.props.user || placeholder

    return (
      <Container>
        <Header />
        { this.props.selectedQuery && this.props.selectedQuery != '' &&
          <Block>
            <Link href="/">
              <a>Back to Results for { this.props.selectedQuery }</a>
            </Link>
          </Block>
        }
        <Content>
          <ProfileBlock>
            <Image src={ user.avatarUrl }/>
            <Title>{ user.name }</Title>
            <p>{ '@' + user.login }</p>
            { user.location && <p>{ user.location }</p> }
            <Link href={ user.htmlUrl }>
              <a>{ user.htmlUrl }</a>
            </Link>
          </ProfileBlock>
          <Block>
            <Title>Repositories ({ user.publicRepos })</Title>
            <Title>Following ({ user.following })</Title>
            <Title>Followers ({ user.followers })</Title>
          </Block>
        </Content>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users[state.selectedUser],
    selectedQuery: state.selectedQuery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

Profile = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(Profile)

export default Profile
