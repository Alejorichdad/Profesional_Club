


$(document).ready(function(){

var headers = ["H1","H2","H3","H4","H5","H6"];

$(".accordion1").click(function(e) {
var target = e.target,
    name = target.nodeName.toUpperCase();

if($.inArray(name,headers) > -1) {
  var subItem = $(target).next();

  //slideUp all elements (except target) at current depth or greater
  var depth = $(subItem).parents().length;
  var allAtDepth = $(".accordion1 p, .accordion1 div").filter(function() {
    if($(this).parents().length >= depth && this !== subItem.get(0)) {
      return true;
    }
  });
  $(allAtDepth).slideUp("fast");

  //slideToggle target content and adjust bottom border if necessary
  subItem.slideToggle("fast",function() {
      $(".accordion1 :visible:last").css("border-radius","0 0 10px 10px");
  });
  $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
}
});

//ALIANZAS # 2

var headers = ["H1","H2","H3","H4","H5","H6"];

$(".accordion2").click(function(e) {
var target = e.target,
    name = target.nodeName.toUpperCase();

if($.inArray(name,headers) > -1) {
  var subItem = $(target).next();

  //slideUp all elements (except target) at current depth or greater
  var depth = $(subItem).parents().length;
  var allAtDepth = $(".accordion2 p, .accordion2 div").filter(function() {
    if($(this).parents().length >= depth && this !== subItem.get(0)) {
      return true;
    }
  });
  $(allAtDepth).slideUp("fast");

  //slideToggle target content and adjust bottom border if necessary
  subItem.slideToggle("fast",function() {
      $(".accordion2 :visible:last").css("border-radius","0 0 10px 10px");
  });
  $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
}
});

});
