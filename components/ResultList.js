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
    const cards = this.props.users.map((user) => {
      return (
        <ResultCard key={user.id} user={user} loadUserData={this.props.loadUserData} />
      )
    })

    return (
      <Container>
        {this.props.users.length === 0 && <Loading />}
        {cards}
      </Container>
    )
  }
}

export default ResultList
