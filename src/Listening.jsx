import React from 'react';
import PropTypes from 'prop-types';
import { PlayButton } from './PlayButton'

class Listening extends React.Component {
  isShowListening = this.props.currentPage <= this.props.sentences.length
  render() {
    return (
      <div>
        <p>問題: {this.props.currentPage}</p>
        <div>
          <p style={this.textArea}>
            <span style={{display: this.props.isShowSentence ? '' : 'none'}}>
              {this.props.sentences[this.props.currentPage-1]}
            </span>
          </p>
        </div>
        <PlayButton text={this.props.sentences[this.props.currentPage-1]}/>
        <button onClick={this.props.handleShowSentence}>答えを見る</button>
        <button onClick={this.props.handleNextSentence}>次の問題へ</button>
      </div>
    )
  }
}

Listening.propTypes = {
  currentPage: PropTypes.number.isRequired,
  isShowSentence: PropTypes.bool.isRequired,
  handleNextSentence: PropTypes.func.isRequired,
  handleShowSentence: PropTypes.func.isRequired,
};

export default Listening;