import React from 'react';
import './App.css';
import Listening from './Listening';
import { speechText } from './modules/WebSpeechApi'

const sentences = ['How do you know Mr Smith?', 'I am aho', 'You are aho']

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      isShowSentence: false,
    }
  }

  handleNextSentence() {
    this.setState({currentPage: this.state.currentPage+1})
    this.setState({isShowSentence: false})
    speechText(sentences[this.state.currentPage])
  }

  handleShowSentence() {
    this.setState({isShowSentence: true})
  }

  render() {
    return (
      <div>
        <Listening
          currentPage={this.state.currentPage}
          isShowSentence={this.state.isShowSentence}
          handleNextSentence={() => this.handleNextSentence()}
          handleShowSentence={() => this.handleShowSentence()}
          sentences={sentences}
        />
      </div>
    )  
  }
}

export default App;