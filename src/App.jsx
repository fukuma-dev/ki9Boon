import React from 'react'
import { Lesson } from './Lesson'
import { Header } from './Header'

const sentences = [
  "I hope you have a family business you can push him into when he leaves school because he sure as heck won't  get a job anywhere else.",
  'How do you know Mr Smith?',
  'I am aho',
  'You are aho'
]

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