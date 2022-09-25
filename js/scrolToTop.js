const scrollToTop = (() => {
    const btnToTop = document.querySelector('#scrollToTopButton')

    btnToTop.addEventListener('click', (e) => {
        e.preventDefault()

        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
})()