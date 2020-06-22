import React from 'react'
// import PropTypes from 'prop-types'
import { SpeechButton } from './SpeechButton'
import { speechText } from './modules/WebSpeechApi'
import styled from 'styled-components'

const SentenceArea = styled.div`
  font-size: 20px;
  margin: 10px 0;
  padding: 20px 0;
`

class Listening extends React.Component {
  isShowListening = this.props.currentPage <= this.props.sentences.length
  componentDidMount() {
    speechText(this.props.sentences[this.props.currentPage-1])    
  }
  render() {
    return (
      <div>
        <p>問題: {this.props.currentPage}</p>
        <SentenceArea>
          <span style={{visibility: this.props.isShowSentence ? '' : 'hidden'}}>
            {this.props.sentences[this.props.currentPage-1]}
          </span>
        </SentenceArea>
        <SpeechButton text={this.props.sentences[this.props.currentPage-1]} buttonName="再生する"/>
        <button onClick={this.props.handleShowSentence}>答えを見る</button>
        <button onClick={this.props.handleNextSentence}>次の問題へ</button>
      </div>
    )
  }
}

// Listening.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   isShowSentence: PropTypes.bool.isRequired,
//   handleNextSentence: PropTypes.func.isRequired,
//   handleShowSentence: PropTypes.func.isRequired,
// };

export default Listening;