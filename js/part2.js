/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// data-old-value="300" 
// document.getElementById("Twoslider").dataset.binaryString = '1111'
document.getElementById("button-1-1").style.backgroundColor = "#a580bf"
document.getElementById("button-1-1").style.color = "#FFFFFF"

      document.getElementById("button-0-1").style.backgroundColor = "#FFFFFF" 
      document.getElementById("button-0-1").style.color = "#a580bf"
      document.getElementById("button-2-1").style.backgroundColor = "#FFFFFF"
      document.getElementById("button-2-1").style.color = "#a580bf"

var globalLabels = ["Playing Piano", "Meditation", "Homework", "Working Out"]
var globalBackgroundColors = ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"]
var globalData = [.5,2,6,5]
var xAxisLine = [
    ["12:00AM","1:00AM","2:00AM","3:00AM","4:00AM","5:00AM","6:00AM","7:00AM","8:00AM","9:00AM","10:00AM","11:00AM","12:00PM","1:00PM","2:00PM","3:00PM","4:00PM","5:00PM","6:00PM","7:00PM","8:00PM","9:00PM","10:00PM","11:00PM"],
    ["Feb 22","Feb 23","Feb 24","Feb 25","Feb 26","Feb 27","Feb 28"],
    ["Feb 1","Feb 2","Feb 3","Feb 4","Feb 5","Feb 6","Feb 7","Feb 8","Feb 9","Feb 10","Feb 11", "Feb 12","Feb 13","Feb 14","Feb 15","Feb 16","Feb 17","Feb 18","Feb 19", "Feb 20","Feb 21","Feb 22","Feb 23","Feb 24","Feb 25","Feb 26","Feb 27", "Feb 28"]
]


myBarChart = new Chart(document.getElementById("bar-chart"), {

    type: 'bar',
    data: {
      labels: ["Playing Piano", "Meditation", "Homework", "Working Out"],
      // labels: ["Playing Piano", "Meditation", "Homework", "Working Out"],
      datasets: [
        {
          label: "Hours",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
          data: [10,5,7,6]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Time spent on each activity'
      },

        scales: {
          yAxes: [{
            display: true,
            ticks: {
                // suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
       }

    }
});
myLineChart = new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: xAxisLine[1],
    datasets: [{ 
        data: [1,1,1,1,2,6,7],
        label: "Playing Piano",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [3,3,4,8,9,2,1],
        label: "Meditation",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [1,3,3,9,9,7,6],
        label: "Homework",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [4,5,2,7,8,1,1],
        label: "Working Out",
        borderColor: "#e8c3b9",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Stress levels for each activity'
    }
  }
});
document.getElementById("button-0-1").dataset.binaryString = '1111'
var lineData = [
  [1,1,1,1,2,6,7,8,7,1,3,3,4,8,9,2,1,4,6,14,5,2,7,8,1,1,1],
  [2,7,8,1,1,1,1,13,3,4,8,9,2,1,4,6,1,1,3,3,9,9,7,6,1,1,1],
  [1,3,3,9,9,7,6,1,1,1,4,5,2,7,8,1,1,1,1,1,3,4,5,6,7,8,9,0],
  [4,5,2,7,8,1,1,1,1,1,3,5,7,9,4,7,8,0,1,3,4,8,5,3,8,9,2,6]
]

function setAll() {

  console.log('thisisathing');
  counter = 0
  lineLabels = []
  console.log(document.getElementById("button-0-1").style.backgroundColor)
  console.log("349 is a better class");
  if (document.getElementById("button-0-1").style.backgroundColor == "rgb(165, 128, 191)"){
      counter = 24
      lineLabels = xAxisLine[0]
  } else if (document.getElementById("button-1-1").style.backgroundColor == "rgb(165, 128, 191)"){
      counter = 7
      lineLabels = xAxisLine[1]
  } else {
      counter = 28
      lineLabels = xAxisLine[2]
  }
  console.log(counter);
  localLineData = []
  var j = 0
  var k = 0
  for (j;j<4;j++) {
      k = 0
      localLineData.push([])
      while(k<counter) {
          localLineData[j].push(lineData[j][k])
          k = k+1
      }
  }
  console.log(localLineData)  
    
  console.log('hey');
  myBarChart.destroy()
  myLineChart.destroy()
  localDataSets = []
  binaryString = document.getElementById("button-0-1").dataset.binaryString
  console.log(binaryString)
  var i = 0
  for (i; i<binaryString.length ; i++ ) {
    if ('1' == binaryString.charAt(i)) {
      localDataSets.push(
        {
          data: localLineData[i],
          label: globalLabels[i],
          borderColor: globalBackgroundColors[i],
          fill: false
        })

      // localLabels.push(globalLabels[i])
      // localBackgroundColors.push(globalBackgroundColors[i])
      // localData.push(lineData[i])
    }
  }

  console.log(localDataSets)
  console.log('hereaewr')
  
  myLineChart = new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: lineLabels,
      datasets: localDataSets
    },
    options: {
      title: {
        display: true,
        text: 'Stress levels for each activity'
      }
    }
  });




localLabels = []
localBackgroundColors = []
localData = []
binaryString = document.getElementById("button-0-1").dataset.binaryString
console.log(binaryString)
var i = 0
for (i; i<binaryString.length ; i++ ) {
  if ('1' == binaryString.charAt(i)) {
    localLabels.push(globalLabels[i])
    localBackgroundColors.push(globalBackgroundColors[i])
    localData.push(globalData[i])
  }
}
console.log(localLabels)
console.log(localBackgroundColors)
console.log(localData)

