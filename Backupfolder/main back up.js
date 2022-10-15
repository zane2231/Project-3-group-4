//Get The Elements
const menu1 = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const listContainer= document.querySelector(".panel");
//const url1 = "https://raw.githubusercontent.com/zane2231/files.misc/main/COUNTY_CLEANUP_NO_TOTALS.csv";

//Toggle the navbar menu on click Open/Close 
menuBtn.addEventListener("click", () => {
  menu1.classList.toggle('nav-toggle');
});


let data= [
  {
    name: "ANDERSON",
   no_of_books: 3955,
    no_of_pages: 15110
  },
  {
    name: "ANDREWS",
   no_of_books: 850,
    no_of_pages: 4943
  },
  {
    name: "ANGELINA",
   no_of_books: 914,
    no_of_pages: 25076
  },

];

data.forEach(person=> {

 let personHtml= ` <li>
 <h2 class="person">${person.name}</h2>
 <span class="no_books">${person.no_of_books}</span>
 <span class="no_pages">${person.no_of_pages}</span>
</li>`

  listContainer.insertAdjacentHTML("beforeend", personHtml);
})





async function getData() {

  // Part 1: Get CSV

  // fetch data
  const response = await fetch("https://raw.githubusercontent.com/zane2231/files.misc/main/COUNTY_CLEANUP_NO_TOTALS.csv");
  // process data
  const rawData = await response.json();
  // publish data
 // document.getElementById("csv").innerHTML = rawData;

  // developer info
  console.log(rawData);
  console.log("rawData type: " + typeof rawData);
}getData()

/*===== Charts =====*/
const config = {responsive: true};
//Bar Chart
const barChartTrace1 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [20, 14, 23],
  name: 'SF Zoo',
  type: 'bar',
  marker: {
    color: '#ea335d',
  }
};

const barChartTrace2 = {
  x: ['Jan', 'Feb', 'Mar'],
  y: [20, 14, 23],
  name: 'LA Zoo',
  type: 'bar',
  marker: {
    color: '#ea335d',
    opacity: 0.6,
  }
};

const barChartData = [barChartTrace1, barChartTrace2];
const layout = {
  barmode: 'stack',
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: false,
  margin: {
    l: 30,
    r: 30,
    b: 30,
    t: 30,
    pad: 1
  },
  font: {
    color: '#6b6f8a'
  }
};

Plotly.newPlot('barChart', barChartData, layout, config);

//Scientific Chart
d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv", function(err, rows){
  function unpack(rows, key) {
  return rows.map(function(row) { return row[key]; });
}

var trace1 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL High',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.High'),
  line: {color: '#ea335d'}
}

var trace2 = {
  type: "scatter",
  mode: "lines",
  name: 'AAPL Low',
  x: unpack(rows, 'Date'),
  y: unpack(rows, 'AAPL.Low'),
  line: {color: '#03dcee'}
}

var data = [trace1,trace2];
const layout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: false,
  margin: {
    l: 30,
    r: 30,
    b: 30,
    t: 30,
    pad: 1
  },
  font: {
    color: '#6b6f8a'
  },
  xaxis: {
    range: ['2016-07-01', '2017-02-01'],
    type: 'date'
  },
  yaxis: {
    autorange: true,
    type: 'linear'
  }
};

Plotly.newPlot('scientificChart', data, layout, config);
});


const pieChartData = [{
  values: [19, 26, 55],
  labels: ['March', 'April', 'June'],
  type: 'pie'
}];

const pieChartLayout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  piecolorway: ['#ea335d', '#03dcee', '#178add'],
  showlegend: false,
  margin: {
    l: 10,
    r: 10,
    b: 10,
    t: 10,
    pad: 1
  },
  height: 300,
  width: 300
};

Plotly.newPlot('pieChart', pieChartData, pieChartLayout);

const donutChartData = [{
  values: [10, 40, 50],
  labels: ['Sep', 'Oct', 'Nov'],
  hole: .4,
  type: 'pie',
}];

Plotly.newPlot('donutChart', donutChartData, pieChartLayout);


