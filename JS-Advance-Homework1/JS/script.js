let input = document.getElementById('input');
let button = document.getElementById('btn');
let printH1 = document.getElementById('secondH1');

let movies = [
    'Breaking Bad',
    'Scarface',
    'Spiderman',
    'Batman',
    'Superman',
    'Avatar',
    'Fast and furious',
    'Johny English',
    'Harry Poter',
    'Ubice mog oca',
    'Senke nad balkanom',
    'Zikina dinastija'
];

function checkMovie(movie){
    let lowerCaseMovies = movies.map(m => m.toLowerCase());
    let lowerCaseMovie = movie.toLowerCase();
    if(lowerCaseMovies.includes(lowerCaseMovie)){
        printH1.innerText = 'The movie can be rented';
        printH1.style.color = 'green';
    } else {
        printH1.innerText = 'The movie cant be rented'
        printH1.style.color = 'red';
    }
}

button.addEventListener('click', function(){
    checkMovie(input.value);

    input.value = '';
})

