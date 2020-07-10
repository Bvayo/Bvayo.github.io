/*---------------------------------------

Project: Bitcoin Landing Page
Template Version: 1.1
Author: YasirKareem

01. Navbar FixedTop
02. Navbar Toggle
03. Scroll Spy 
04. Navbar CollapseHide
05. Scroll Top
06. State
07. Owl Carousel Client
07. Cryptocurrency Prices
---------------------------------------*/

$(function () {
    'use strict';
    // navbarFixedTop
    $(window).scroll(function () {
        if ($('.navbar').offset().top > 50) {
            $('.navbar-fixed-top').addClass('top-nav');
            $('.navbar .navbar-brand img').attr('src', 'img/logo/logo-color.png');
        } else {
            $('.navbar-fixed-top').removeClass('top-nav');
            $('.navbar .navbar-brand img').attr('src', 'img/logo/logo.png');
        }
    });
    
    // navbarToggle
    $('.navbar-toggle').on('click', function () {
        $('.navbar-toggle').toggleClass('change');
        $('.navbar').addClass('top-nav');
    });
    
    // scrollSpy
    $('body').scrollspy({target: ".navbar", offset: 50});
    $("#menu a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                window.location.hash = hash;
            });
        }
    });
    
    // navbarCollapseHide
    $('a.click-close').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //scrollTop 
    var scrollButton = $(".scroll-top");
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 500) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });
    scrollButton.on('click', function () {
        $("html,body").animate({scrollTop: 0}, 2000);
    });
    // state
    var a = 0;
    $(window).scroll(function () {
        var oTop = $('.state-items').offset().top - window.innerHeight;
        if (a === 0 && $(window).scrollTop() > oTop) {
            $('.stat-count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        //alert('finished');
                        }

                    });
            });
            a = 1;
        }
    });
   
    //cryptocurrencyPrices
    $.get("https://api.coinmarketcap.com/v1/ticker/", function (data, status) {
        for (var i = 0; i < data.length - 1; i++) {
         if (data[i].id == "bitcoin") {
          $("#bprice").html(data[i].price_usd);
          $("#bmarket-cap").html(data[i]. market_cap_usd);
          $("#bpercent_change").html(data[i]. percent_change_24h);
          $("#btotal_supply").html(data[i]. total_supply);
        }
         if (data[i].id == "ethereum") {
          $("#eprice").html(data[i].price_usd);
          $("#emarket-cap").html(data[i]. market_cap_usd);
          $("#epercent_change").html(data[i]. percent_change_24h);
          $("#etotal_supply").html(data[i]. total_supply);
        } 
          if (data[i].id == "ripple") {
          $("#xprice").html(data[i].price_usd);
          $("#xmarket-cap").html(data[i]. market_cap_usd);
          $("#xpercent_change").html(data[i]. percent_change_24h);
          $("#xtotal_supply").html(data[i]. total_supply);
        }  
          if (data[i].id == "bitcoin-cash") {
          $("#bcprice").html(data[i].price_usd);
          $("#bcmarket-cap").html(data[i]. market_cap_usd);
          $("#bcpercent_change").html(data[i]. percent_change_24h);
          $("#bctotal_supply").html(data[i]. total_supply);
        }  
          if (data[i].id == "cardano") {
          $("#aprice").html(data[i].price_usd);
          $("#amarket-cap").html(data[i]. market_cap_usd);
          $("#apercent_change").html(data[i]. percent_change_24h);
          $("#atotal_supply").html(data[i]. total_supply);
        }  
          if (data[i].id == "neo") {
          $("#nprice").html(data[i].price_usd);
          $("#nmarket-cap").html(data[i]. market_cap_usd);
          $("#npercent_change").html(data[i]. percent_change_24h);
          $("#ntotal_supply").html(data[i]. total_supply);
        }  
          if (data[i].id == "litecoin") {
          $("#xlprice").html(data[i].price_usd);
          $("#xlmarket-cap").html(data[i]. market_cap_usd);
          $("#xlpercent_change").html(data[i]. percent_change_24h);
          $("#xltotal_supply").html(data[i]. total_supply);
        }  
          if (data[i].id == "stellar") {
          $("#lprice").html(data[i].price_usd);
          $("#lmarket-cap").html(data[i]. market_cap_usd);
          $("#lpercent_change").html(data[i]. percent_change_24h);
          $("#ltotal_supply").html(data[i]. total_supply);
        }  
          if (data[i].id == "eos") {
          $("#eoprice").html(data[i].price_usd);
          $("#eomarket-cap").html(data[i]. market_cap_usd);
          $("#eopercent_change").html(data[i]. percent_change_24h);
          $("#eototal_supply").html(data[i]. total_supply);
        }  
          if (data[i].id == "nem") {
          $("#xemprice").html(data[i].price_usd);
          $("#xemmarket-cap").html(data[i]. market_cap_usd);
          $("#xempercent_change").html(data[i]. percent_change_24h);
          $("#xemtotal_supply").html(data[i]. total_supply);
        }  
          if (data[i].id == "iota") {
          $("#iotaprice").html(data[i].price_usd);
          $("#iotamarket-cap").html(data[i]. market_cap_usd);
          $("#iotapercent_change").html(data[i]. percent_change_24h);
          $("#iotatotal_supply").html(data[i]. total_supply);
        }  
        }
    });
});
