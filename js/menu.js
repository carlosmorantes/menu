$(document).ready(main);

var count = 1;

function main () {
	$('.menu_bar').click(function(){
      if (count == 1){
      	$('nav').animate({
      		left: '0'
      	});
      	count = 0;

      }else{
      	count = 1;
      	$('nav').animate({
      		left: '-100%'
      	});

      }
	});

	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	})
}