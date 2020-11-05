const API_URL = 'https://icanhazdadjoke.com/';

 const fetchJoke = () => {
    // Adicionar lógica aqui!
    const myObject = {
        method: 'GET',
        headers: { 'Accept': 'application/json' }
    };
    fetch(API_URL, myObject)
        .then(response => response.json())
        .then(data => {
            const jokerContainer = document.querySelector("#jokeContainer");
            const joke = document.createElement('p');
            joke.innerText = data.joke
            jokerContainer.appendChild(joke)
        });
};

window.onload = () => fetchJoke();



