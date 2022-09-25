const modal = document.querySelector('.search-model')
const modalBtn = document.querySelector('.icon_search')
const modalCloseBtn = modal.querySelector('.search-close-switch')

modalBtn.addEventListener('click', () => { modal.style.display = 'initial' })
modalCloseBtn.addEventListener('click', () => { modal.style.display = 'none' })