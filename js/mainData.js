const mainData = (() => {


    const renderTopViews = (arr) => {
            const topViewsContainer = document.querySelector('.filter__gallery')
            topViewsContainer.innerHTML = ''
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
                console.log(el);
                const src = el.dataset.setbg
                el.style.backgroundImage = `url(${src})`
            })
        }
        // const topViewsContainer = document.querySelector('.filter__gallery')




    fetch('https://glo-intensive-sept-23-2022-default-rtdb.firebaseio.com/anime.json')
        .then((response) => response.json())
        .then((data) => renderTopViews(data.sort((a, b) => b.views - a.views).slice(0, 5)))



})()