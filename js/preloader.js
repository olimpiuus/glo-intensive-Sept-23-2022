const preloder = document.querySelector('.preloder')
preloder.classList.add('active')

const timer = setTimeout(() => {
    preloder.classList.remove('active')
}, 1000)