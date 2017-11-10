import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 10px;
  margin-bottom: 10px;
  border: 2px solid palevioletred;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
`

const Content = styled.div`
  margin-left: 10px;
`

const Text = styled.div`
  margin: 0;
`

const Title = styled.div`
  flex: 1;
  font-size: 18px;
`

const FollowContainer = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: space-between;
`
const Span = styled.span`
  font-weight: bold;
  margin-left: 10px;
`

export class ResultCard extends React.Component {
  componentDidMount() {
    if (!this.props.user.followingList || !this.props.user.followersList) {
      this.props.loadUserData(this.props.user)
    }
  }

  render() {
    const { login, id, avatarUrl, followingList, followerList } = this.props.user

    const following = followingList ? followingList.length : 'Loading...'
    const followers = followerList ? followerList.length : 'Loading...'

    return (
      <Link href={{ pathname: '/profile', query: { username: login } }}>
        <Card>
          <Image src={ avatarUrl } />
          <Content>
            <Title>{ login }</Title>
            <FollowContainer>Following <Span>{ following }</Span></FollowContainer><FollowContainer>Followers <Span>{ followers }</Span></FollowContainer>
          </Content>
        </Card>
      </Link>
    )
  }
}

export default ResultCard
