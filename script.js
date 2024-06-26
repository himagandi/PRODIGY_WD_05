
function app() {
    const apiKey = "944f336c8ecc48e59b174147211503";
    

    let search_input = document.querySelector('.search');
   
    let city_name = document.querySelector('.city');
    let region_name = document.querySelector('.region');
    let country_name = document.querySelector('.country');
    let tz_id_name = document.querySelector('.tz_id');
    let is_day_name = document.querySelector('.is_day');
    let date = document.querySelector('.date'); let temp = document.querySelector('.temp');
    let weather = document.querySelector('.weather');
    let condition=document.querySelector('.condition');
    let btn = document.querySelector('.btn');
    let icon  =document.querySelector('.weather-icon');


    async function getWeather() {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${search_input.value}&aqi=no
    `)
        const data = await res.json();
        let today = new Date(data.location.localtime)
        today = today.toLocaleString('default', { month: 'long', weekday:"short", hour:"numeric", minute:"2-digit", second:"2-digit" })
        country_name.innerHTML=`Country:${data.location.country}`;
        region_name.innerHTML=`region:${data.location.region}`;
        city_name.innerHTML = "City name:"+data.location.name;
        date.innerHTML = `Time: ${today}, ${data.location.localtime}`;
        temp.innerHTML=  "Temperature: " + data.current.temp_c + "°C";
        weather.innerHTML =  data.current.temp_c < 19 ?  "Weather: Rainy" : "Weather: Sunny";
        condition.innerHTML="Condition:"+ data.current.condition.text + " ";
        icon.src = data.current.condition.icon;
       
        // temp range
        // am/pm
        // month
       

    }
    
  
   

    btn.addEventListener('click', getWeather);
}

window.addEventListener('DOMContentLoaded', app);