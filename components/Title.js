import React from 'react'
import styled from 'styled-components'

const StyledTitle = styled.h2`
  margin-bottom: 10px;
`

export const Title = ({ text }) => (
  <StyledTitle>{ text }</StyledTitle>
)

export default Title
