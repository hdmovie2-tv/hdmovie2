/* Intro Hide */
setTimeout(()=>{
document.querySelector(".intro").style.display="none";
},2500);

/* Movies */
const movies=[
{image:"https://via.placeholder.com/400x600", trailer:"https://www.youtube.com/embed/eOrNdBpGMv8"},
{image:"https://via.placeholder.com/400x600", trailer:"https://www.youtube.com/embed/YoHD9XEInc0"},
{image:"https://via.placeholder.com/400x600", trailer:"https://www.youtube.com/embed/zSWdZVtXT7E"}
];

const movieList=document.getElementById("movieList");
const carousel=document.getElementById("carousel");

movies.forEach(movie=>{
movieList.innerHTML+=`
<div class="card" style="background-image:url('${movie.image}')" onclick="openModal('${movie.trailer}')"></div>
`;

carousel.innerHTML+=`
<img src="${movie.image}">
`;
});

function openModal(link){
document.getElementById("modal").style.display="flex";
document.getElementById("trailer").src=link;
}

function closeModal(){
document.getElementById("modal").style.display="none";
document.getElementById("trailer").src="";
}

/* Theme Toggle */
function toggleTheme(){
document.body.classList.toggle("light");
}

/* GSAP Animation */
gsap.from(".hero h1",{y:-100,opacity:0,duration:1.5});
gsap.from(".carousel img",{opacity:0,stagger:0.3,duration:1});
gsap.from(".card",{opacity:0,stagger:0.2,duration:1});
