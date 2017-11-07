import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`
const Input = styled.input`
  flex: 1;
  margin: 0px;
  padding: 7px;
`
const Button = styled.button`
  width: 100px;
  padding: 9px;
`

export class SearchBar extends React.Component {
  render() {
    return (
      <Container>
        <Input type="text" placeholder="Search for a user on GitHub..."/><Button>Search</Button>
      </Container>
    )
  }
}

export default SearchBar
