import React from 'react';
import './App.css';
import Paginator from './Paginator';

const sentences = ['How do you know Mr Smith?', 'I am aho', 'You are aho']

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      showAnswer: false,
    }
  }

  handleNext() {
    this.setState({currentPage: this.state.currentPage+1})
    this.setState({showAnswer: false})
  }

  handleShowAnswer() {
    this.setState({showAnswer: true})
  }

  render() {
    return (
      <div>
        <Paginator 
          currentPage={this.state.currentPage}
          pageList={this.state.pageList}
          isShowAnswer={this.state.showAnswer}
          handleNext={e => this.handleNext(e)}
          handleShowAnswer={e => this.handleShowAnswer(e)}
          sentences={sentences}
        />
      </div>
    )  
  }
}

export default App;