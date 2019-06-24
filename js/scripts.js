(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
   /*  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 72)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
    var altura_body = $("body").height();
    console.log(altura_body);
    var altura_prestador = $("#prestador").height();
    console.log("Altura do prestador: " + altura_prestador);

    var offsetTop = $("#prestador").offset().top;

    var altura_html = $("#prestador").height();
    console.log(altura_body - (altura_prestador-offsetTop)); */



    $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
      if (!$(this).next().hasClass('show')) {
        $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass('show');
    
    
      $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
        $('.dropdown-submenu .show').removeClass("show");
      });
    
    
      return false;
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 75
    });
    $(window).scroll(function () {
      $('nav').toggleClass('active', $(this).scrollTop() > 800);

      /* if($(this).scrollTop() > 800){
          $(this).fadeOut();
      } */
  })
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("texto-preto");
        $('.fixed-top').attr('style','top: 0');
      } else {
        $("#mainNav").removeClass("texto-preto");
        $('.fixed-top').attr('style','top: 30px');
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Magnific popup calls
    /* $('#portfolio').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    }); */
  
  })(jQuery); 
  
        /*  $(window).on('load', function () {
                var codigo = localStorage.getItem('opcao');
                if (codigo != null) {
                    $('.modal').modal('hide');
                } else {
                    $('.modal').modal('show');
                }
            });

            $("#beneficiario-codigo").click(function () {
                guardarValor(1);
            });
            $("#prestador-codigo").click(function () {
                $('.menu').remove();
                guardarValor(2);
            });

            function guardarValor(codigo) {
                var opcao = {
                    'codigo': codigo
                };
                localStorage.setItem('opcao', JSON.stringify(opcao));
            } */
            /*  $(window).scroll(example);

             function example() {
                 
                 var tempScrollTop = $('#contato').position();
                 /* var tempScrollTop = $(window).scrollTop(); 
                 console.log("Scroll from Top: " + tempScrollTop.toString());
             }; */
            /* $(document).scroll(function () {
                var $nav = $(".navbar-nav");
                $nav.toggleClass('texto-preto', $(this).scrollTop() > $nav.height());
            }); */
  // End of use strict
  