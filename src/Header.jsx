import React from 'react'
import styled from 'styled-components'

const TitleArea = styled.div`
  text-align: center;
  background-color: #c09e90;
  padding: 20px 10px;
`
const Title = styled.h1`
  background-color: #c09e90;
  font-size: 32px;
  font-weight: 600;
  color: #f4f5f7;
`

export class Header extends React.Component {
  render() {
    return (
      <TitleArea>
        <Title>{this.props.headerTitle}</Title>
      </TitleArea>
    )
  }
}