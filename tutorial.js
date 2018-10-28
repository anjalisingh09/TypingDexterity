function show_div1()
			{
 				$("#game").fadeOut('fast', function() {
 				$("#videotut").fadeOut('fast');
  				$("#written").fadeIn();
 				});
			}
		function show_div2()
			{
 				$("#written").fadeOut('fast', function() {
 				$("#game").fadeOut('fast');
 				$("#videotut").fadeIn();
 				});
			}
			function show_div3()
			{
 				$("#videotut").fadeOut('fast', function() {
 				$("#written").fadeOut('fast');
 				$("#game").fadeIn();
 				});
			}