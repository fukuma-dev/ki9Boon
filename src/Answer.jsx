import React from 'react'

export class Answer extends React.Component {
    showAnswer() {
        this.setState({showAnswer: true})
    }
    
    render() {
        return (
            <div>
                <p style={{ display: this.state.showAnswer ? '' : 'none' }}>{ this.props.text }</p>
                <button onClick={() => this.showAnswer()}>showAnswer</button>
            </div>
        )
    }
}