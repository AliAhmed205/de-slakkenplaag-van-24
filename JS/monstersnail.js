const secondContainer = document.getElementById('container-2')
const actionBtn = document.getElementById('start')
const evilBG = document.getElementById('evil-bg')
const snailContainer = document.getElementById('container-3')

actionBtn.addEventListener('click', ()=>{
  secondContainer.classList.add('hide')
  evilBG.classList.add('reveal')
  snailContainer.classList.add('reveal')
})