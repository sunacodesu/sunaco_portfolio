$(function() {



  var style = '<style>.p-header__imgWrapper{opacity:0;}.p-header__siteLogo{opacity:0;}.p-portfolioItemPage__body{opacity:0;}#scrollTop{display:none;}';

  $('head link:last').after(style);
  
    var $headImg = $('.p-header__imgWrapper');
    var $headLogo = $('.p-header__siteLogo');
    var $portfolioPage = $('.p-portfolioItemPage__body'); 
    
  
    $headImg.fadeTo(2000,1);
    $headLogo.fadeTo(2000,1);
    $portfolioPage.fadeTo(1000,1);


      const spinner = document.getElementById('u-loading');
      spinner.classList.add('u-loaded');
    

  var $button = $('.c-icon--navButton');

  var $nav = $('.p-nav__navWrapper');

  var $cross = $('.c-icon__crossWrapper');



  $button.on('click',function(){
    if($nav.is(':hidden')){
      $('.p-nav__navWrapper:not(:animated)').fadeIn();
      $('p-nav').fadeIn();
    } 
  });


  $cross.on('click',function(){
    if($('.p-nav__navWrapper').is(':visible')){
      $('.p-nav__navWrapper:not(:animated)').fadeOut();
    }
  });

  $(window).on('resize',function(){

    $button.on('click',function(){
      if($nav.is(':hidden')){
        $('.p-nav__navWrapper:not(:animated)').slideDown();
        $('p-nav').slideDown();
      } else {
        $('.p-nav__navWrapper:not(:animated)').slideUp();
      }
    });
  
  
    $cross.on('click',function(){
      if($('.p-nav__navWrapper').is(':visible')){
        $('.p-nav__navWrapper:not(:animated)').slideUp();
      }
    });


  });

// スクロール
  $window = $(window),
  $nav = $('.p-nav__navWrapper'),
  $scrollTop = $('#scrollTop'), 
  threshold = 2;

  
  
    $window.on('scroll', function(){
      if($window.scrollTop() > threshold){
        $scrollTop.fadeIn();
      } else {
        $scrollTop.fadeOut();
      }



      if(window.matchMedia('(min-width:1200px)').matches) {
      if($window.scrollTop() > threshold){
        $nav.fadeIn().addClass('p-nav__fixed');
      } else {
        $nav.fadeOut();
      }
  }
    });
  $window.trigger('scroll');

  // ｽﾑｰｽｽｸﾛｰﾙ
  $('a[href^="#"]').click(function(){
    var speed = 500;

    var href = $(this).attr("href");

    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html,body").animate({scrollTop:position}, speed, "swing");

    return false;
  });

  // スクロールフェードイン

  $(window).on("scroll",function(){
    $('.u-fadeIn').each(function(index, el){
      if( $(window).scrollTop() > ( $(el).offset().top - $(window).height() / 1 )){
        $(el).addClass('u-isOver');
      }
    });
  });

});


