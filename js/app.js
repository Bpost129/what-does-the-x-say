const foxSays = new Audio('../audio/fox.mp3')

const foxImg = document.querySelector('#fox')
const notFoxDiv = document.querySelector('#not-fox')

foxImg.addEventListener('click', (e) => {
  foxSays.volume = .04
  foxSays.play()
})

notFoxDiv.addEventListener('click', (e) => {
  if (e.target.id !== 'not-fox') {
    const audioEl = new Audio(`../audio/${e.target.id}.mp3`)
    audioEl.volume = .04
    audioEl.play()
  }
})