// This example displays a marker in Pune.
function initMap() {
    const pune = { lat: 18.516036, lng: 73.856460 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: pune
    });
      const marker = new google.maps.Marker({
        position: pune,
        map,
        title: "Pune (India)"
    });
}
