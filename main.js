$(document).ready(function() {
	$('#start').mouseover(function(){
		$('#start').css('background', '#04d8e8');
	});
	$('#start').mouseout(function(){
		$('#start').css('background','#1050d1');
	});
	$('#start').click(function(){
		$("#header").fadeOut();
		$("#click").hide();	
	});
	$('#bubble').click(function(){
		$('#bubble').hide();
	});		
	function placebubble() {
		console.log("working");
		var position = ["a1", "a2", "a3","a4","a5","a6","a7","a8" ];
		console.log(position.length);
		min = Math.ceil(0);
		max = Math.floor(position.length);
		var newPostion = Math.floor((Math.random() * max) + min);
		console.log(newPostion);
		var cell=$(document.getElementById(position[newPostion]))

		cell.append($("<img id='bubble' src='http://l.thumbs.canstockphoto.com/canstock6331709.jpg'></img>"));
	}
	placebubble();
});	