import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

// Animation from https://codepen.io/alanshortis/pen/eJLVXr
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const Animation = styled.div`
  border-radius: 50%;
  width: 24px;
  height: 24px;
  border: .25rem solid rgba(255, 105, 180, 0.2);
  border-top-color: rgb(255, 105, 180);
  animation: ${spin} 1s infinite linear;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export class Loading extends React.Component {
  render() {
    return (
      <Container>
        <Animation />
        <p>Loading</p>
      </Container>
    )
  }
}

export default Loading
