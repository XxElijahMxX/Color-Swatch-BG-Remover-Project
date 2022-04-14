// defining my variable for my api and api key
const api = {
    key: "6a0ef7e23d2076316f5f9bfa94a80e8d",
    url: "https://api.openweathermap.org/data/2.5/"
}

// setting up the search button from user input
const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
btn.addEventListener("click", getUserInput);
//function to prevent page refresh and to log the search
function getUserInput (click) {
    click.preventDefault();
    if (click.type == "click") {
        getData(search.value);
        console.log(search.value);
    }
}
// this fetches the data using specific parameters
function getData() {
    fetch(`${api.url}weather?q=${search.value}&units=metric&appid=${api.key}`)
    .then(response => {
        return response.json();
    }).then(displayWeather);    
}
// this function displays the information on the page and writes it as HTML elements
function displayWeather (response) {
    console.log(response);
    // the returns an invalid city response if user inputs a non city search
    if (response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "This is not a valid city";
        search.value = "";
    } else {
        // this defines a city variable and writes the city and country on the page
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        // this defines the temperature variable and writes the fetched parameer for the temp on the page in celsius
        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°</span>C`;

        // this defines the feel like variable and writes the parameter for feels like to the page in celsius
        const feelsLike =document.querySelector(".feels-like");
        feelsLike.innerHTML = ` Feels Like: ${Math.round(response.main.feels_like)}<span>°</span>C`;
        
    }
}


const result = document.querySelector("#result");
const adviceBtn = document.querySelector("#getRandom");


fetch("https://api.adviceslip.com/advice").then(response => {
    return console.log(response.json());
}).then(adviceRandom => {
    console.log(adviceRandom);
})