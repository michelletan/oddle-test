import React from 'react'
import Router from 'next/router'
import styled from 'styled-components';
import Header from '../components/Header'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`

export default class extends React.Component {
  static async getInitialProps({ req }) {
    return { foo: 'foo' }
  }

  render() {
    return (
      <Container>
        <Header />
        Click <span onClick={() => Router.push('/profile')}>here</span> to read more { this.props.foo }
      </Container>
    )
  }
}
