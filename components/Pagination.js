import React, { Component } from 'react'
import styled from 'styled-components'

import Router from 'next/router'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`
const Button = styled.button`
  margin: 5px;
`

export class Pagination extends React.Component {
  render() {
    return (
      <Container>
        <Button>Prev</Button> 1-10 of 23 results<Button>Next</Button>
      </Container>
    )
  }
}

export default Pagination
