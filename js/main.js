const select = document.getElementById("countries");
const weatherResult = document.getElementById("weatherResult");

// Données météo simulées pour 7 jours
const fakeWeatherData = {
    "Paris": [
        {date:"Sun Aug 24", weather:"☀️ CLEAR", high:29, low:21},
        {date:"Mon Aug 25", weather:"☀️ CLEAR", high:29, low:18},
        {date:"Tue Aug 26", weather:"☀️ CLEAR", high:28, low:18},
        {date:"Wed Aug 27", weather:"☀️ CLEAR", high:27, low:17},
        {date:"Thu Aug 28", weather:"☀️ CLEAR", high:27, low:16},
        {date:"Fri Aug 29", weather:"☀️ CLEAR", high:30, low:16},
        {date:"Sat Aug 30", weather:"☀️ CLEAR", high:33, low:20},
    ],
    "Berlin": [
        {date:"Sun Aug 24", weather:"🌤️ PARTLY CLOUDY", high:25, low:18},
        {date:"Mon Aug 25", weather:"☁️ CLOUDY", high:23, low:16},
        {date:"Tue Aug 26", weather:"☀️ CLEAR", high:26, low:17},
        {date:"Wed Aug 27", weather:"🌦️ RAIN", high:22, low:15},
        {date:"Thu Aug 28", weather:"☀️ CLEAR", high:27, low:16},
        {date:"Fri Aug 29", weather:"🌤️ PARTLY CLOUDY", high:28, low:17},
        {date:"Sat Aug 30", weather:"☀️ CLEAR", high:30, low:18},
    ],
    "Rome": [
        {date:"Sun Aug 24", weather:"☀️ CLEAR", high:31, low:22},
        {date:"Mon Aug 25", weather:"☀️ CLEAR", high:32, low:21},
        {date:"Tue Aug 26", weather:"🌤️ PARTLY CLOUDY", high:30, low:20},
        {date:"Wed Aug 27", weather:"☀️ CLEAR", high:33, low:22},
        {date:"Thu Aug 28", weather:"☀️ CLEAR", high:34, low:23},
        {date:"Fri Aug 29", weather:"☀️ CLEAR", high:32, low:22},
        {date:"Sat Aug 30", weather:"☀️ CLEAR", high:33, low:23},
    ],
    "Madrid": [
        {date:"Sun Aug 24", weather:"☀️ CLEAR", high:33, low:23},
        {date:"Mon Aug 25", weather:"☀️ CLEAR", high:34, low:22},
        {date:"Tue Aug 26", weather:"☀️ CLEAR", high:35, low:23},
        {date:"Wed Aug 27", weather:"🌤️ PARTLY CLOUDY", high:34, low:22},
        {date:"Thu Aug 28", weather:"☀️ CLEAR", high:36, low:24},
        {date:"Fri Aug 29", weather:"☀️ CLEAR", high:35, low:23},
        {date:"Sat Aug 30", weather:"☀️ CLEAR", high:36, low:25},
    ]
};

select.addEventListener("change", () => {
    const cityName = select.value;
    const data = fakeWeatherData[cityName];

    if (!data) {
        weatherResult.innerHTML = "<p>❌ Impossible de récupérer la météo.</p>";
        return;
    }

    weatherResult.innerHTML = ""; // reset
    data.forEach(day => {
        const card = document.createElement("div");
        card.classList.add("weather-card");

        card.innerHTML = `
            <div class="date">${day.date}</div>
            <div class="icon">${day.weather.split(" ")[0]}</div>
            <div class="temp">
                High: ${day.high} ºC<br>
                Low: ${day.low} ºC
            </div>
        `;
        weatherResult.appendChild(card);
    });
});
