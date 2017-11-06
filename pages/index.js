import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'

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

export default class App extends React.Component {
  static async getInitialProps({ req }) {
    return { foo: 'foo' }
  }

  render() {
    return (
      <Container>
        <Header />
        <SearchBar />
        <ResultList />
      </Container>
    )
  }
}
