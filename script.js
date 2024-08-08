const button = document.getElementById("search-button");
const input = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(cityName) {
  const promise =
    await fetch(`http://api.weatherapi.com/v1/current.json?key=f69a14ec8af8407e899140206243007&q=${cityName}&aqi=yes
`);
  return await promise.json();
}
button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  console.log(result);
  cityName.innerText = `Location: ${result.location.name}, ${result.location.region}`;
  cityTime.innerText = `Date: ${result.location.localtime}`;
  cityTemp.innerText = `Temperature: ${result.current.temp_c} °C`;
});
