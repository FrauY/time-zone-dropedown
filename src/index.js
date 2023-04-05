function showSelectedCity(event) {
  if (event.target.value.length > 0) {
    let nowMoment = moment()
      .tz(event.target.value)
      .format(`dddd, MMMM D, YYYY HH:mm A `);
    alert(`It is ${nowMoment} in ${event.target.value}`);
  }
}

let city = document.querySelector("#cities");
city.addEventListener("change", showSelectedCity);
