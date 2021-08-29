fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef")
.then(res => res.json())
.then(data => setMovies(data.results))


const setMovies = (movies) => {
    const movieContainer = document.getElementById('movie-container')
    for(const movie of movies) {
        const movieBox = document.createElement('div')
        movieBox.classList.add("col-md-3")
        const imageUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path
        console.log(imageUrl)
        movieBox.innerHTML = `
            <div class="shadow rounded p-3 m-2">
                <img class="img-fluid" src=${imageUrl}>
                <h3>${movie.title}</h3>
                <p>${movie.overview.slice(0, 200)}</p>
            </div>
        `
        movieContainer.appendChild(movieBox)
        console.log(movie)
    }
}