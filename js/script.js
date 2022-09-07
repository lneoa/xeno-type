$(document).ready(function(){
	

	/* RANDOM DISPLAY ORDER OF IMAGES */


	


	/* MAKE ANCHOR LINKS SMOOTHLY SCROLL */

	$('a.anchor, .footnotereverse a, sup.footnote a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 500);
	    return false;
	});

	/* MAKE META BAR SIT AT BOTTOM IF IT'S A SHORT PAGE */

	// var window_height = $(window).height();
	// var document_height = $(document).height();

	// if(document_height <= window_height) {
	// 	$('#meta-bar').addClass("bottom");
	// }

	// else {
	// 	$('#meta-bar .back-to-top').show();
	// }

	/* CALENDAR TOGGLE */

	//onload open hash
	// var hash = window.location.hash;

	// if(hash !== '') {
	// 	$(hash).closest('li').find('.body').slideDown('fast');
	// 	console.log('hash = ' + hash);
	// }

	$('.current-week').closest('li').find('.body').slideToggle('fast');

	$('ul.calendar .title').click(function(){
		//$('li').find('.body').slideUp('fast');
		$(this).closest('li').find('.body').slideToggle('fast');
		//window.location.hash = $(this).attr("id");
	});

	/* SHUFFLE REORDER LIST ABOVE */

	$('a.shuffle').click(function(){
		/* get html paragraph into array and shuffle it */
		var w = $(this).closest('p').prev();
		var x = w.text();
		var y = x.split('\n');
		var z = y.sort(function() { return 0.5 - Math.random() });
		console.log("this is first array: " + z);

		/* take new shuffled array and put it back into html paragraph */
		var zz = z.reverse().join('<br />');
		console.log("this is second array: " + zz);
		w.html('<p>' + zz + '</p>');
		$(this).fadeOut('fast');
	});

	//NAME PICKER*****
	function shuffle(array) {
	  var m = array.length, t, i;

	  // While there remain elements to shuffle…
	  while (m) {

	    // Pick a remaining element…
	    i = Math.floor(Math.random() * m--);

	    // And swap it with the current element.
	    t = array[m];
	    array[m] = array[i];
	    array[i] = t;
	  }

	  return array;
	}

	$(function() {
	    $("#name-picker").click(function() {
	        var $all = $(".student").removeClass("picked");
	        $(shuffle($all).slice($all.length - 1)).addClass("picked");
	    });
	});
	
});