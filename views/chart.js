/**
 *
 * Created by yusaira-khan on 14/10/15.
 */

console.log('hello World!');
//CONSTANTS
var minSide = 500;
var margin = {top: 10, bottom: 10, right: 10, left: 10};
var transitionDuration = 300;
var circle_radius = 20;
var minAngleDegrees = 20;

var svg;
function resize_svg(height) {
  var svgWidth = minSide, svgHeight = minSide;
  if (height) {
    svgHeight = Math.max(minside, height * 100);
    svgWidth = Math.max(minside, height * 100);
  }
  svg = d3.select('#tree').append('svg').attr({
    'width': svgWidth,
    'height': svgHeight
  });
}
resize_svg();
var treeToot = null;

$new = $('#new');
$('#en').on('click', function enterNew() {
  var num = parseInt($new.val());
  addToTree(num);
  clearCircles();
  //var h = treeToot.height();
  //resize_svg(h);
  redraw();
});

function clearCircles() {
  svg.selectAll('circle').remove();
  svg.selectAll('text').remove();
//  svg.remove();
}

function addToTree(num) {
  if (!treeToot) {
    treeToot = new TreeNode({tkey: num});
  } else {
    treeToot.insert(num);
  }
  treeToot.preOrderTraverse(function(data){console.log(data.height,data.tkey, data.pAdj)})
}

function redraw() {
  treeToot.width();
  treeToot.height();
  treeToot.preOrderTraverse(draw);
}

function draw(data) {
//    var g = svg.append('g');
  var y = data.height * circle_radius;
  var x = (data.width / 2 + data.pAdj)*minSide;

  svg.append('circle').attr({
    'cx': x,
    'cy': y,
    'r': circle_radius
  });
  svg.append('text').attr({
    'x': x,
    'y': y
  }).text(data.tkey);//Cannot read property tkey of undefined
}

function addIndividual() {
  var pos = insertInTree(num);
  var g = svg.append('g');
  g.append('circle').attr({});
}


