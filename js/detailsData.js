const detailsData = (() => {
    const preloder = document.querySelector('.preloder')

    const generateDropdownList = (ganres) => {
        const dropdownBtn = document.querySelector('.header__menu .dropdown')
        ganres.forEach((ganre) => {
            dropdownBtn.insertAdjacentHTML('beforeend', `
                <li><a href="./categories.html?gange=${ganre}">${ganre}</a></li>
            `)

        })
    }

    const generateDetailContent = (arr, id) => {

        const itemDetail = arr.find(item => item.id == id)
        const imgBlock = document.querySelector('.anime__details__pic')
        const itemViews = imgBlock.querySelector('.view')
        console.log(itemViews);
        itemViews.innerHTML = ''
        itemViews.insertAdjacentHTML('afterbegin', `
                <i class="fa fa-eye"></i> ${itemDetail.views}
            `)
        const itemTitle = document.querySelector('.anime__details__title h3')
        const itemOriginTitle = document.querySelector('.anime__details__title span')
        const itemDescription = document.querySelector('.anime__details__text p')
        const widgetList = document.querySelectorAll('.anime__details__widget ul li')
        console.log(widgetList[0]);
        console.log(itemDetail);
        widgetList[0].insertAdjacentHTML('afterbegin', `
        <span>Date aired:</span> ${itemDetail.date}`)
        widgetList[1].insertAdjacentHTML('afterbegin', `<span>Rating:</span> ${itemDetail.rating}`)
        widgetList[2].insertAdjacentHTML('afterbegin', `<span>Genre:</span> ${itemDetail.tags.join(', ')}`)
        imgBlock.dataset.setbg = itemDetail.image
        itemTitle.textContent = itemDetail.title
        itemOriginTitle.textContent = itemDetail['original-title']
        itemDescription.textContent = itemDetail.description
        document.querySelectorAll('.set-bg').forEach((el) => {
            const src = el.dataset.setbg
            el.style.backgroundImage = `url(${src})`
        })
        const timer = setTimeout(() => {
            preloder.classList.remove('active')
        }, 500)
    }





    fetch('https://glo-intensive-sept-23-2022-default-rtdb.firebaseio.com/anime.json')
        .then((response) => response.json())
        .then((data) => {
            const ganres = new Set
            const idParam = new URLSearchParams(window.location.search).get('id')

            data.forEach((item) => {
                ganres.add(item.ganre)
            })
            generateDropdownList(ganres)


            if (idParam) {
                generateDetailContent(data, [idParam])
            } else {
                console.log('No anime');
            }
        })


    console.log('v');

})()