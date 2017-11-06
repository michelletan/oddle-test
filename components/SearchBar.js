import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 10px;
`
const Input = styled.input`
  margin: 0px;
  padding: 7px;
`


export class SearchBar extends React.Component {
  render() {
    return (
      <Container>
        <Input type="text" placeholder="Search for a user on GitHub..."/>
      </Container>
    )
  }
}

export default SearchBar
