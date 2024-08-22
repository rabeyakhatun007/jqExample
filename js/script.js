/*_______________________________JQ______________________________*/
$(document).ready(function(){

/*Example: 1 */
	$('#btn1').on('click', function(){
		alert("Welcome")
	});



/*Example: 2 */
	 $('#p1').on('mouseenter', function(){
      alert("Welcome!");
    })



/*Example: 3 */
	$('#btn').on('click', function(){
		$('#demo').hide();
	});

	$('#btns').on('click', function(){
		$('#demo').show();
	});


/*Example: 4 */
	$("#hd").on('click', function(){
      $("p").hide();
    });

    $("#sh").on('click', function(){
      $("p").show();
    });



/*Example: 5 */
    $("button").on('click', function(){
      $(".test").hide();
    });



/*Example: 6 */
    $('#btnfo').on('click', function(){
		$('#sss').fadeOut();
	}); 

	$('#btnfi').on('click', function(){
		$('#sss').fadeIn();
	});


/*Example: 7 */
	$("p").on('dblclick', function(){
    $(this).hide();
  });



/*Example: 8 */
  $("input").on('focus', function(){
    $(this).css("background-color", "yellow");
  });
  $("input").on('blur', function(){
    $(this).css("background-color", "green");
  });



/*Example: 9 */
 $("#demo1").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }  
  });



/*Example: 10 */
   $('#demo2').on('click', function(){
    $('#demo3').fadeIn();
    $('#demo4').fadeIn("slow");
    $('#demo5').fadeIn(3000);
  });

/*Example: 11 */
    $('#demo6').on('click', function(){
    $('#demo7').fadeOut();
    $('#demo8').fadeOut("slow");
    $('#demo9').fadeOut(3000);
  });


/*Example: 12 */
    $('#flip').on('click', function(){
      $('#panel').slideDown("slow");
  });



/*Example: 13 */
   $("button").on('click', function(){
    $("div").animate({left: '250px'});
  });



    
});

