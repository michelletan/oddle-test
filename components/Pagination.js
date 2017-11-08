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
  padding: 5px;
`

export class Pagination extends React.Component {
  render() {
    const { total, current, maxResultsPerPage } = this.props.resultRange
    const min = (current - 1) * maxResultsPerPage + 1
    const max = current * maxResultsPerPage
    const start = min > 0 ? min : 0
    const end = max > total ? total : max
    
    return (
      <Container>
        { start !== 1 && <Button>Prev</Button> }
        { start } - { end } of { total } results
        { end !== total && <Button>Next</Button> }
      </Container>
    )
  }
}

export default Pagination
