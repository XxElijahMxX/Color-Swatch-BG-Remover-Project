var weather = {
    "apiKey": "6a0ef7e23d2076316f5f9bfa94a80e8d",
    fetchData: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + this.apiKey
        )
            .then((response) => response.json())
            .then((data) => console.log(data));
    },
    displayData: function(data) {

    }
};