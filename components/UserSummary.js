import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Block from './Block'
import Title from './Title'

const Image = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`

export const UserSummary = ({ user }) => (
  <Block>
    <Image src={ user.avatarUrl }/>
    <Title>{ user.name }</Title>
    <p>{ '@' + user.login }</p>
    { user.location && <p>{ user.location }</p> }
    <Link href={ user.htmlUrl }>
      <a>{ user.htmlUrl }</a>
    </Link>
  </Block>
)

export default UserSummary
