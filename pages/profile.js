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
  flex-direction: column;
  margin-top: 20px;
  padding-left: 20px;
`

const Block = styled.div`
  flex: 1;
  display: flex;
  margin-bottom: 10px;
`

const Title = styled.h2`

`

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware)))
}

export class Profile extends React.Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    console.log(query)
    store.dispatch(fetchUser(query.username))
    return { username: 'foo' }
  }

  render() {
    const loading = 'Loading...'
    const defaultImg = 'http://i0.kym-cdn.com/photos/images/original/001/250/216/305.jpg'
    const placeholder = { name: loading, login: loading, avatarUrl: defaultImg }
    const { name, login, avatarUrl } = this.props.user || placeholder

    return (
      <Container>
        <Header />
        <Content>
          { this.props.selectedQuery && this.props.selectedQuery != '' &&
            <Block>
              <Link href="/">
                <a>Back to Results for { this.props.selectedQuery }</a>
              </Link>
            </Block>
          }

          <Block>
            <Image src={ avatarUrl }/>
            <Title>{ name }</Title>
            <div>{ '@' + login }</div>
          </Block>
          <Block>
            <Title>Repositories</Title>
          </Block>
          <Block>
            <Block>
              <Title>Following</Title>
            </Block>
            <Block>
              <Title>Followed</Title>
            </Block>
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
