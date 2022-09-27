const mainData = (() => {

    const generateDropdownList = (ganres) => {
        const dropdownBtn = document.querySelector('.header__menu .dropdown')
        ganres.forEach((ganre) => {
            dropdownBtn.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?gange=${ganre}">${ganre}</a></li>
            `)

        })
    }

    const renderTopViews = (arr) => {
        const topViewsContainer = document.querySelector('.filter__gallery')
        arr.forEach(element => {
            topViewsContainer.insertAdjacentHTML("beforeend", `
                <div class="product__sidebar__view__item set-bg" data-setbg="${element.image}";">
                    <div class="ep">${element.rating} / 10</div>
                    <div class="view"><i class="fa fa-eye"></i> ${element.views}</div>
                    <h5><a href="/anime-details.html">${element.title}</a></h5>
                </div>
             `)
        })

        topViewsContainer.querySelectorAll('.set-bg').forEach((el) => {
            const src = el.dataset.setbg
            el.style.backgroundImage = `url(${src})`
        })
    }


    const generateContainerByGanres = (data, ganres) => {
        const container = document.querySelector('.product-page.spad .col-lg-8')

        ganres.forEach((ganre) => {
            const blockTitle = document.createElement('div')
            const blockList = document.createElement('div')
            container.append(blockTitle)
            container.append(blockList)
            blockList.classList.add('row')

            blockTitle.insertAdjacentHTML('afterbegin', `
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-8">
                        <div class="section-title">
                            <h4>${ganre}</h4>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-4">
                        <div class="btn__all">
                            <a href="/categories.html?ganre=${ganre}" class="primary-btn">View All <span class="arrow_right"></span></a>
                        </div>
                    </div>
                 </div>
            `)


            data.filter(((item) => item.tags.includes(ganre))).forEach((el) => {
                const ganresTagsList = document.createElement('ul')

                el.tags.forEach((tag) => {

                    ganresTagsList.insertAdjacentHTML('afterbegin', `
                        <li>${tag}</li>
                    `)
                })

                blockList.insertAdjacentHTML('afterbegin', `
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="product__item">
                        <div class="product__item__pic set-bg" data-setbg="${el.image}">
                            <div class="ep">${el.rating} / 10</div>
                            <div class="view"><i class="fa fa-eye"></i> ${el.views}</div>
                        </div>
                        <div class="product__item__text">
                            ${ganresTagsList.outerHTML}
                            <h5><a href="/anime-details.html?id=${el.id}">${el.title}</a></h5>
                        </div>
                    </div>
                 </div>
                `)
            })

            blockList.querySelectorAll('.set-bg').forEach((el) => {
                const src = el.dataset.setbg
                el.style.backgroundImage = `url(${src})`
            })




        })
    }


    fetch('https://glo-intensive-sept-23-2022-default-rtdb.firebaseio.com/anime.json')
        .then((response) => response.json())
        .then((data) => {
            const ganres = new Set
            const ganreParam = new URLSearchParams(window.location.search).get('ganre')


            data.forEach((item) => {
                ganres.add(item.ganre)
            })

            renderTopViews(data.sort((a, b) => b.views - a.views).slice(0, 5))
            console.dir(ganreParam);
            if (ganreParam) {
                generateContainerByGanres(data, [ganreParam])
            } else {
                generateContainerByGanres(data, ganres)
            }
            generateDropdownList(ganres)
        })




})()