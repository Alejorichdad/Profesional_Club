


$(document).ready(function(){



// - ALIANZA -  CAD -//

  $(function(){
  $("#activoN").show();
  $(".cad-N-titulo").click(function(e){

        e.preventDefault();

        var contenido=$(this).next(".cad-N-content");

        if(contenido.css("display")=="none"){ //open

          $(".cad-N-titulo").removeClass("open");
          $(".cad-N-content").slideUp(550);
          contenido.slideDown(550);
          $(this).addClass("open");
        }
        else{ //close
          contenido.slideUp(550);
          $(this).removeClass("open");
        }
      });
  });


  // - ALIANZA -  ALFA 21 -//

    $(function(){
    $("#activo1").show();
    $(".alfa-N-titulo").click(function(e){

          e.preventDefault();

          var contenido=$(this).next(".alfa-N-content");

          if(contenido.css("display")=="none"){ //open

            $(".alfa-N-titulo").removeClass("open");
            $(".alfa-N-content").slideUp(550);
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
  $(".mindset-N-titulo").click(function(e){

        e.preventDefault();

        var contenido=$(this).next(".mindset-N-content");

        if(contenido.css("display")=="none"){ //open

          $(".mindset-N-titulo").removeClass("open");
          $(".mindset-N-content").slideUp(550);
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
    $(".agn-N-titulo").click(function(e){

          e.preventDefault();

          var contenido=$(this).next(".agn-N-content");

          if(contenido.css("display")=="none"){ //open

            $(".agn-N-titulo").removeClass("open");
            $(".agn-N-content").slideUp(550);
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
      $(".sonria-N-titulo").click(function(e){

            e.preventDefault();

            var contenido=$(this).next(".sonria-N-content");

            if(contenido.css("display")=="none"){ //open

              $(".sonria-N-titulo").removeClass("open");
              $(".sonria-N-content").slideUp(550);
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
