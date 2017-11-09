import React from 'react'
import styled from 'styled-components'

const StyledBlock = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 10px;
`

export const Block = ({ children }) => (
  <StyledBlock>{ children }</StyledBlock>
)

export default Block
