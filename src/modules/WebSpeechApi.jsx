export function speechText(text) {
  const uttr = new SpeechSynthesisUtterance(text)
  uttr.lang = 'en-US'
  uttr.rate = 1.2
  uttr.pitch = 1.2
  speechSynthesis.speak(uttr)
}