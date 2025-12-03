const foxSays = new Audio('../audio/fox.mp3')

const foxImg = document.querySelector('#fox')
const notFoxDiv = document.querySelector('#not-fox')

foxImg.addEventListener('click', (e) => {
  foxSays.volume = .04
  foxSays.play()
})