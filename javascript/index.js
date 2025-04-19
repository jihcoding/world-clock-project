function updateTime() {
  //Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (paris) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //  Tahiti
  let tahitiElement = document.querySelector("#tahiti");
  if (tahiti) {
    let tahitiDateElement = tahitiElement.querySelector(".date");
    let tahitiTimeElement = tahitiElement.querySelector(".time");
    let tahitiTime = moment().tz("Pacific/Tahiti");

    tahitiDateElement.innerHTML = tahitiTime.format("MMMM Do YYYY");
    tahitiTimeElement.innerHTML = tahitiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //  Manila
  let manilaElement = document.querySelector("#manila");
  if (manila) {
    let manilaDateElement = manilaElement.querySelector(".date");
    let manilaTimeElement = manilaElement.querySelector(".time");
    let manilaTime = moment().tz("Asia/Manila");

    manilaDateElement.innerHTML = manilaTime.format("MMMM Do YYYY");
    manilaTimeElement.innerHTML = manilaTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
     <h2>${cityName}</h2>
     <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
