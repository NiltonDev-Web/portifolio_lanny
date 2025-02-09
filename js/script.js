$(function () {


    //HEADER
    $(window).scroll(function () {
          if($(this).scrollTop() > 200)
          {
              if (!$('.main_header').hasClass('fixed'))
              {
                  $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                      {
                          'top': '0px'
                      }, 500);
              }
          }
          else
          {
              $('.main_header').removeClass('fixed');
          }
    });


});
/* CUBOS 3D*/
// Configura a rotação do cubo
function setupCubeRotation(sceneId, cubeId) {
    const cube = document.getElementById(cubeId);
    let angleY = 0;
    
    document.getElementById(sceneId).addEventListener("mouseenter", () => {
        angleY += 90;
        cube.style.transform = `rotateY(${angleY}deg)`;
    });
}

// Configura os dois cubos de forma independente
setupCubeRotation("scene1", "cube1");
setupCubeRotation("scene2", "cube2");