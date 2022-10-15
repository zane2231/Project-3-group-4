//https://github.com/HandsOnDataViz/leaflet-map-polygon-hover
//^^link for over over info thing

// Creating the map object
var myMap = L.map("map", {
    center: [31, -100.0059],
    zoom: 6
  });

  //creating the legend and setting its location
  var legend = L.control({position:"bottomright"});

  //adding the color squares
  legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "legend")
      div.innerHTML += '<h1><span>Texas County: 2020 Election Winners</span><br></h1>';
      div.innerHTML += '<i style="background: red"></i><span>REPUBLICAN</span><br>';
      div.innerHTML += '<i style="background: blue"></i><span>DEMOCRAT</span><br>';
      return div;
  };
  legend.addTo(myMap);

  var geojson;
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

  //link to geojson file with tx counties
  var link = 'https://raw.githubusercontent.com/kconcepcion/test1/main/Texas_County_Boundaries.geojson';
  
  //link to json file with tx county winners
  var link1 = 'https://raw.githubusercontent.com/zane2231/Project-3-group-4-/main/Resources/COUNTY_CLEANUP_NO_TOTALS.js.json'


  //CNTY_NM - variable name

  //function that reads the county names gives the winning party
  function chooseColor(CNTY_NM) {
    if (CNTY_NM == "Anderson") return "red";
    else if (CNTY_NM == "Andrews") return "red";
    else if (CNTY_NM == "Aransas") return "red";
    else if (CNTY_NM == "Archer") return "red";
    else if (CNTY_NM == "Armstrong") return "red";
    else if (CNTY_NM == "Angelina") return "red";
    else if (CNTY_NM == "Atascosa") return "red";
    else if (CNTY_NM == "Austin") return "red";
    else if (CNTY_NM == "Bailey") return "red";
    else if (CNTY_NM == "Bandera") return "red";
    else if (CNTY_NM == "Bastrop") return "red";
    else if (CNTY_NM == "Baylor") return "red";
    else if (CNTY_NM == "Bee") return "red";
    else if (CNTY_NM == "Bell") return "red";
    else if (CNTY_NM == "Bexar") return "blue";
    else if (CNTY_NM == "Blanco") return "red";
    else if (CNTY_NM == "Borden") return "red";
    else if (CNTY_NM == "Bosque") return "red";
    else if (CNTY_NM == "Bowie") return "red";
    else if (CNTY_NM == "Brazoria") return "red";
    else if (CNTY_NM == "Brazos") return "red";
    else if (CNTY_NM == "Brewster") return "red";
    else if (CNTY_NM == "Briscoe") return "red";
    else if (CNTY_NM == "Brooks") return "blue";
    else if (CNTY_NM == "Brown") return "red";
    else if (CNTY_NM == "Burleson") return "red";
    else if (CNTY_NM == "Burnet") return "red";
    else if (CNTY_NM == "Caldwell") return "red";
    else if (CNTY_NM == "Calhoun") return "red";
    else if (CNTY_NM == "Callahan") return "red";
    else if (CNTY_NM == "Cameron") return "blue";
    else if (CNTY_NM == "Camp") return "red";
    else if (CNTY_NM == "Carson") return "red";
    else if (CNTY_NM == "Cass") return "red";
    else if (CNTY_NM == "Castro") return "red";
    else if (CNTY_NM == "Chambers") return "red";
    else if (CNTY_NM == "Cherokee") return "red";
    else if (CNTY_NM == "Childress") return "red";
    else if (CNTY_NM == "Clay") return "red";
    else if (CNTY_NM == "Cochran") return "red";
    else if (CNTY_NM == "Coke") return "red";
    else if (CNTY_NM == "Coleman") return "red";
    else if (CNTY_NM == "Collin") return "red";
    else if (CNTY_NM == "Collingsworth") return "red";
    else if (CNTY_NM == "Colorado") return "red";
    else if (CNTY_NM == "Comal") return "red";
    else if (CNTY_NM == "Comanche") return "red";
    else if (CNTY_NM == "Concho") return "red";
    else if (CNTY_NM == "Cooke") return "red";
    else if (CNTY_NM == "Coryell") return "red";
    else if (CNTY_NM == "Cottle") return "red";
    else if (CNTY_NM == "Crane") return "red";
    else if (CNTY_NM == "Crockett") return "red";
    else if (CNTY_NM == "Crosby") return "red";
    else if (CNTY_NM == "Culberson") return "blue";
    else if (CNTY_NM == "Dallam") return "red";
    else if (CNTY_NM == "Dallas") return "blue";
    else if (CNTY_NM == "Dawson") return "red";
    else if (CNTY_NM == "Deaf Smith") return "red";
    else if (CNTY_NM == "Delta") return "red";
    else if (CNTY_NM == "Denton") return "red";
    else if (CNTY_NM == "De Witt") return "red";
    else if (CNTY_NM == "Dickens") return "red";
    else if (CNTY_NM == "Dimmit") return "blue";
    else if (CNTY_NM == "Donley") return "red";
    else if (CNTY_NM == "Duval") return "blue";
    else if (CNTY_NM == "Eastland") return "red";
    else if (CNTY_NM == "Ector") return "red";
    else if (CNTY_NM == "Edwards") return "red";
    else if (CNTY_NM == "El Paso") return "blue";
    else if (CNTY_NM == "Ellis") return "red";
    else if (CNTY_NM == "Erath") return "red";
    else if (CNTY_NM == "Falls") return "red";
    else if (CNTY_NM == "Fannin") return "red";
    else if (CNTY_NM == "Fayette") return "red";
    else if (CNTY_NM == "Fisher") return "red";
    else if (CNTY_NM == "Floyd") return "red";
    else if (CNTY_NM == "Foard") return "red";
    else if (CNTY_NM == "Fort Bend") return "blue";
    else if (CNTY_NM == "Franklin") return "red";
    else if (CNTY_NM == "Freestone") return "red";
    else if (CNTY_NM == "Frio") return "red";
    else if (CNTY_NM == "Gaines") return "red";
    else if (CNTY_NM == "Galveston") return "red";
    else if (CNTY_NM == "Garza") return "red";
    else if (CNTY_NM == "Gillespie") return "red";
    else if (CNTY_NM == "Glasscock") return "red";
    else if (CNTY_NM == "Goliad") return "red";
    else if (CNTY_NM == "Gonzales") return "red";
    else if (CNTY_NM == "Gray") return "red";
    else if (CNTY_NM == "Grayson") return "red";
    else if (CNTY_NM == "Gregg") return "red";
    else if (CNTY_NM == "Grimes") return "red";
    else if (CNTY_NM == "Guadalupe") return "red";
    else if (CNTY_NM == "Hale") return "red";
    else if (CNTY_NM == "Hall") return "red";
    else if (CNTY_NM == "Hamilton") return "red";
    else if (CNTY_NM == "Hansford") return "red";
    else if (CNTY_NM == "Hardeman") return "red";
    else if (CNTY_NM == "Hardin") return "red";
    else if (CNTY_NM == "Harris") return "blue";
    else if (CNTY_NM == "Harrison") return "red";
    else if (CNTY_NM == "Hartley") return "red";
    else if (CNTY_NM == "Haskell") return "red";
    else if (CNTY_NM == "Hays") return "blue";
    else if (CNTY_NM == "Hemphill") return "red";
    else if (CNTY_NM == "Henderson") return "red";
    else if (CNTY_NM == "Hidalgo") return "blue";
    else if (CNTY_NM == "Hill") return "red";
    else if (CNTY_NM == "Hockley") return "red";
    else if (CNTY_NM == "Hood") return "red";
    else if (CNTY_NM == "Hopkins") return "red";
    else if (CNTY_NM == "Houston") return "red";
    else if (CNTY_NM == "Howard") return "red";
    else if (CNTY_NM == "Hudspeth") return "red";
    else if (CNTY_NM == "Hunt") return "red";
    else if (CNTY_NM == "Hutchinson") return "red";
    else if (CNTY_NM == "Irion") return "red";
    else if (CNTY_NM == "Jack") return "red";
    else if (CNTY_NM == "Jackson") return "red";
    else if (CNTY_NM == "Jasper") return "red";
    else if (CNTY_NM == "Jeff Davis") return "red";
    else if (CNTY_NM == "Jefferson") return "red";
    else if (CNTY_NM == "Jim Hogg") return "blue";
    else if (CNTY_NM == "Jim Wells") return "red";
    else if (CNTY_NM == "Johnson") return "red";
    else if (CNTY_NM == "Jones") return "red";
    else if (CNTY_NM == "Karnes") return "red";
    else if (CNTY_NM == "Kaufman") return "red";
    else if (CNTY_NM == "Kendall") return "red";
    else if (CNTY_NM == "Kenedy") return "red";
    else if (CNTY_NM == "Kent") return "red";
    else if (CNTY_NM == "Kerr") return "red";
    else if (CNTY_NM == "Kimble") return "red";
    else if (CNTY_NM == "King") return "red";
    else if (CNTY_NM == "Kinney") return "red";
    else if (CNTY_NM == "Kleberg") return "red";
    else if (CNTY_NM == "Knox") return "red";
    else if (CNTY_NM == "Lamar") return "red";
    else if (CNTY_NM == "Lamb") return "red";
    else if (CNTY_NM == "Lampasas") return "red";
    else if (CNTY_NM == "La Salle") return "red";
    else if (CNTY_NM == "Lavaca") return "red";
    else if (CNTY_NM == "Lee") return "red";
    else if (CNTY_NM == "Leon") return "red";
    else if (CNTY_NM == "Liberty") return "red";
    else if (CNTY_NM == "Limestone") return "red";
    else if (CNTY_NM == "Lipscomb") return "red";
    else if (CNTY_NM == "Live Oak") return "red";
    else if (CNTY_NM == "Llano") return "red";
    else if (CNTY_NM == "Loving") return "red";
    else if (CNTY_NM == "Lubbock") return "red";
    else if (CNTY_NM == "Lynn") return "red";
    else if (CNTY_NM == "Madison") return "red";
    else if (CNTY_NM == "Marion") return "red";
    else if (CNTY_NM == "Martin") return "red";
    else if (CNTY_NM == "Mason") return "red";
    else if (CNTY_NM == "Matagorda") return "red";
    else if (CNTY_NM == "Maverick") return "blue";
    else if (CNTY_NM == "McCulloch") return "red";
    else if (CNTY_NM == "McLennan") return "red";
    else if (CNTY_NM == "McMullen") return "red";
    else if (CNTY_NM == "Medina") return "red";
    else if (CNTY_NM == "Menard") return "red";
    else if (CNTY_NM == "Midland") return "red";
    else if (CNTY_NM == "Milam") return "red";
    else if (CNTY_NM == "Mills") return "red";
    else if (CNTY_NM == "Mitchell") return "red";
    else if (CNTY_NM == "Montague") return "red";
    else if (CNTY_NM == "Montgomery") return "red";
    else if (CNTY_NM == "Moore") return "red";
    else if (CNTY_NM == "Morris") return "red";
    else if (CNTY_NM == "Motley") return "red";
    else if (CNTY_NM == "Nacogdoches") return "red";
    else if (CNTY_NM == "Navarro") return "red";
    else if (CNTY_NM == "Newton") return "red";
    else if (CNTY_NM == "Nolan") return "red";
    else if (CNTY_NM == "Nueces") return "red";
    else if (CNTY_NM == "Ochiltree") return "red";
    else if (CNTY_NM == "Oldham") return "red";
    else if (CNTY_NM == "Orange") return "red";
    else if (CNTY_NM == "Palo Pinto") return "red";
    else if (CNTY_NM == "Panola") return "red";
    else if (CNTY_NM == "Parker") return "red";
    else if (CNTY_NM == "Parmer") return "red";
    else if (CNTY_NM == "Pecos") return "red";
    else if (CNTY_NM == "Polk") return "red";
    else if (CNTY_NM == "Potter") return "red";
    else if (CNTY_NM == "Presidio") return "blue";
    else if (CNTY_NM == "Rains") return "red";
    else if (CNTY_NM == "Randall") return "red";
    else if (CNTY_NM == "Reagan") return "red";
    else if (CNTY_NM == "Real") return "red";
    else if (CNTY_NM == "Red River") return "red";
    else if (CNTY_NM == "Reeves") return "red";
    else if (CNTY_NM == "Refugio") return "red";
    else if (CNTY_NM == "Roberts") return "red";
    else if (CNTY_NM == "Robertson") return "red";
    else if (CNTY_NM == "Rockwall") return "red";
    else if (CNTY_NM == "Runnels") return "red";
    else if (CNTY_NM == "Rusk") return "red";
    else if (CNTY_NM == "Sabine") return "red";
    else if (CNTY_NM == "San Augustine") return "red";
    else if (CNTY_NM == "San Jacinto") return "red";
    else if (CNTY_NM == "San Patricio") return "red";
    else if (CNTY_NM == "San Saba") return "red";
    else if (CNTY_NM == "Schleicher") return "red";
    else if (CNTY_NM == "Scurry") return "red";
    else if (CNTY_NM == "Shackelford") return "red";
    else if (CNTY_NM == "Shelby") return "red";
    else if (CNTY_NM == "Sherman") return "red";
    else if (CNTY_NM == "Smith") return "red";
    else if (CNTY_NM == "Somervell") return "red";
    else if (CNTY_NM == "Starr") return "blue";
    else if (CNTY_NM == "Stephens") return "red";
    else if (CNTY_NM == "Sterling") return "red";
    else if (CNTY_NM == "Stonewall") return "red";
    else if (CNTY_NM == "Sutton") return "red";
    else if (CNTY_NM == "Swisher") return "red";
    else if (CNTY_NM == "Tarrant") return "blue";
    else if (CNTY_NM == "Taylor") return "red";
    else if (CNTY_NM == "Terrell") return "red";
    else if (CNTY_NM == "Terry") return "red";
    else if (CNTY_NM == "Throckmorton") return "red";
    else if (CNTY_NM == "Titus") return "red";
    else if (CNTY_NM == "Tom Green") return "red";
    else if (CNTY_NM == "Travis") return "blue";
    else if (CNTY_NM == "Trinity") return "red";
    else if (CNTY_NM == "Tyler") return "red";
    else if (CNTY_NM == "Upshur") return "red";
    else if (CNTY_NM == "Upton") return "red";
    else if (CNTY_NM == "Uvalde") return "red";
    else if (CNTY_NM == "Val Verde") return "red";
    else if (CNTY_NM == "Van Zandt") return "red";
    else if (CNTY_NM == "Victoria") return "red";
    else if (CNTY_NM == "Walker") return "red";
    else if (CNTY_NM == "Waller") return "red";
    else if (CNTY_NM == "Ward") return "red";
    else if (CNTY_NM == "Washington") return "red";
    else if (CNTY_NM == "Webb") return "blue";
    else if (CNTY_NM == "Wharton") return "red";
    else if (CNTY_NM == "Wheeler") return "red";
    else if (CNTY_NM == "Wichita") return "red";
    else if (CNTY_NM == "Wilbarger") return "red";
    else if (CNTY_NM == "Willacy") return "blue";
    else if (CNTY_NM == "Williamson") return "blue";
    else if (CNTY_NM == "Wilson") return "red";
    else if (CNTY_NM == "Winkler") return "red";
    else if (CNTY_NM == "Wise") return "red";
    else if (CNTY_NM == "Wood") return "red";
    else if (CNTY_NM == "Yoakum") return "red";
    else if (CNTY_NM == "Young") return "red";
    else if (CNTY_NM == "Zapata") return "red";
    else if (CNTY_NM == "Zavala") return "blue";
    else return "pink";
  }

 
  //creating the json layer
  d3.json(link).then(function(data) {
    // Creating a GeoJSON layer with the retrieved data
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

  


 
  
  
