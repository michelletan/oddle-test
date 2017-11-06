import React, { Component } from 'react'
import styled from 'styled-components'
import Loading from './Loading'
import ResultCard from './ResultCard'

const Container = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: stretch;
  padding: 10px;
`
const Input = styled.input`
  width: 500px;
  margin: 0px;
  padding: 7px;
`

export class ResultList extends React.Component {
  render() {
    return (
      <Container>
        <Loading />
        <ResultCard />
        <ResultCard />
        <ResultCard />
      </Container>
    )
  }
}

export default ResultList
