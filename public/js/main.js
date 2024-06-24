/* --------------- Weather Web App  --------------------- */
let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("cityName");

//Make sure you have your own key.
let key = "50c8ba0e4b72b7e3d58be1b6c552d264";

let getWeather = () => {
  let cityValue = cityVal.value;
  if (cityValue.length == 0) {
    show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
  }
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    cityVal.value = "";
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        show.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
         
        <h4 class="desc">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
        <h1>${data.main.temp}  &#8451;</h1>
        <div class="temp_container">
         <div>
            <h4 class="title">min</h4>
            <h4 class="temp">${data.main.temp_min} &#8451;</h4>
         </div>
         <div>
            <h4 class="title">max</h4>
            <h4 class="temp">${data.main.temp_max} &#8451;</h4>
         </div>   
        </div>
        `;
      })
      .catch(() => {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
      });
  }
};
search.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
