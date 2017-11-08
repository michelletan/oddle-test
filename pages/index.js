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

const maxResultsPerPage = 30

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
        <Pagination
          selectedQuery={this.props.selectedQuery}
          onNextPageRequest={this.props.onNextPageRequest}
          onPrevPageRequest={this.props.onPrevPageRequest}
          resultRange={this.props.resultRange}
        />
        <ResultList users={this.props.users}/>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  let users = []
  let resultRange = { total: 0, current: 0, maxResultsPerPage: maxResultsPerPage }

  const results = state.usersByQueries[state.selectedQuery]

  if (results && results[state.selectedPage]) {
    users = results[state.selectedPage]
    resultRange.total = results.totalCount
    resultRange.current = state.selectedPage
    resultRange.maxResultsPerPage = maxResultsPerPage
  }

  return {
    users: users,
    resultRange: resultRange,
    selectedQuery: state.selectedQuery
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchRequest: (query) => {
      dispatch(fetchSearchResults(query))
    },
    onNextPageRequest: (query, page) => {
      dispatch(fetchSearchResults(query, page + 1))
    },
    onPrevPageRequest: (query, page) => {
      dispatch(fetchSearchResults(query, page - 1))
    }
  }
}

App = withRedux(makeStore, mapStateToProps, mapDispatchToProps)(App)

export default App
