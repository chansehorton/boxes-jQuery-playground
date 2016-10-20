'use strict';

$(document).ready(function() {
  // $('#secretBox').css('background-color','white');
  // $('#secretBox').append('<h1>secret box!</h1>');

  // $('#row1').children('div').removeClass().addClass('box boxType3');

  // $('#row4 div').last().hide();
  // console.log($('#row4'));
  // console.log($('#row4 div'));

  // $('.boxType1').css('background-color', 'white');

  // $('#row2 div').slice(0,2).removeClass();
  // console.log($('#container div'));

  // $('#container div').not($('.row')).not($('#secretBox')).css('width','2px');
  // $('#container').click(function(e) {
  //   console.log(e.clientX + " , " + e.clientY);
  // });

  // $("div .boxType1).append('<a href=www.galvanize.com>Galvanize</a>').click(function(e) {
  //   alert("You will never leave!!!");
  //   e.preventDefault();
  // })

  // $('body').toggle("fast",function() {
  //   $('body').toggle("slow");
  // });

  $('#container').children('.row').each(function() {
    $(this).children('div').slice(2,3).css('visibility', 'hidden');
  });

  // $('#row1').clone().appendTo('#row4');

  // $.fn.appendRows = function() {
  //
  // };


});
