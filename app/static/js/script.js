//This very prototype of AudioViz implementation
var d3_orange_color = d3.rgb('#FFD20E');
var d3_green_color = d3.rgb('#701AB0');
var d3_red_color = d3.rgb('#FF1B3B');
var d3_blue_color = d3.rgb('#4E85FF');
var opacity = 0.03;
var width = 0.7;
var delay = 5;
function generate_first(data_loudness, data_pitches, data_timbres, data_energy) {

    console.log(data_energy);
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    console.log(document);
    console.log(d.getElementById('viz'));
    var sampleSVG = d3.select("#viz")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

//Should be a json file instead
// Animating

    var dataset_loudness = [];
    dataset_loudness.push({radius: 100}); // pushing the max to be 100
    for (i = 0; i < data_loudness.length; i++){
        dataset_loudness.push({radius: data_loudness[i]});
    }
    console.log("DONE PUSHIGN dataset_loudness");
    var dataset_pitches = [];
    dataset_pitches.push({radius: 100}); // pushing the max to be 100
    for (i = 0; i < data_pitches.length; i++){
        dataset_pitches.push({radius: data_pitches[i]});
    }
    console.log("DONE PUSHIGN dataset_pitches");
    var dataset_timbres = [];
    dataset_timbres.push({radius: 100}); // pushing the max to be 100
    for (i = 0; i < data_timbres.length; i++){
        dataset_timbres.push({radius: data_timbres[i]});
    }
    console.log("DONE PUSHIGN dataset_timbres");
    var dataset_energy = [];
    dataset_energy.push({radius: 100}); // pushing the max to be 100
    for (i = 0; i < data_energy.length; i++){
        dataset_energy.push({radius: data_energy[i]});
    }

    console.log("DONE PUSHIGN DATA");

//Here's the real work
    var circles = sampleSVG.selectAll("circle")
        .data(dataset_loudness)
        .enter()
        .append("circle")
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        }) // set the stroke opacity
        .style("stroke-width", function(d,i){
            if(d.radius == 100){
                return 1;
            }
            else
                return width;
        })    // set the stroke width
        .style("stroke", d3_red_color)
        .transition()
        .text(function (d, i) {
            return d.radius;
        })
        .delay(function (d, i) {
            return 5*i;
        });

    var circleAttributes = circles.attr("cx", 150)             // position the x-centre
        .attr("cy", 150)             // position the y-centre
        .attr("r", function (d) {
            return d.radius;
        })// set the radius
        .style("fill", "none");


    var sampleSVG2 = d3.select("#viz2")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    var circles2 = sampleSVG2.selectAll("circle")
        .data(dataset_pitches)
        .enter()
        .append("circle")
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        })  // set the stroke opacity
        .style("stroke-width", function(d,i){
            if(d.radius == 100){
                return 1;
            }
            else
                return width;
        })      // set the stroke width
        .style("stroke", d3_blue_color)
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        }) 
        .transition()
        .text(function (d, i) {
            return d.radius;
        })
        .delay(function (d, i) {
            return 5 * i;
        });

    var circleAttributes2 = circles2.attr("cx", 150)             // position the x-centre
        .attr("cy", 150)             // position the y-centre
        .attr("r", function (d) {
            return d.radius;
        })// set the radius
        .style("fill", "none");


    var sampleSVG3 = d3.select("#viz3")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    var circles3 = sampleSVG3.selectAll("circle")
        .data(dataset_timbres)
        .enter()
        .append("circle")
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        })  // set the stroke opacity
        .style("stroke-width", function(d,i){
            if(d.radius == 100){
                return 1;
            }
            else
                return width;
        })      // set the stroke width
        .style("stroke", d3_green_color)
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        }) 
        .transition()
        .text(function (d, i) {
            return d.radius;
        })
        .delay(function (d, i) {
            return 5 * i;
        });

    var circleAttributes3 = circles3.attr("cx", 150)             // position the x-centre
        .attr("cy", 150)             // position the y-centre
        .attr("r", function (d) {
            return d.radius;
        })// set the radius
        .style("fill", "none");

    var sampleSVG4 = d3.select("#viz4")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    var circles4 = sampleSVG4.selectAll("circle")
        .data(dataset_energy)
        .enter()
        .append("circle")
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        })  // set the stroke opacity
        .style("stroke-width", function(d,i){
            if(d.radius == 100){
                return 1;
            }
            else
                return width;
        })      // set the stroke width
        .style("stroke", d3_orange_color)
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        }) 
        .transition()
        .text(function (d, i) {
            return d.radius;
        })
        .delay(function (d, i) {
            return 5 * i;
        });

    var circleAttributes4 = circles4.attr("cx", 150)             // position the x-centre
        .attr("cy", 150)             // position the y-centre
        .attr("r", function (d) {
            return d.radius;
        })// set the radius
        .style("fill", "none");

}

