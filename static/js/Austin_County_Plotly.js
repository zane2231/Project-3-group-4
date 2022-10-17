//Get The Elements
const menu1 = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const listContainer= document.querySelector(".panel");
//const url1 = "https://raw.githubusercontent.com/zane2231/files.misc/main/COUNTY_CLEANUP_NO_TOTALS.csv";

//Toggle the navbar menu on click Open/Close 
menuBtn.addEventListener("click", () => {
  menu1.classList.toggle('nav-toggle');
});
//List Data

let data= [
  {
    "A": "101",
    "B": "187",
    "C": "751"
  },
  {
    "A": "102",
    "B": "217",
    "C": "808"
  },
  {
    "A": "103",
    "B": "161",
    "C": "974"
  },
  {
    "A": "104",
    "B": "97",
    "C": "512"
  },
  {
    "A": "205",
    "B": "293",
    "C": "1140"
  },
  {
    "A": "206",
    "B": "78",
    "C": "391"
  },
  {
    "A": "209",
    "B": "102",
    "C": "391"
  },
  {
    "A": "210",
    "B": "87",
    "C": "477"
  },
  {
    "A": "211",
    "B": "38",
    "C": "258"
  },
  {
    "A": "312",
    "B": "40",
    "C": "451"
  },
  {
    "A": "313",
    "B": "307",
    "C": "356"
  },
  {
    "A": "314",
    "B": "436",
    "C": "1507"
  },
  {
    "A": "415",
    "B": "257",
    "C": "756"
  },
  {
    "A": "416",
    "B": "216",
    "C": "699"
  },
  {
    "A": "417",
    "B": "136",
    "C": "310"
  },
  {
    "A": "418",
    "B": "166",
    "C": "903"
  },
  {
    "A": "207/208",
    "B": "133",
    "C": "763"
  }

  ];


data.forEach(person=> {

 let personHtml= ` <li>
 <h2 class="person">${person.A}</h2>
 <span class="no_books">${person.B}</span>
 <span class="no_pages">${person.C}</span>
</li>`

  listContainer.insertAdjacentHTML("beforeend", personHtml);
})







/*===== Charts =====*/
const config = {responsive: true};
//Bar Chart
const barChartTrace1 = {
 x:["P101","P102","P103","P104","P205","P206","P209","P210","P211","P312","P313","P314","P415","P416","P417","P418","P207/208"],
 y:[187,217,161,97,293,78,102,87,38,40,307,436,257,216,136,166,133],
  name: 'DEM',
  type: 'bar',
  marker: {
    color: '#3358ea',
  }
};

const barChartTrace2 = {
  x:["P101","P102","P103","P104","P205","P206","P209","P210","P211","P312","P313","P314","P415","P416","P417","P418","P207/208"],
  y:[751,808,974,512,1140,391,391,477,258,451,356,1507,756,699,310,903,763],
  name: 'REP',
  type: 'bar',

  marker: {
    color: '#c13232',
    // opacity: 0.2,
  }
};

const barChartData = [barChartTrace1, barChartTrace2];
const layout = {
  barmode: 'group',
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  showlegend: true,
  margin: {
    l: 60,
    r: 60,
    b: 60,
    t: 60,
    pad: 3

  },
  legend: {
    x: 0, 
    y: 1.0, 
    bgcolor: 'rgba(255, 255, 255, 0)',
    bordercolor: 'rgba(255, 255, 255)'
    
  }, 
  xaxis: {tickfont: {
    size: 12, 
    color: 'rgb(255, 255, 255)'
  }}, 
yaxis: {
  title: 'Austin Votes By Party',
  titlefont: {
    size: 12, 
    color: 'rgb(255, 255, 255)'
  }, 
  tickfont: {
    size: 14, 
    color: 'rgb(255, 255, 255)'
  }

}, 
  title: {
    text:'Texas Votes',
    font: {
      color: '#fcfdff'}
  },

};

Plotly.newPlot('barChart', barChartData, layout, config);

//Pie Chart 
const pieChartData = [{
  values: [2951, 11447],
  labels: ['DEM', 'Rep'],
  type: 'pie'
}];

const pieChartLayout = {
  paper_bgcolor: '#172042',
  plot_bgcolor: '#172042',
  piecolorway: ['#c13232', '#3358ea'],
  showlegend: true,
  title: {
    text:'Austin County Votes',
    font: {
      
      size: 24,
      color: '#edeffa',
    },
    xref: 'paper',
   // x: 0.05,
  },
  height: 500,
  width: 500
};

Plotly.newPlot('pieChart', pieChartData, pieChartLayout);

