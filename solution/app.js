const testingCenters = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    73.86709213256836,
                    18.520225315274104
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    73.84393125772476,
                    18.518264418446776
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    73.88936519622803,
                    18.500366063396207
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    73.85698556900024,
                    18.459358376662383
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {},
            "geometry": {
                "type": "Point",
                "coordinates": [
                    73.81359815597534,
                    18.49485145670361
                ]
            }
        }
    ]
};


function initMap() {
    getLocation((position) => {
        const whereIAm = { lat: 18.516036, lng: 73.856460 };
        //const whereIAm = {lat: position.coords.latitude, lng: position.coords.longitude};
        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: whereIAm
        });
        const marker = new google.maps.Marker({
            position: whereIAm,
            map,
            title: "You are here"
        });
        for (const testingCenter of testingCenters.features) {
            const centerPosition = {lat: testingCenter.geometry.coordinates[1], lng: testingCenter.geometry.coordinates[0]};
            const centerMarker = new google.maps.Marker({
                position: centerPosition,
                icon: {
                    path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                    scale: 3,
                    strokeColor: "#0000FF"
                },
                map: map
            });
            const centerCircle = new google.maps.Circle({
                strokeColor: "#000000",
                strokeOpacity: 0.8,
                strokeWeight: 1,
                fillColor: "#107e99",
                fillOpacity: 0.25,
                map,
                center: centerPosition,
                radius: 1000
            });
        }
    });
}


function getLocation(callback) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
    } else {
        alert("Geolocation is not supported by this browser");
    }
}