var carpetChartData = {
    type: 'carpet',
    a: [4, 4, 4, 4.5, 4.5, 4.5, 5, 5, 5, 6, 6, 6],
    b: [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3],
    y: [2, 3.5, 4, 3, 4.5, 5, 5.5, 6.5, 7.5, 8, 8.5, 10],
    aaxis: {
      tickprefix: 'a = ',
      ticksuffix: 'm',
      smoothing: 1,
      minorgridcount: 9,
      minorgridcolor: '#ea335d',
      gridcolor: '#ea335d',
      color: '#03dcee'
    },
    baxis: {
      tickprefix: 'b = ',
      ticksuffix: 'Pa',
      smoothing: 1,
      minorgridcount: 9,
      minorgridcolor: '#ea335d',
      gridcolor: '#ea335d',
      color: '#03dcee'
    }
}

const carpetChartLayout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: false,
  margin: {
    l: 10,
    r: 10,
    b: 10,
    t: 10,
    pad: 1
  },
  font: {
    color: '#6b6f8a'
  },
  height: 300,
  width: 300
};

Plotly.newPlot('carpetChart', [carpetChartData], carpetChartLayout);
// data source

// const url = "https://raw.githubusercontent.com/zane2231/files.misc/main/COUNTY_CLEANUP_NO_TOTALS.csv";

// // getData function

// async function getData() {

//     // Part 1: Get CSV

//     // fetch data
//     const response = await fetch(url);
//     // process data
//     const rawData = await response.json();
//     // publish data
//   //  document.getElementById("csv").innerHTML = rawData;

//     // developer info
//     console.log(rawData);
//     console.log("rawData type: " + typeof rawData);

// getData();

//     // Part 2: CSV to JSON
//     // credit: Stack Overflow User "Paath" on 2016-05-07

//     // initialize variables
//     let arrayOne = rawData.split("\r\n");
//     let header = arrayOne[0].split(",");
//     let noOfRow = arrayOne.length;
//     let noOfCol = header.length;
//     let jsonData = [];
//     let i = 0;
//     let j = 0;

//     // for loop (rows)
//     for (i = 1; i < noOfRow - 1; i++) {
//         let obj = {};
//         let myNewLine = arrayOne[i].split(",");
//         // nested for loop (columns)
//         for (j = 0; j < noOfCol; j++) {
//             obj[header[j]] = myNewLine[j];
//         };
//         // generate JSON
//         jsonData.push(obj);
//     };

//     // publish data
//     document.getElementById("json").innerHTML = jsonData;

//     // developer info
//     console.log(jsonData);
//     console.table(jsonData);
//     console.log("jsonData type: " + typeof jsonData);

//     // Part 3: JSON to HTML Table
//     // credit: Stack Overflow User "ray hatfield" on 2015-05-26

//     // initialize variables
//     let children = jsonData;
//     let table = document.createElement("table");

//     // function to generate table header row
//     function addHeaders(table, keys) {
//         let row = table.insertRow();
//         for (i = 0; i < keys.length; i++) {
//             let cell = row.insertCell();
//             cell.appendChild(document.createTextNode(keys[i]));
//         }
//     }

//     // generate table
//     for (i = 0; i < children.length; i++) {
//         let child = children[i];
//         // generate header row
//         if (i === 0) {
//             addHeaders(table, Object.keys(child));
//         }
//         // generate data rows
//         let row = table.insertRow();
//         Object.keys(child).forEach(function (k) {
//             let cell = row.insertCell();
//             cell.appendChild(document.createTextNode(child[k]));
//         })
//     }

//     // publish table
//     document.getElementById("container").appendChild(table);

//     // developer info
//     console.log("HTML table type: " + typeof table);



//     // Part 4: Plot Data

//     // generate array for x-axis (years)

//     let years = [];

//     for (i in jsonData) {
//         let item = jsonData[i];
//         years.push(item.Year);
//     }

//     // generate array for y-axis (world population)

//     let population = [];

//     for (i in jsonData) {
//         let item = jsonData[i];
//         population.push(item.World);
//     }

//     // newPlot() arguments

//     let p = document.getElementById("myPlot");

//     let plotData = [
//         {
//             x: years,
//             y: population
//         }
//     ];

//     let layout = {
//         title: "World Population by Year",
//         xaxis: { title: "Year" },
//         yaxis: { title: "Population (billions)" }
//     };

//     // generate plot
//     Plotly.newPlot(p, plotData, layout);

