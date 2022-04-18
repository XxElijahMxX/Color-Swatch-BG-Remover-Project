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

function displayWeather (response) {
    console.log(response);
    if (response.cod === "404") {
        const error = document.querySelector(".error");
        error.textContent = "This is not a valid city";
        search.value = "";
    } else {
        const city = document.querySelector(".city");
        city.innerText = `${response.name}, ${response.sys.country}`;

        const temp = document.querySelector(".temp");
        temp.innerHTML = `Temp: ${Math.round(response.main.temp)} <span>°</span>C`;

        const feelsLike =document.querySelector(".feels-like");
        feelsLike.innerHTML = ` Feels Like: ${Math.round(response.main.feels_like)}<span>°</span>C`;
        
        const e = document.querySelector(".error");

        // remove error message
        e.parentElement.removeChild(e);
        
        
    }
}
// defining these variables attached to coresponding ids
const results = document.querySelector("#result");
const adviceBtn = document.querySelector("#getRandom");
//fetch request to url that then returns a response with an object then inserting the object on the page
fetch("https://api.adviceslip.com/advice")
.then(response => {
    return response.json();
}).then(adviceRandom => {
    const randomObj = adviceRandom.slip;
    results.innerHTML = `<p>${randomObj.advice}</p>`;
    console.log(adviceRandom);
})

 //passing a particular weather info to a particular element
// weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
 //weatherPart.querySelector(".weather").innerText = description;
 //weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
 //weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
 //weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
 //infoTxt.classList.remove("pending", "error");
 //infoTxt.innerText = "";
 //inputField.value = "";
// wrapper.classList.add("active");


