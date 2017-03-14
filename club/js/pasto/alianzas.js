
$(document).ready(function(){




$(function(){
$("#activo132").show();
$(".xilon-titulo").click(function(e){

e.preventDefault();

var contenido=$(this).next(".xilon-content");

if(contenido.css("display")=="none"){ //open

$(".xilon-titulo").removeClass("open");
$(".xilon-content").slideUp(550);
contenido.slideDown(550);
$(this).addClass("open");
}
else{ //close
contenido.slideUp(550);
$(this).removeClass("open");
}
});
});



//bater

$(function(){
$("#activo133").show();
$(".bater-titulo").click(function(e){

e.preventDefault();

var contenido=$(this).next(".bater-content");

if(contenido.css("display")=="none"){ //open

$(".bater-titulo").removeClass("open");
$(".bater-content").slideUp(550);
contenido.slideDown(550);
$(this).addClass("open");
}
else{ //close
contenido.slideUp(550);
$(this).removeClass("open");
}
});
});




//cero

$(function(){
$("#activo134").show();
$(".cero-titulo").click(function(e){

e.preventDefault();

var contenido=$(this).next(".cero-content");

if(contenido.css("display")=="none"){ //open

$(".cero-titulo").removeClass("open");
$(".cero-content").slideUp(550);
contenido.slideDown(550);
$(this).addClass("open");
}
else{ //close
contenido.slideUp(550);
$(this).removeClass("open");
}
});
});



//riviera

$(function(){
$("#activo135").show();
$(".riviera-titulo").click(function(e){

e.preventDefault();

var contenido=$(this).next(".riviera-content");

if(contenido.css("display")=="none"){ //open

$(".riviera-titulo").removeClass("open");
$(".riviera-content").slideUp(550);
contenido.slideDown(550);
$(this).addClass("open");
}
else{ //close
contenido.slideUp(550);
$(this).removeClass("open");
}
});
});



//sonrisas sanas

$(function(){
$("#activo140").show();
$(".son-risas-titulo").click(function(e){

e.preventDefault();

var contenido=$(this).next(".son-risas-content");

if(contenido.css("display")=="none"){ //open

$(".son-risas-titulo").removeClass("open");
$(".son-risas-content").slideUp(550);
contenido.slideDown(550);
$(this).addClass("open");
}
else{ //close
contenido.slideUp(550);
$(this).removeClass("open");
}
});
});




//sonrisas sanas

$(function(){
$("#activo141").show();
$(".saul-titulo").click(function(e){

e.preventDefault();

var contenido=$(this).next(".saul-content");

if(contenido.css("display")=="none"){ //open

$(".saul-titulo").removeClass("open");
$(".saul-content").slideUp(550);
contenido.slideDown(550);
$(this).addClass("open");
}
else{ //close
contenido.slideUp(550);
$(this).removeClass("open");
}
});
});




});
