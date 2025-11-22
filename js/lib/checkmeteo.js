function checkmeteo() {

    const url = "https://api.open-meteo.com/v1/meteofrance?latitude=48.85&longitude=2.35&current_weather=true";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            document.getElementById('temperature').textContent = `${data.current_weather.temperature}°C`;
            console.log(getCityCountry(data.Latitude, data.longitude))
        })
        .catch(error => {
            console.error(error);
        });

}

function getCityCountry(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const city = data.address.city || data.address.town || data.address.village || "";
            const country = data.address.country || "";
            console.log(`Ville : ${city}, Pays : ${country}`);
            document.getElementById('ville').textContent = city;
            document.getElementById('pays').textContent = country;
        })
        .catch(error => console.error(error));
}
export { checkmeteo }