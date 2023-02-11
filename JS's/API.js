function onSearch() {
    const key = 'a9jWZWAGcI4zxh3ItQmIGN9h9nhkjMTl';
    const query = document.getElementById('gif__search').value;
    const aside = document. querySelector('#aside');

    try {
        if (query == '') {
            throw new Error('Field is empty!');
        }
    } catch(error) {
        console.log(error);
    }

    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=5&offset=0&rating=g&lang=en`)
    .then(response => {
        {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Address is unavailable :((( ');
        }
    })
    .then(gif => {
        // for(g of gif.data) {
        //     console.log(g);
        // }
        // console.log(gif.data);
        //console.log(gif.data.length);

        for(let i = 0; i < gif.data.length; i++) {
            //gif__pic.src = gif.data[i].images['480w_still'].url;
            const div = document.createElement('div');
            div.className = "pics__container";
            div.innerHTML = `<img src='${gif.data[i].images.fixed_height.url}' />`;
            aside.append(div);
        }
    })
    .catch(error => alert(error))
    .finally(alert(`Work's done`));
}