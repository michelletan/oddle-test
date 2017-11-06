import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  flex: 1;
  flex-direction: column;
  justify-content: stretch;
  padding: 10px;
`

const CardImage = styled.img`
  width: 100px;
  height: 100px;
`

export class ResultCard extends React.Component {
  render() {
    return (
      <Card>
        <CardImage src="http://i0.kym-cdn.com/photos/images/original/001/250/216/305.jpg"/>
      </Card>
    )
  }
}

export default ResultCard
