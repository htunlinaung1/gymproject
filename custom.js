$(document).ready(function(){

    $(".dropdown-toggle").hover(function(){

        var dropdownMenu = $(this).children(".dropdown-menu");

        if(dropdownMenu.is(":visible")){

            dropdownMenu.parent().toggleClass("open");

        }

    });
    $('.carousel-inner').carousel({
  interval: 3000
})


    	  $('#bmi-calculate').click( 
    function calculate(){
        var height =  parseFloat($('#input1').val());
        var weight =  parseFloat($('#input2').val());
        var height_p2 = Math.pow(height,2);
        var  bmi = weight/height_p2;
        if (bmi == null)
        {
        	alert('Please input data!');
        }
        else
        {
        	alert(bmi);
    	}
    });
});

