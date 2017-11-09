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
import Title from '../components/Title'
import Block from '../components/Block'
import List from '../components/List'
import UserSummary from '../components/UserSummary'

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

export class Profile extends React.Component {
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
          <UserSummary user={ user } />
          <Block>
            <Title text={`Repositories (${ user.publicRepos })`}/>
            <List listItems={ user.repositories }/>

            <Title text={`Following (${ user.following })`}/>
            <List listItems={ user.followingList }/>

            <Title text={`Followers (${ user.followers })`}/>
            <List listItems={ user.followerList }/>

          </Block>
        </Content>

      </Container>
    )
  }
}

export default Profile
