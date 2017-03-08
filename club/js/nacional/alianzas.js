


$(document).ready(function(){

   alert("Hola Mundo!");

// - ALIANZA -  CAD -//

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


  / - ALIANZA -  CAD -//

    $(function(){
    $("#activo1").show();
    $(".elite-titulo").click(function(e){

          e.preventDefault();

          var contenido=$(this).next(".elite-content");

          if(contenido.css("display")=="none"){ //open

            $(".elite-titulo").removeClass("open");
            $(".elite-content").slideUp(550);
            contenido.slideDown(550);
            $(this).addClass("open");
          }
          else{ //close
            contenido.slideUp(550);
            $(this).removeClass("open");
          }
        });
    });


// - ALIANZA -  ALFA21 -//

  $(function(){
  $("#activo1").show();
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

// - ALIANZA -  MINSET -//

  $(function(){
  $("#activo2").show();
  $(".mindset-titulo").click(function(e){

        e.preventDefault();

        var contenido=$(this).next(".mindset-content");

        if(contenido.css("display")=="none"){ //open

          $(".mindset-titulo").removeClass("open");
          $(".mindset-content").slideUp(550);
          contenido.slideDown(550);
          $(this).addClass("open");
        }
        else{ //close
          contenido.slideUp(550);
          $(this).removeClass("open");
        }

      });
  });



  // - ALIANZA -  Agn artes graficas -//

    $(function(){
    $("#activo3").show();
    $(".agn-titulo").click(function(e){

          e.preventDefault();

          var contenido=$(this).next(".agn-content");

          if(contenido.css("display")=="none"){ //open

            $(".agn-titulo").removeClass("open");
            $(".agn-content").slideUp(550);
            contenido.slideDown(550);
            $(this).addClass("open");
          }
          else{ //close
            contenido.slideUp(550);
            $(this).removeClass("open");
          }

        });
    });

    // - ALIANZA - Sonría  -//

      $(function(){
      $("#activo4").show();
      $(".sonria-titulo").click(function(e){

            e.preventDefault();

            var contenido=$(this).next(".sonria-content");

            if(contenido.css("display")=="none"){ //open

              $(".sonria-titulo").removeClass("open");
              $(".sonria-content").slideUp(550);
              contenido.slideDown(550);
              $(this).addClass("open");
            }
            else{ //close
              contenido.slideUp(550);
              $(this).removeClass("open");
            }

          });
      });

      // - ALIANZA  para empresas- Sonría   -//

        $(function(){
        $("#activo5").show();
        $(".sonria2-titulo").click(function(e){

              e.preventDefault();

              var contenido=$(this).next(".sonria2-content");

              if(contenido.css("display")=="none"){ //open

                $(".sonria2-titulo").removeClass("open");
                $(".sonria2-content").slideUp(550);
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
