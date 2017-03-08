$(document).ready(function(){


$(function(){
$("#activo").show();
$(".cad-titulo").click(function(e){

      e.preventDefault();

      var contenido=$(this).next(".cad-content");

      if(contenido.css("display")=="none"){ //open

        $(".cad-titulo").removeClass("open");
        $(".cad-content").slideUp(550);
        contenido.slideDown(550);
        $(this).addClass("open");
      }
      else{ //close
        contenido.slideUp(550);
        $(this).removeClass("open");
      }
    });
});



$(function(){
$("#activo").show();
$(".alfa-titulo").click(function(e){

      e.preventDefault();

      var contenido=$(this).next(".alfa-content");

      if(contenido.css("display")=="none"){ //open

        $(".alfa-titulo").removeClass("open");
        $(".alfa-content").slideUp(550);
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
