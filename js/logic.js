
var links = [
  {source: "Excel", target: "Bloomberg(1)", type: "resolved"},
  {source: "Excel", target: "O2(1)", type: "resolved"},
  {source: "Bloomberg(1)", target: "Bloomberg(2)", type: "licensing"},
  {source: "Bloomberg(2)", target: "Fenics(1)", type: "licensing"},
  {source: "O2(1)", target: "O2(2)", type: "licensing"},
  {source: "O2(2)", target: "Fenics(1)", type: "licensing"},
  {source: "Fenics(1)", target: "Fxation(1)", type: "licensing"},
  {source: "Fxation(1)", target: "Fenics(2)", type: "licensing"},
  {source: "Fenics(2)", target: "Quick Ops (GS)", type: "licensing"},
  {source: "Quick Ops (GS)", target: "Fxation(2)", type: "licensing"},
  {source: "Fxation(2)", target: "CM 3.0(1)", type: "licensing"},
  {source: "CM 3.0(1)", target: "SCD", type: "licensing"},
  {source: "SCD", target: "CM 3.0(2)", type: "licensing"},
  {source: "CM 3.0(2)", target: "External Bank", type: "resolved"}
];

var nodes = {};

// Compute the distinct nodes from the links.
links.forEach(function(link) {
  link.source = nodes[link.source] || (nodes[link.source] = {name: link.source});
  link.target = nodes[link.target] || (nodes[link.target] = {name: link.target});
});

var width = 2113,
    height = 500;

var force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(130)
    .charge(-1400)
    .gravity(0.08)
    .friction(0.787)
    .on("tick", tick)
    .start();

var drag = force.drag()
    .on("dragstart", dragstart);

var svg = d3.select("div.main").append("svg")
    .attr("width", width)
    .attr("height", height);

// Pointers (Arrowhead)
svg.append("defs").selectAll("marker")
    .data(["suit", "licensing", "resolved"])
  .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 8)
    .attr("markerHeight", 8)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");

var path = svg.append("g").selectAll("path")
    .data(force.links())
  .enter().append("path")
    .attr("class", function(d) { return "link " + d.type; })
    .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

var node = svg.append("g").selectAll("circle")
    .data(force.nodes())
  .enter().append("circle")
        .attr("class", "node")
        .attr("r", 12)
        .on("dblclick", dblclick)
        .call(force.drag);

var text = svg.append("g").selectAll("text")
    .data(force.nodes())
  .enter().append("text")
    .attr("x", 12)
    .attr("y", ".31em")
    .text(function(d) { return d.name; });

// Use elliptical arc path segments to doubly-encode directionality.
function tick() {
  path.attr("d", linkArc);
  /*node.attr("transform", transform);*/
  text.attr("transform", transform);

  node.attr("cx", function(d) { return d.x = Math.max(15, Math.min(width - 15, d.x)); })
        .attr("cy", function(d) { return d.y = Math.max(15, Math.min(height - 15, d.y)); });
  text.attr("cx", function(d) { return d.x = Math.max(15, Math.min(width - 15, d.x)); })
        .attr("cy", function(d) { return d.y = Math.max(15, Math.min(height - 15, d.y)); });

    /*node.attr("cx", function(d) { return d.x = Math.max(12, Math.min(width - 12, d.x)); })
        .attr("cy", function(d) { return d.y = Math.max(12, Math.min(height - 12, d.y)); });*/

    /*link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });*/
}

function linkArc(d) {
  var dx = d.target.x - d.source.x,
      dy = d.target.y - d.source.y,
      dr = 0
  return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
}

function transform(d) {
  return "translate(" + d.x + "," + d.y + ")";
}

function dblclick(d) {
  d3.select(this).classed("fixed", d.fixed = false);
}

function dragstart(d) {
  d3.select(this).classed("fixed", d.fixed = true);
}