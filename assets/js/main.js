$(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    $(document).click(function (e) {
        var $searchForm = $(".search");
       
        if($searchForm !== e.target && !$searchForm.has(e.target).length){
            $(".search-input").removeClass('open');
        }  
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

    $('.mb-menu .dropdown-link').on('click', function(){
        $(this).parent().next().slideToggle();
        $(this).children('.fa-minus-square').toggle();
        $(this).children('.fa-plus-square').toggle();
        $('.mb-menu .dropdown-link').not(this).parent().next().slideUp();
        $('.mb-menu .dropdown-link').not(this).children('.fa-minus-square').hide();
        $('.mb-menu .dropdown-link').not(this).children('.fa-plus-square').show();
      })

    $('.detail-content .item .text').on('click', function(){
      $(this).next().slideToggle();
      $('.detail-content .item .text').not(this).next().slideUp();
      $(this).children('.fa-caret-square-right').toggle();
      $(this).children('.fa-caret-square-down').toggle();
      $('.detail-content .item .text').not(this).children('.fa-caret-square-right').show();
      $('.detail-content .item .text').not(this).children('.fa-caret-square-down').hide();
    })

    $('.commit .row div:nth-child(2n)').after('<hr>');

    $('.contact-form input,.contact-form textarea').on('click', function(){
      $(this).addClass('active');
    })

    $('.contact-form input,.contact-form textarea').on('focus', function(){
      $(this).addClass('active');
    })

    $('.coucil a.name').on('click', function(){
      $(this).parent().next().slideToggle();
    })

    function setHeight() {
      var windowHeight = $(window).innerHeight() - $('.header').innerHeight();
      $('.banner-slide,.detail .side-menu').css('height', windowHeight);
    };
    setHeight();

    $(window).resize(function() {
      setHeight();
    });
  

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

    $('.compliance-btn').on('click', function(){
      $(this).hide();
      $('#compliance .contact-form').hide();
      $('#compliance .message').show();
    })
  });
});