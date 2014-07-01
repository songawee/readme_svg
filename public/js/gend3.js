$(document).ready(function() {
  var roughText = $("#gdata").text().slice(1);
  var data = roughText.slice(0,-1).split(',');
  console.log(data);

  var width = 440,
      i = 0,
      barHeight = 20;

  var x = d3.scale.linear()
    .domain([0, 400])
    .range([400, 0]);

  var chart = d3.select("svg")
    .attr("width", width)
    .attr("height", 200);

  var bar = chart.selectAll("g")
    .data(data)
    .enter().append("g")
      .attr("transform", function () {
        return "translate(" + 110*i++ + ", 100) scale(1, -1)";
      })
      .append("rect")
        .attr("width", 90)
        .attr("height", function(d) {
          return d;
        });

});