myBarChart = new Chart(document.getElementById("bar-chart"), {
      type: 'bar',
      data: {
        labels: localLabels,
        datasets: [
          {
            label: "Hours",
            backgroundColor: localBackgroundColors,
            data: localData
          }
        ]
      },
      options: {
        // scaleOverride : true,
        legend: { display: false },
        title: {
          display: true,
          text: 'Time spent on each activity'
        },
        scaleBeginAtZero: true,
        // asdf
        scaleStartValue: 0,
    //     yAxes: [{
    //     ticks: {
    //         min: 0,
    //         max: 100,
    //         stepSize: 20
    //     }
    // }]



        scales: {
          yAxes: [{
            display: true,
            ticks: {
                // suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
       }


        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       beginAtZero: true,
        //       min: 0
        //     }
        //   }]
        // }
    }
  });
 }
function setActiveTwo(id) {
  document.getElementById(id).style.backgroundColor = "#a580bf"
    document.getElementById(id).style.color = "#FFFFFF"
  document.getElementById(id).setAttribute('data-button', '7')
  if (id === "button-0-1") {
      console.log('here')
      document.getElementById("button-1-1").style.backgroundColor = "#FFFFFF"
      document.getElementById("button-1-1").style.color = "#a580bf"
      document.getElementById("button-2-1").style.backgroundColor = "#FFFFFF"
      document.getElementById("button-2-1").style.color = "#a580bf"
  } else if (id === "button-1-1"){
      console.log('hesdre')
      document.getElementById("button-0-1").style.backgroundColor = "#FFFFFF"
      document.getElementById("button-0-1").style.color = "#a580bf"
      document.getElementById("button-2-1").style.backgroundColor = "#FFFFFF"
      document.getElementById("button-2-1").style.color = "#a580bf"
  } else {
      console.log('afshere')
      document.getElementById("button-0-1").style.backgroundColor = "#FFFFFF"
      document.getElementById("button-0-1").style.color = "#a580bf"
      document.getElementById("button-1-1").style.backgroundColor = "#FFFFFF"
      document.getElementById("button-1-1").style.color = "#a580bf"
  }
 setAll();
 return 0;
}


function setActive(id) {

  element = document.getElementById(id)
  data = element.getAttribute('data-button')

  console.log(data)
  if (data == "0") {
    element.style.backgroundColor = "#FFFFFF"
    element.style.color = "#a580bf"
    element.setAttribute('data-button', '7');
  } else {
    element.style.backgroundColor = "#a580bf"
    element.style.color = "#FFFFFF"
    console.log('asf')
    element.setAttribute('data-button', '0');
  }

  binaryString = ''
  i = 0
  for (i;i<4;i++){
    if (document.getElementById('button'+(i+1).toString()).getAttribute('data-button')== '0'){
      binaryString = binaryString +'1'
    } else {
      binaryString = binaryString +'0'
    }

  }

 document.getElementById("button-0-1").dataset.binaryString = binaryString
  console.log('her');
 setAll();
 return 0;
}


function myFunction() {
    console.log('as');
    document.getElementById("myDropdown").classList.toggle("show");
    console.log('as');
}

// console.log('asdf');
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function setInput(id) {
  document.getElementById("question1Input").value = id
}


//pie chart code
var width = 300;
var height = 300;
var center = [width / 2, height / 2];
var innerRadius = 0;
var outerRadius = 100;

var data = [
  [0, 35], 
  [0, 19], 
  [0, 35], 
  [0, 7], 
  [0, 45],
  [0, 27], 
  [1, 0] // need last one to have a start value > 0, end value == 0
];
var color = d3.scale.category20();

var pie = d3.layout.pie()
  .value(function (d) { return d[0]; })
  .sort(null);

var svg = d3.select('#piechart')
  .attr('width', width)
  .attr('height', height)
  .append('g')
    .attr('transform', 'translate(' + center[0] + ', ' + center[1] + ')');

var arc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius);

var hoverArc = d3.svg.arc()
  .innerRadius(innerRadius)
  .outerRadius(outerRadius + 10);

var path = svg.datum(data).selectAll('path')
    .data(pie)
  .enter().append('path')
    .attr('fill', function (d, i) { return color(i); })
    .attr('d', arc)
// set wedge opacity to 0 if it has mass on load (only the last wedge has mass to account for transition in
.style('opacity', function (d) { return d.data[0] === 0 ? 1 : 0; })
    .each(function (d) { this._current = d; })
.on('mouseover', function (d, i) {
  
  d3.select(this)
    .transition()
      .duration(500)
      .ease('elastic')
  .attr('transform', function (d) {
    var dist = 10;
    d.midAngle = ((d.endAngle - d.startAngle) / 2) + d.startAngle;
    var x = Math.sin(d.midAngle) * dist;
    var y = -Math.cos(d.midAngle) * dist;
    return 'translate(' + x + ',' + y + ')';
  });
}).on('mouseout', function (d, i) {
  d3.select(this)
    .transition()
      .duration(500)
      .ease('bounce')
      .attr('transform', 'translate(0,0)')
});




// new values for transitions
pie.value(function (d) { return d[1]; });

path = path.data(pie);
path.transition().duration(1000).attrTween('d', arcTween);

function arcTween(a) {
  var i = d3.interpolate(this._current, a);
  this._current = i(0);
  return function(t) {
    return arc(i(t));
  };
}




