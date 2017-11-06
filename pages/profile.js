import React from 'react'
import Router from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

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

export default class Profile extends React.Component {
  static async getInitialProps({ req }) {
    return { foo: 'foo' }
  }

  render() {
    return (
      <Container>
        <Header />
        <SearchBar />
        <Content>
          <Block>Back to Results for 'name'</Block>
          <Block>
            <Image src="http://i0.kym-cdn.com/photos/images/original/001/250/216/305.jpg"/>
            <Title>USERNAME</Title>
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
