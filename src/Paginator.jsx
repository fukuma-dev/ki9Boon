import React from 'react';
import PropTypes from 'prop-types';
import { Player } from './Player'

class Paginator extends React.Component {
  render() {
    return (
      <div>
        <span id="current-page-num">No.{this.props.currentPage}</span>
        <Player text={this.props.sentences[this.props.currentPage-1]}/>
        <div>
            <p style={{ display: this.props.isShowAnswer ? '' : 'none' }}>
              {this.props.sentences[this.props.currentPage-1]}
            </p>
            <button onClick={this.props.handleShowAnswer}>showAnswer</button>
        </div>
        <button onClick={this.props.handleNext}>Next</button>
      </div>
    )
  }
}

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  isShowAnswer: PropTypes.bool.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleShowAnswer: PropTypes.func.isRequired,
};

export default Paginator;