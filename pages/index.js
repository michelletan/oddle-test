import React from 'react'
import Router from 'next/router'
import styled from 'styled-components'
import { injectGlobal } from 'styled-components'

import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import withRedux from 'next-redux-wrapper'
import rootReducer from '../reducers'

import { fetchSearchResults } from '../actions'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import Pagination from '../components/Pagination'
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

const makeStore = (initialState, options) => {
  return createStore(rootReducer, initialState, compose(applyMiddleware(thunkMiddleware)))
}

export class App extends React.Component {
  static async getInitialProps({ store, isServer, pathname, query }) {
    return { }
  }

  render() {
    return (
      <Container>
        <Header />
        <SearchBar onSearchRequest={this.props.onSearchRequest}/>
        <Pagination resultRange={this.props.resultRange}/>
        <ResultList users={this.props.users}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  let users = []
  let resultRange = { total: 0, start: 0, end: 0 }

  if (state.usersByQueries[state.selectedQuery]) {
    const results = state.usersByQueries[state.selectedQuery]
    users = results.items
    resultRange.total = results.totalCount
    resultRange.start = 1
    resultRange.end = 30
  }
  return {
    users: users,
    resultRange: resultRange
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchRequest: query => {
      dispatch(fetchSearchResults(query))
    }
  }
}

App = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(App)

export default App
