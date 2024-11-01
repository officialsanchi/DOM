const API_KEY = "api_key=717ccf6765dcaa577801cadcc372f394";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_URL =  `${BASE_URL}movie/popular?${API_KEY}`;
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
const movieMainContainer = document.querySelector(".movieMainContainer");
const SEARCHMOVIEURL = `${BASE_URL}search/movie?${API_KEY}`
console.log(movieMainContainer)
console.log(API_URL);



// const getMovies = (url)=>{
//     fetch(url)
//     .then((response)=> response.json())
//     .then((date)=>{console.log(data)})
//     .catch((error)=>console.log(error))
   
// }

const getMovies = async (url)=>{
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log (data.results)
        showMovies(data.results)
    }catch(error){
        console.log(error)
    }
}
getMovies(API_URL)
 function showMovies(movies){
movieMainContainer.innerHTML = '';

    movies.forEach(movie => {
        const {overiew ,title, vote_average, poster_path} = movie
        // console.log(vote_average)
        // console.log(overiew)
        // console.log(poster_path)
        // console.log(title)
const movieElement = document.createElement('div');
movieElement.classList.add('movie');
movieElement.innerHTML = `
<div>
            <img src = "${IMAGE_URL}${poster_path}"alt = "image">
            </div>    
            <div class = "titlerating">
                <div class = "own">
                    <span>${title}</span>
                    <span>${vote_average}</span>
                </div>
            </div>
            <div class = "overview">
                <h2>Overview</h2>
                <p>${overiew} </p>
            </div>
`    
movieMainContainer.appendChild(movieElement)
           });
          
 }
 const searchMovieForm = document.querySelector('.search')
    // console.log(searchMovieForm);


    searchMovieForm.addEventListener('keyup',(event)=>{
        event.preventDefault();
        const inputValue = event.target.value
        console.log(inputValue);

        if(inputValue){
            const searchUrl = SEARCHMOVIEURL + "&query=" + inputValue
            console.log(searchUrl)
            getMovies(searchUrl)
        }else{
            getMovies(API_URL)
        }
        
    })
