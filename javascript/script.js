const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
const API_KEY = "47c87ece2cf180db7119b858d154af4c";


const getCityCoordinates = () => {
    const cityName = cityInput.value.trim();
    if(!cityName) return;
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;

    fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
        console.log(data);
    }).catch(() => {
         alert("Erro system");
    });
}

searchButton.addEventListener("click" , getCityCoordinates);