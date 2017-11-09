import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import styled from 'styled-components'

import {
  fetchUser,
  fetchUserRepositories,
  fetchUserFollowing,
  fetchUserFollowers
} from '../actions'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

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
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const Title = styled.h2`
  margin-bottom: 10px;
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`

const ListItem = styled.div`
  padding: 10px;
  margin-top: -2px;
  border: 2px solid palevioletred;
  word-wrap: break-word;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

export class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.onUserLoaded(this.props.username)
  }

  render() {
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
      followers: 0,
      repositories: [],
      followingList: [],
      followerList: []
    }
    const user = {...placeholder, ...this.props.user}

    const repos = user.repositories.map((repo) => {
      return (<ListItem key={ repo.id }>{ repo.name }</ListItem>)
    })

    const following = user.followingList.map((user) => {
      return (<ListItem key={ user.id }><Image src={ user.avatarUrl }/>{ user.login }</ListItem>)
    })

    const followers = user.followerList.map((user) => {
      return (<ListItem key={ user.id }><Image src={ user.avatarUrl }/>{ user.login }</ListItem>)
    })

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
          <Block>
            <Image src={ user.avatarUrl }/>
            <Title>{ user.name }</Title>
            <p>{ '@' + user.login }</p>
            { user.location && <p>{ user.location }</p> }
            <Link href={ user.htmlUrl }>
              <a>{ user.htmlUrl }</a>
            </Link>
          </Block>
          <Block>
            <Title>Repositories ({ user.publicRepos })</Title>
            <List>
              { repos }
            </List>

            <Title>Following ({ user.following })</Title>
            <List>
              { following }
            </List>

            <Title>Followers ({ user.followers })</Title>
            <List>
              { followers }
            </List>

            <Title>JSON Payload</Title>
            <List>
              <ListItem>{ JSON.stringify(user, null, '\t') }</ListItem>
            </List>

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
    onUserLoaded: (username) => {
      dispatch(fetchUserRepositories(username))
      dispatch(fetchUserFollowing(username))
      dispatch(fetchUserFollowers(username))
    }
  }
}

ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)

export default ProfileContainer