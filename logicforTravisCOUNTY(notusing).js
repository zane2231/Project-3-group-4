Travis_countyURL = "https://raw.githubusercontent.com/Charlie-Henry/Travis_County_Turnout/main/Travis_County_Election_Turnout.geojson";

function TravisCountyMap() {

    var myMap = L.map("map", {
        center: [30.2672, 97.7431],
        zoom: 8,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 10,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
    }).addTo(myMap);

    // Creating geojson layer
    d3.json(Travis_countyURL, function (data) {
        L.geoJson(data, {
            // Passing in our style object
            style: function(feature) {
              return {
                color: "white",
                // Call the chooseColor() function to decide which color to color our county.
                fillColor: chooseColor(feature.properties.CNTY_NM),
                fillOpacity: .75,
                weight: 1.5
              };
          }}).addTo(myMap);
  });
