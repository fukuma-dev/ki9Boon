import React from 'react'
import { Lesson } from './Lesson'

const sentences = ['How do you know Mr Smith?', 'I am aho', 'You are aho']

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>ki9Boon!</h1>
        <Lesson sentences={sentences}/>
      </div>
    )  
  }
}

export default App;