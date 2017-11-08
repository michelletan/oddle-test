import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 10px;
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

export class ResultCard extends React.Component {
  render() {
    const { login, id, avatarUrl, subscriptions='-', followers='-' } = this.props.user
    return (
      <Link href={{ pathname: '/profile', query: { username: login } }}>
        <Card>
          <Image src={ avatarUrl } />
          <Content>
            <Title>{ login }</Title>
            <Text>Following { subscriptions } Followers { followers }</Text>
          </Content>
        </Card>
      </Link>
    )
  }
}

export default ResultCard
