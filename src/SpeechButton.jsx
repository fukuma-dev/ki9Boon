import React from 'react'
import { speechText } from './modules/WebSpeechApi'

export function SpeechButton(props) {
  function handleSpeech(text) {
      speechText(text)
  }
    
  return <button onClick={() => handleSpeech(props.text)}>{props.buttonName}</button>
}