import React from 'react'
import { Lesson } from './Lesson'
import { Header } from './Header'

const sentences = ['How do you know Mr Smith?', 'I am aho', 'You are aho']

class App extends React.Component {
  render() {
    return (
      <div>
        <Header headerTitle="ki9Boon!"/>        
        <Lesson sentences={sentences}/>
      </div>
    )  
  }
}

export default App;