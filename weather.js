const API_KEY ="603642ae93c9f686f91f8f82f0f537cf";



function onGeoOk(location){
console.log(location);
const lat =location.coords.latitude;
const lng =location.coords.longitude;
console.log("you live at",lat,lng);
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
fetch(url).then((Response) => Response.json()).then((data) =>{
    const weather = document.querySelector("#weather span:first-child");
    const city = document.querySelector("#weather span:last-child");
    weather.innerText = data.weather[0].main;
    city.innerText = data.name;
})
}
function onGeoError(){
    alert("We can't find your location");

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)
//위 코드는 두개의 함수를 필요로한다 1.잘 되었을때 나올 함수, 2.오류가 발생하였을때 나오는 함수/
