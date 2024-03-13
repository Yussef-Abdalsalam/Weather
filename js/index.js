let todey = document.querySelector("#todey")
let weather = document.querySelector("#weather")
let imgdey = document.querySelector("#imgdey")
let dey1 = document.querySelector("#dey1")
let dey2 = document.querySelector("#dey2")
let imgdey1 = document.querySelector("#imgdey1")
let dey3 = document.querySelector("#dey3")
let dey4 = document.querySelector("#dey4")
let imgdey2 = document.querySelector("#imgdey2")
let todeay1 = document.querySelector(".todeay1")
let todeay2 = document.querySelector(".todeay2")
let todeay3 = document.querySelector(".todeay3")
let Mist1 = document.querySelector(".Mist1")
let Mist2 = document.querySelector(".Mist2")
let location1 = document.querySelector(".location1")
// inpot
let search = document.querySelector("#search");
let submit = document.querySelector("#submit");
let datesrsh = [];

/////////////////////||||****  searchdata  ****||||/////////////////////
function searchdata() {
    let sersh = {
        sersh1: search.value
    }
    datesrsh = sersh.sersh1;
    getData(datesrsh)
}

let allData = [];
getData(`egypt`)
/////////////////////||||****  getData  ****||||/////////////////////
function getData(key) {
    let myRequest = new XMLHttpRequest();
    myRequest.open("GET", `https://api.weatherapi.com/v1/forecast.json?key=b161feb1f1984ff7b5702936233012&q=${key}&days=7`);
    myRequest.send();
    myRequest.addEventListener("readystatechange", function () {
        if (myRequest.readyState === 4) {
            console.log(JSON.parse(myRequest.response));
            allData = JSON.parse(myRequest.response);
            display()
        }
    })
}

/////////////////////||||****  display  ****||||/////////////////////
function display() {
    /////////////////////****  today  ****/////////////////////

    let cartoon = ``;
    let cartoon1 = ``;
    let cartoon2 = ``;
    let cartoon11 = ``;
    let cartoon88 = ``;
    cartoon += `<div id="todey" class="num px-4">${allData.current.temp_c}<sup>o</sup>C</div>`
    cartoon1 += `<div id="weather" class="px-4 py-2 Mist">${allData.current.condition.text}</div>`
    cartoon2 += `<div id="imgdey" class=" "><img src="${allData.current.condition.icon}" alt=""></div>`
    cartoon11 += `<div class="todeay1">${allData.forecast.forecastday[0].date}</div>`
    cartoon88 += `<div class="location location1 pt-2 px-4 ">${allData.location.name}</div>`
    todey.innerHTML = cartoon;
    weather.innerHTML = cartoon1;
    imgdey.innerHTML = cartoon2;
    todeay1.innerHTML = cartoon11;
    location1.innerHTML = cartoon88;
    /////////////////////****  after today  ****/////////////////////

    let cartoon3 = ``;
    let cartoon4 = ``;
    let cartoon5 = ``;
    let cartoon22 = ``;
    let cartoon00 = ``;
    cartoon3 += `<div id="dey1" class=" text-white px-4">${allData.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>`
    cartoon4 += `<div id="dey2" class="textwat px-4">${allData.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></div>`
    cartoon5 += `<div id="imgdey1" class="mt-5 px-5 text-center"><img src="${allData.forecast.forecastday[1].day.condition.icon}" alt=""></div>`
    cartoon00 += `<div class="Mist11 Mist1">${allData.forecast.forecastday[1].day.condition.text}</div>`
    cartoon22 += `<div class="todeay2">${allData.forecast.forecastday[1].date}</div>`
    dey1.innerHTML = cartoon3;
    Mist1.innerHTML = cartoon00;
    dey2.innerHTML = cartoon4;
    imgdey1.innerHTML = cartoon5;
    todeay2.innerHTML = cartoon22;
    /////////////////////****  After after today  ****/////////////////////

    let cartoon6 = ``;
    let cartoon7 = ``;
    let cartoon8 = ``;
    let cartoon33 = ``;
    let cartoonnn = ``;
    cartoon6 += `<div id="dey3" class="text-white px-4">${allData.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>`
    cartoon7 += `<div id="dey4" class="textwat px-4">${allData.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></div>`
    cartoon8 += `<div id="imgdey2" class="mt-5 px-5 text-center"><img src="${allData.forecast.forecastday[2].day.condition.icon}" alt=""></div>`
    cartoonnn += `<div class="Mist2 Mist11">${allData.forecast.forecastday[2].day.condition.text}</div>`
    cartoon33 += `<div class="todeay3">${allData.forecast.forecastday[2].date}</div>`
    dey3.innerHTML = cartoon6;
    dey4.innerHTML = cartoon7;
    imgdey2.innerHTML = cartoon8;
    todeay3.innerHTML = cartoon33;
    Mist2.innerHTML = cartoonnn;
}

/////////////////////****  taem  ****/////////////////////
function getDate() {
    let date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    if (sec < 10) {
        sec = `0${sec}`
    }
    if (min < 10) {
        min = `0${min}`
    }
    if (hours > 12) {
        hours = hours - 12
    }
    document.querySelector(".hh2").innerHTML = `${hours}:${min}:${sec}`
    setInterval(function () {
        getDate()
    }, 1000)
}
getDate()