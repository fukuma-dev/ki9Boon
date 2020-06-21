import React from 'react'
import { speechText } from './modules/WebSpeechApi'

export function PlayButton(props) {
    function handlePlay(text) {
        speechText(text)
    }
    
    return <button onClick={() => handlePlay(props.text)}>再生</button>
}