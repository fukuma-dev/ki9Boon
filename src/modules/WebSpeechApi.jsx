export function speechText(text) {
  const uttr = new SpeechSynthesisUtterance(text)
  uttr.lang = 'en-US'
  uttr.rate = 1.0
  uttr.pitch = 1.0
  speechSynthesis.speak(uttr)
}