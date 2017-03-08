

$(document).ready(function(){


$(function(){
$("#activo").show();
$(".iaccordion-titulo").click(function(e){

      e.preventDefault();

      var contenido=$(this).next(".iaccordion-content");

      if(contenido.css("display")=="none"){ //open

        $(".iaccordion-titulo").removeClass("open");
        $(".iaccordion-content").slideUp(550);
        contenido.slideDown(550);
        $(this).addClass("open");
      }
      else{ //close
        contenido.slideUp(550);
        $(this).removeClass("open");
      }


    });
});


(function(){
$("#activo").show();
$(".iaccordion-titulo1").click(function(e){

      e.preventDefault();

      var contenido=$(this).next(".iaccordion-content1");

      if(contenido.css("display")=="none"){ //open

        $(".iaccordion-titulo1").removeClass("open");
        $(".iaccordion-content1").slideUp(550);
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
