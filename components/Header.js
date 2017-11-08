import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const StyledHeader = styled.section`
  height: 0%;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  background-color: palevioletred;
`

const Title = styled.h1`
  margin-top: 0;
  color: white;
`

export class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <Link href="/">
          <Title>GitHub User Search</Title>
        </Link>
      </StyledHeader>
    )
  }
}

export default Header
