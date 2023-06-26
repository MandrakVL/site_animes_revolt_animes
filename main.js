$(document).ready(function() {
    $('#carousel-slide').slick({
        autoplay: true,
    })
    
    $('#slide-cards-anm').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
        responsive: [
            {
                breakpoint: 1040, // Ponto de interrupção para dispositivos móveis
                settings: {
                      slidesToShow: 4
                  }
              },
            {
                breakpoint: 900, // Ponto de interrupção para dispositivos móveis
                settings: {
                      slidesToShow: 3
                  }
              },
            {
              breakpoint: 768, // Ponto de interrupção para dispositivos móveis
              settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 725, // Ponto de interrupção para dispositivos móveis
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 500, // Ponto de interrupção para dispositivos móveis
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    
    
    $('#slide-cards-anm-2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
        {
            breakpoint: 1040, // Ponto de interrupção para dispositivos móveis
            settings: {
                  slidesToShow: 4
              }
          },
        {
            breakpoint: 900, // Ponto de interrupção para dispositivos móveis
            settings: {
                  slidesToShow: 3
              }
          },
        {
          breakpoint: 768, // Ponto de interrupção para dispositivos móveis
          settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 725, // Ponto de interrupção para dispositivos móveis
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 500, // Ponto de interrupção para dispositivos móveis
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });
    
    $('#slide-cards-anm-3').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
        {
            breakpoint: 1040, // Ponto de interrupção para dispositivos móveis
            settings: {
                  slidesToShow: 4
              }
          },
        {
            breakpoint: 900, // Ponto de interrupção para dispositivos móveis
            settings: {
                  slidesToShow: 3
              }
          },
        {
          breakpoint: 768, // Ponto de interrupção para dispositivos móveis
          settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 725, // Ponto de interrupção para dispositivos móveis
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 500, // Ponto de interrupção para dispositivos móveis
            settings: {
                slidesToShow: 1
            }
        }
    ]
    });

});


function btnOpenHamburguer() {
    let abrirMenuHamburguer = document.getElementById('navbar-responsivoId');

    if (abrirMenuHamburguer.style.display == "none") {
        abrirMenuHamburguer.style.display = "block"
    } else {
        abrirMenuHamburguer.style.display = "none"
    }

    
}

// abrirMenuHamburguer.classList.remove('dsp-n')
    // abrirMenuHamburguer.classList.add('dsp-b')