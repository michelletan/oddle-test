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
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
    this.onKeyPress = this.onKeyPress.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onKeyPress(event) {
    if (event.key === 'Enter') {
      this.onButtonClick()
    }
  }

  onTextChange(event) {
    this.setState({ text: event.target.value })
  }

  onButtonClick() {
    this.props.onSearchRequest(this.state.text)
  }

  render() {
    return (
      <Container>
        <Input value={this.state.text} onChange={this.onTextChange} onKeyPress={this.onKeyPress} type="text" placeholder="Search for a user on GitHub..."/><Button onClick={this.onButtonClick}>Search</Button>
      </Container>
    )
  }
}

export default SearchBar