function generate_second(data_loudness, data_pitches, data_timbres, data_energy) {

    console.log(data_energy);
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    console.log(document);
    console.log(d.getElementById('viz'));
    var sampleSVG = d3.select("#viz5")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

//Should be a json file instead
// Animating

    var dataset_loudness = [];
    dataset_loudness.push({radius: 100}); // pushing the max to be 100
    for (i = 0; i < data_loudness.length; i++){
        dataset_loudness.push({radius: data_loudness[i]});
    }
    console.log("DONE PUSHIGN dataset_loudness");
    var dataset_pitches = [];
    dataset_pitches.push({radius: 100}); // pushing the max to be 100
    for (i = 0; i < data_pitches.length; i++){
        dataset_pitches.push({radius: data_pitches[i]});
    }
    console.log("DONE PUSHIGN dataset_pitches");
    var dataset_timbres = [];
    dataset_timbres.push({radius: 100}); // pushing the max to be 100
    for (i = 0; i < data_timbres.length; i++){
        dataset_timbres.push({radius: data_timbres[i]});
    }
    console.log("DONE PUSHIGN dataset_timbres");
    var dataset_energy = [];
    dataset_energy.push({radius: 100}); // pushing the max to be 100
    for (i = 0; i < data_energy.length; i++){
        dataset_energy.push({radius: data_energy[i]});
    }

    console.log("DONE PUSHIGN DATA");

//Here's the real work
    var circles = sampleSVG.selectAll("circle")
        .data(dataset_loudness)
        .enter()
        .append("circle")
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        })  // set the stroke opacity
        .style("stroke-width", function(d,i){
            if(d.radius == 100){
                return 1;
            }
            else
                return width;
        })      // set the stroke width
        .style("stroke", d3_red_color)
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        }) 
        .transition()
        .text(function (d, i) {
            return d.radius;
        })
        .delay(function (d, i) {
            return 5 * i;
        });

    var circleAttributes = circles.attr("cx", 150)             // position the x-centre
        .attr("cy", 150)             // position the y-centre
        .attr("r", function (d) {
            return d.radius;
        })// set the radius
        .style("fill", "none");


    var sampleSVG2 = d3.select("#viz6")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    var circles2 = sampleSVG2.selectAll("circle")
        .data(dataset_pitches)
        .enter()
        .append("circle")
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        })  // set the stroke opacity
        .style("stroke-width", function(d,i){
            if(d.radius == 100){
                return 1;
            }
            else
                return width;
        })      // set the stroke width
        .style("stroke", d3_blue_color)
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        }) 
        .transition()
        .text(function (d, i) {
            return d.radius;
        })
        .delay(function (d, i) {
            return 5 * i;
        });

    var circleAttributes2 = circles2.attr("cx", 150)             // position the x-centre
        .attr("cy", 150)             // position the y-centre
        .attr("r", function (d) {
            return d.radius;
        })// set the radius
        .style("fill", "none");


    var sampleSVG3 = d3.select("#viz7")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    var circles3 = sampleSVG3.selectAll("circle")
        .data(dataset_timbres)
        .enter()
        .append("circle")
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        })  // set the stroke opacity
        .style("stroke-width", function(d,i){
            if(d.radius == 100){
                return 1;
            }
            else
                return width;
        })      // set the stroke width
        .style("stroke", d3_green_color)
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        }) 
        .transition()
        .text(function (d, i) {
            return d.radius;
        })
        .delay(function (d, i) {
            return 5 * i;
        });

    var circleAttributes3 = circles3.attr("cx", 150)             // position the x-centre
        .attr("cy", 150)             // position the y-centre
        .attr("r", function (d) {
            return d.radius;
        })// set the radius
        .style("fill", "none");

    var sampleSVG4 = d3.select("#viz8")
        .append("svg")
        .attr("width", 300)
        .attr("height", 300);

    var circles4 = sampleSVG4.selectAll("circle")
        .data(dataset_energy)
        .enter()
        .append("circle")
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        })  // set the stroke opacity
        .style("stroke-width", function(d,i){
            if(d.radius == 100){
                return 1;
            }
            else
                return width;
        })      // set the stroke width
        .style("stroke", d3_orange_color)
        .style("stroke-opacity", function(d,i){
            if(d.radius == 100){

                return 1;
            }
            else
                return opacity;
        }) 
        .transition()
        .text(function (d, i) {
            return d.radius;
        })
        .delay(function (d, i) {
            return 5 * i;
        });

    var circleAttributes4 = circles4.attr("cx", 150)             // position the x-centre
        .attr("cy", 150)             // position the y-centre
        .attr("r", function (d) {
            return d.radius;
        })// set the radius
        .style("fill", "none");

}
