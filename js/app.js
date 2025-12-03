const foxSays = new Audio('../audio/fox.mp3')

const foxImg = document.querySelector('#fox')

foxImg.addEventListener('click', (e) => {
  foxSays.volume = .04
  foxSays.play()
})