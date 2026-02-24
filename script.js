const movies = [
  {title:"Avengers", image:"https://via.placeholder.com/300x400"},
  {title:"Inception", image:"https://via.placeholder.com/300x400"},
  {title:"Interstellar", image:"https://via.placeholder.com/300x400"},
  {title:"Joker", image:"https://via.placeholder.com/300x400"},
  {title:"Batman", image:"https://via.placeholder.com/300x400"},
  {title:"Spider-Man", image:"https://via.placeholder.com/300x400"}
];

const movieList = document.getElementById("movieList");

function showMovies(data){
  movieList.innerHTML="";
  data.forEach(movie=>{
    movieList.innerHTML+=`
      <div class="card" onclick="openMovie('${movie.title}','${movie.image}')">
        <img src="${movie.image}">
        <h3>${movie.title}</h3>
      </div>
    `;
  });
}

function openMovie(title,image){
  window.location.href=`movie.html?title=${title}&image=${image}`;
}

showMovies(movies);

document.getElementById("search").addEventListener("keyup",function(){
  const value=this.value.toLowerCase();
  const filtered=movies.filter(m=>m.title.toLowerCase().includes(value));
  showMovies(filtered);
});