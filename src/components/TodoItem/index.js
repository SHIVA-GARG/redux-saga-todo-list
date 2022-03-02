import React from 'react'
import {
  Container,
  Image,
  UserName,
  Task,
  RemoveButton,
  Content,
} from './styles'

const App = (props) => {
  const { className, imageSrc, userName, task, onRemoveClick,bio } = props

  return (
    <Container className={className}>
      <RemoveButton onClick={onRemoveClick}>x</RemoveButton>

      <Image src={imageSrc} alt={userName} />

      <Content>
        <UserName>{userName}</UserName>
        <Task>TASK:{task}</Task>
        <hr/>
        <h4>BIO:{bio}</h4>
      </Content>
    </Container>
  )
}

export default App
