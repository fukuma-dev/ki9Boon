import React from 'react'

export function Player(props) {
    function handlePlay(text) {
        const uttr = new SpeechSynthesisUtterance(text)
        uttr.lang = 'en-US'
        uttr.rate = 1.5
        uttr.pitch = 1.2
        speechSynthesis.speak(uttr)
    }
    
    return <button onClick={() => handlePlay(props.text)}>Play</button>
}