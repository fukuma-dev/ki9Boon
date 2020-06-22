import React from 'react';
import Listening from './Listening';
import { speechText } from './modules/WebSpeechApi'
import styled from 'styled-components'

const Layout = styled.div`
  width: 350px;
  margin: 50px auto;
  padding: 20px;
  border: solid 3px #c09e90;
`

export class Lesson extends React.Component {
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
    speechText(this.props.sentences[this.state.currentPage])
  }

  handleShowSentence() {
    this.setState({isShowSentence: true})
  }

  render() {
    return (
      <Layout>
        <Listening
          currentPage={this.state.currentPage}
          isShowSentence={this.state.isShowSentence}
          handleNextSentence={() => this.handleNextSentence()}
          handleShowSentence={() => this.handleShowSentence()}
          sentences={this.props.sentences}
        />
      </Layout>
    )  
  }
}