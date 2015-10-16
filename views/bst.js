/**
 *
 * Created by yusaira-khan on 14/10/15.
 */

console.log('hello World!');
//CONSTANTS
var svgWidth = 620, svgHeight = 620;
var margin = {top: 10, bottom: 10, right: 10, left: 10};
var transitionDuration = 300;
var circle_radius = 20;
var minAngleDegrees = 20;
var svg = d3.select('#tree').append('svg').attr({
  'width': svgWidth,
  'height': svgHeight
});
var chartWidth = svgWidth - margin.right - margin.left, chartHeight = svgHeight - margin.top - margin.bottom;
var treeToot = null;

$new = $('#new');
$('#enter').on('click', function enterNew() {
  var num = parseInt($new.val());
  addToTree(num);
  var h=treeToot.height();

});

function clearCircles() {
  svg.selectAll('g').remove();
}

function addToTree(num){
  if(!treeToot){
    treeToot=new TreeNode({tkey:num});
  }else{
    treeToot.insert(num);
  }
}

function addIndividual() {
  var pos = insertInTree(num);
  var g = svg.append('g');
  g.append('circle').attr({});
}