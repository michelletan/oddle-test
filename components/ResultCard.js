import React, { Component } from 'react'
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  padding: 10px;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
`

const Content = styled.div`
  margin-left: 10px;
`

const Text = styled.div`
  margin: 0;
`

const Title = styled.div`
  flex: 1;
  font-size: 18px;
`

export class ResultCard extends React.Component {
  render() {
    return (
      <Card>
        <Image src="http://i0.kym-cdn.com/photos/images/original/001/250/216/305.jpg"/>
        <Content>
          <Title>Card Title</Title>
          <Text>Following Followers</Text>
        </Content>
      </Card>
    )
  }
}

export default ResultCard
