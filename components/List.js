import React from 'react'
import styled from 'styled-components'

const StyledList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`

const ListItem = styled.div`
  padding: 10px;
  margin-top: -2px;
  border: 2px solid palevioletred;
  word-wrap: break-word;
`

const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

export const List = ({ listItems }) => {
  const items = listItems.map((item, index) => (
    <ListItem key={ index }>
      { item.avatarUrl && <Image src={ item.avatarUrl }/>}
      { item.name ? item.name : item.login }
    </ListItem>
  ))

  return (
    <StyledList>{ items }</StyledList>
  )
}

export default List
