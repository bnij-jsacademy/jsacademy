function giphySearch(tag, target) {
    target.src = "assets/preloader.gif";
    var url = "https://api.giphy.com/v1/gifs/random?api_key=2730ddf7b546432abe46993b59d23b9c&tag=" + tag + "&rating=R";

    fetch(url)
        .then(function(response) { 
            return response.json(); 
        })
        .then(function(data) { 
            target.src = data.data.image_url;
        })
        .catch(function(error) {
            console.log(error);
        });
}