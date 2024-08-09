let URL = "https://api.openweathermap.org/data/2.5/weather?q=islamabad&appid=5f2995c25b461132eb532508634e8002&units=metric";

let input = document.querySelector("#input");
let search = document.querySelector("#search");
let wind = document.querySelector(".wind");
let humidity = document.querySelector(".humidity");
let temp = document.querySelector(".temp");
let city = document.querySelector(".city");

search.addEventListener("click", () => {
    let newData = input.value;
    URL = `https://api.openweathermap.org/data/2.5/weather?q=${newData}&appid=5f2995c25b461132eb532508634e8002&units=metric`;
    getData();
});

let getData = async () => {
    let response = await fetch(URL);
    let data = await response.json();
    wind.innerText = data.wind.speed + " km/h";
    humidity.innerText = data.main.humidity + " %";
    temp.innerText = Math.floor(data.main.temp) + " °C";
    city.innerText = data.name;
    input.value = '';
};

getData(); 
