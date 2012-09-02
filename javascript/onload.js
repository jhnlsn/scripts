<html>
	<head>
	<script>
		window.onload = function() {alert('not used')}
		window.onload = function() {alert('not used')}
		window.onload = function() {alert('fire')}

		// Function to add event listener
		function load() {
			alert('fire again'); 
		}
		window.addEventListener("load", load, false);
	</script>
	</head>
</html>