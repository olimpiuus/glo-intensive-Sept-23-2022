const bgImageElem = document.querySelectorAll('.set-bg')

bgImageElem.forEach((el) => {
    const src = el.dataset.setbg
    el.style.backgroundImage = `url(${src})`
})