const mainData = (() => {
    fetch('https://glo-intensive-sept-23-2022-default-rtdb.firebaseio.com/anime.json')
        .then((response) => response.json())
        .then((data) => console.log(data))
})()