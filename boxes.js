'use strict';

$(document).ready(function() {
  // $('#secretBox').css('background-color','white');
  // $('#secretBox').append('<h1>secret box!</h1>');
  // $('#row1').children('div').removeClass().addClass('box boxType3');
  // $('#row4 div').last().hide();
  // $('.boxType1').css('background-color', 'white');
  // $('#row2 div').slice(0,2).removeClass();
  // console.log($('#container div'));
  // $('#container div').not($('.row')).not($('#secretBox')).css('width','2px');
  // $('#container').click(function(e) {
  //   console.log(e.clientX + " , " + e.clientY);
  // });

  // $("div[background='red']").append('<a href=www.galvanize.com>Galvanize</a>').click(function(e) {
  //   alert("You will never leave!!!");
  //   e.preventDefault();
  // })

  $('div .box').toggle(function() {
    $('this').append('<img src="" />')
  });


});

console.log("hello world");
