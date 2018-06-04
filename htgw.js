$(document).ready(function(){
	$('#main-pics').mouseenter(function() {
       $(this).animate({
           width: '+=20px'
       });
   });



   $('#main-pics').mouseleave(function() {
       $(this).animate({
           width: '-=20px'
       });
   });


	 $('#submi').click(function()
    {
			var user=$('#Username').val();
			if(user.length!==0){
				$('#logon').hide();
				$('<p>').text("Hello "+user+",").appendTo('#creden');
			};
    });



	 $('.btn').click(function()
    {
        var post = $('.status-box').val();
				var username=$('#Username').val();

				if($("#Username").val().length===0)
        	$('<li>').text(post+" BY "+ "Anonymous").prependTo('.posts');
				else
					$('<li>').text(post+" BY "+username).prependTo('.posts');

        $('.status-box').val('');
        $('.counter').text('140');
        $('.btn').addClass('disabled');
    });



    $('.status-box').keyup(function()
    {
        var postlenght = $('.status-box').val().length;
        var charactersLeft = 140 - postlenght;

        $('.counter').text(charactersLeft);
        if(charactersLeft<0)
            $('btn').addClass('disabled');
        else if(charactersLeft===140)
            $('.btn').addClass('disabled');
        else
            $('.btn').removeClass('disabled');
    });
    $('.btn').addClass('disabled');

		/* When the user clicks on the button,
		toggle between hiding and showing the dropdown content */
		function myFunction() {
    	document.getElementById("myDropdown").classList.toggle("show");
		}
});

// Close the dropdown menu if the user clicks outside of it
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
		if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
						openDropdown.classList.remove('show');
				}
			}
		}
	}