//     // developer info
//     console.log(years);
//     console.log(population);
//     console.log(Plotly.newPlot(p, plotData, layout));
//     console.log("plot type: " + typeof Plotly.newPlot(p, plotData, layout));


// }

// // call function

// getData();



// TEXAS COUNTYS,DEMOCRATIC VOTES,REPUBLICAN VOTES
// ANDERSON,3955,15110
// ANDREWS,850,4943
// ANGELINA,9143,25076
// ARANSAS,2916,9239
// ARCHER,446,4300
// ARMSTRONG,75,1035
// ATASCOSA,5876,12039
// AUSTIN,2951,11447
// BAILEY,409,1434
// BANDERA,2505,10057
// BASTROP,15474,20516
// BAYLOR,183,1494
// BEE,3288,6006
// BELL,57014,67893
// BEXAR,448452,308618
// BLANCO,1911,5443
// BORDEN,16,397
// BOSQUE,1561,7469
// BOWIE,10747,27116
// BRAZORIA,62228,90433
// BRAZOS,35349,47530
// BREWSTER,2258,2461
// BRISCOE,78,639
// BROOKS,1470,998
// BROWN,2107,13698
// BURLESON,1788,6743
// BURNET,5639,18767
// CALDWELL,6672,8031
// CALHOUN,2148,5641
// CALLAHAN,734,6012
// CAMERON,64063,49032
// CAMP,1394,3626
// CARSON,297,2779
// CASS,2795,11033
// CASTRO,466,1602
// CHAMBERS,3997,17353
// CHEROKEE,4210,15101
// CHILDRESS,310,1943
// CLAY,614,5069
// COCHRAN,177,809
// COKE,178,1586
// COLEMAN,451,3641
// COLLIN,230945,252318
// COLLINGSWORTH,155,1048
// COLORADO,2420,7472
// COMAL,24826,62740
// COMANCHE,853,5177
// CONCHO,197,1058
// COOKE,3210,15596
// CORYELL,7565,15438
// COTTLE,113,540
// CRANE,241,1247
// CROCKETT,344,1220
// CROSBY,527,1396
// CULBERSON,438,415
// DALLAM,197,1389
// DALLAS,598576,307076
// DAWSON,808,2951
// DEAF SMITH,1264,3294
// DELTA,403,2162
// DENTON,188695,222480
// DEWITT,1494,6567
// DICKENS,130,853
// DIMMIT,2264,1384
// DONLEY,198,1438
// DUVAL,2575,2443
// EASTLAND,983,7237
// ECTOR,11367,32697
// EDWARDS,168,893
// EL PASO,178126,84331
// ELLIS,27565,56717
// ERATH,2916,13684
// FALLS,1899,4177
// FANNIN,2655,12171
// FAYETTE,2661,10171
// FISHER,352,1448
// FLOYD,438,1584
// FOARD,99,445
// FORT BEND,195552,157718
// FRANKLIN,804,4161
// FREESTONE,1635,6991
// FRIO,2422,2823
// GAINES,576,5355
// GALVESTON,58842,93911
// GARZA,231,1413
// GILLESPIE,3176,12514
// GLASSCOCK,39,611
// GOLIAD,877,3085
// GONZALES,1948,5627
// GRAY,829,6840
// GRAYSON,14506,44163
// GREGG,14796,32493
// GRIMES,2833,9432
// GUADALUPE,28805,47553
// HALE,2279,7177
// HALL,168,995
// HAMILTON,641,3616
// HANSFORD,166,1849
// HARDEMAN,241,1330
// HARDIN,3474,23858
// HARRIS,918193,700630
// HARRISON,7908,21466
// HARTLEY,195,1868
// HASKELL,353,1840
// HAYS,59524,47680
// HEMPHILL,206,1486
// HENDERSON,7060,28911
// HIDALGO,128199,90527
// HILL,2860,11926
// HOCKLEY,1482,6536
// HOOD,5648,26496
// HOPKINS,3046,12719
// HOUSTON,2314,7060
// HOWARD,2069,8054
// HUDSPETH,371,779
// HUNT,8906,29163
// HUTCHINSON,965,7681
// IRION,120,759
// JACK,331,3418
// JACKSON,1033,5231
// JASPER,2954,12542
// JEFF DAVIS,501,784
// JEFFERSON,46073,47570
// JIM HOGG,1197,833
// JIM WELLS,6119,7453
// JOHNSON,16464,54628
// JONES,999,5660
// KARNES,1234,3968
// KAUFMAN,18405,37624
// KENDALL,6020,20083
// KENEDY,65,127
// KENT,47,411
// KERR,6524,20879
// KIMBLE,284,1987
// KING,8,151
// KINNEY,446,1144
// KLEBERG,5314,5504
// KNOX,265,1180
// LAMAR,4458,16760
// LAMB,840,3521
// LAMPASAS,2144,8086
// LASALLE,1052,1335
// LAVACA,1333,8804
// LEE,1750,6255
// LEON,1072,7523
// LIBERTY,5785,23302
// LIMESTONE,2213,6789
// LIPSCOMB,131,1205
// LIVE OAK,819,4199
// LLANO,2465,10079
// LOVING,4,60
// LUBBOCK,40017,78861
// LYNN,428,1853
// MADISON,1088,4169
// MARION,1339,3470
// MARTIN,288,1857
// MASON,457,1991
// MATAGORDA,3733,9845
// MAVERICK,8332,6881
// MCCULLOCH,490,2904
// MCLENNAN,36688,59543
// MCMULLEN,53,460
// MEDINA,6773,15642
// MENARD,197,823
// MIDLAND,12329,45624
// MILAM,2496,7984
// MILLS,271,2217
// MITCHELL,397,2170
// MONTAGUE,1097,8615
// MONTGOMERY,74377,193382
// MOORE,1062,4359
// MORRIS,1669,3872
// MOTLEY,46,604
// NACOGDOCHES,9000,17378
// NAVARRO,5101,13800
// NEWTON,1173,4882
// NOLAN,1162,4131
// NUECES,60925,64617
// OCHILTREE,302,2812
// OLDHAM,81,917
// ORANGE,6357,29186
// PALO PINTO,2178,10179
// PANOLA,2057,9326
// PARKER,13017,62045
// PARMER,488,2135
// PECOS,1382,3215
// POLK,5387,18573
// POTTER,9921,22820
// PRESIDIO,1463,721
// RAINS,842,5155
// RANDALL,12802,50796
// REAGAN,172,942
// REAL,320,1643
// RED RIVER,1246,4517
// REEVES,1395,2254
// REFUGIO,1108,2210
// ROBERTS,17,529
// ROBERTSON,2374,5646
// ROCKWALL,16412,36726
// RUNNELS,552,3807
// RUSK,4629,16534
// SABINE,669,4784
// SAN AUGUSTINE,980,3007
// SAN JACINTO,2337,10161
// SAN PATRICIO,8988,16516
// SAN SABA,287,2308
// SCHLEICHER,211,940
// SCURRY,818,4983
// SHACKELFORD,130,1484
// SHELBY,2068,7975
// SHERMAN,91,886
// SMITH,29615,69080
// SOMERVELL,768,4105
// STARR,9123,8247
// STEPHENS,397,3385
// STERLING,51,584
// STONEWALL,116,615
// SUTTON,322,1222
// SWISHER,478,1845
// TARRANT,411567,409741
// TAYLOR,14588,39547
// TERRELL,119,334
// TERRY,757,2812
// THROCKMORTON,82,806
// TITUS,2856,7570
// TOM GREEN,12239,32313
// TRAVIS,435860,161337
// TRINITY,1323,5579
// TYLER,1403,8194
// UPSHUR,2877,15809
// UPTON,170,1178
// UVALDE,4073,6174
// VAL VERDE,6771,8284
// VAN ZANDT,3516,22270
// VICTORIA,10380,23358
// WALKER,7884,15375
// WALLER,8191,14260
// WARD,764,3241
// WASHINGTON,4261,12959
// WEBB,41820,25898
// WHARTON,4694,11926
// WHEELER,168,2159
// WICHITA,13161,32069
// WILBARGER,956,3524
// WILLACY,3108,2441
// WILLIAMSON,143795,139729
// WILSON,6350,18463
// WINKLER,358,1753
// WISE,4973,27032
// WOOD,3509,19049
// YOAKUM,420,2174
// YOUNG,1034,7110
// ZAPATA,1826,2033
// ZAVALA,2864,1490
// Grand Total,5259126,5890347