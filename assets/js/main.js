$(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    $(document).click(function (e) {
        var $searchForm = $(".search");
       
        if($searchForm !== e.target && !$searchForm.has(e.target).length){
            $(".search-input").removeClass('open');
        }  
    })

    AOS.init({
        once: true,
    });

    $(window).on('load', function () {
      $('#loading').hide();
    }) 

    $('.search .btn').on('click', function(){
      $('.search-input').toggleClass('open');
    })

    $(window).on('scroll', function(){
      var scroll = $(window).scrollTop();

      if(scroll >= 130){
        $('.header-bottom').addClass('animate__animated animate__fadeInDown fixed');
        $('.back-to-top').addClass('animate__animated animate__fadeInRight show');
      }else{
        $('.header-bottom').removeClass('animate__animated animate__fadeInDown fixed');
        $('.back-to-top').removeClass('animate__animated animate__fadeInRight show');
      }
    })
    
    $('.menu-btn').on('click', function(){
      $('.mb-menu').addClass('open');
      $('body').addClass('hidden-overflow');
    })

    $('.mb-menu .close').on('click', function(){
      $('.mb-menu').removeClass('open');
      $('body').removeClass('hidden-overflow');
    })

    $('.mb-menu .nav-link').on('click', function(){
      $(this).next().slideToggle();
      $('.mb-menu .nav-link').not(this).next().slideUp();
    })

    $('.detail-content .item .text').on('click', function(){
      $(this).next().slideToggle();
      $('.detail-content .item .text').not(this).next().slideUp();
      $(this).children('.fa-caret-square-right').toggle();
      $(this).children('.fa-caret-square-down').toggle();
    })

    $('.contact-form input,.contact-form textarea').on('click', function(){
      $(this).addClass('active');
      $('.contact-form input,.contact-form textarea').not(this).removeClass('active')
    })

    $('.coucil a.name').on('click', function(){
      $(this).parent().next().slideToggle();
    })

  setTimeout(function() {
       $('.split').addClass('active')
    }, 400);
  
 
window.onload = function() {
  var split = new Split();
  var webdev = (function datwebdev() {
    var webdev = new dat.webdev();
    webdev.add(split, "gridX", 1, 20).step(1).onChange(function(newValue) {
      split.create();
    });
    webdev.add(split, "gridY", 1, 20).step(1).onChange(function(newValue) {
      split.create();
    });
    webdev.add(split, "delay", 0, 0.3).step(0.01).onChange(function(newValue) {
      split.create();
    });
    return webdev;
  });
};


  

    $('#banner-slide').owlCarousel({
      loop:false,
      margin:0,
      nav:true,
      navText:["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"],
      dots:false,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
    })

    $('#members-slide').owlCarousel({
      loop:false,
      margin:22,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          767:{
              items:2
          },
          1200:{
              items:3
          }
      }
    });

    $('.partners-slide').owlCarousel({
      loop:false,
      margin:22,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:2
          },
          767:{
              items:4
          },
          1200:{
              items:6
          }
      }
    })

    $('.awards-slide').owlCarousel({
      loop:false,
      margin:22,
      nav:false,
      dots:false,
      responsive:{
          0:{
              items:1
          },
          767:{
              items:2
          },
          1200:{
              items:3
          }
      }
    })
  });
});