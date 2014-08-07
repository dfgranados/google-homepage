$(document).ready(function(){
	$('input').focus(function(){
		$('table').css('border', '1px solid rgba(65,105,225, 0.8)');
	});
	$('input').focusout(function(){
		$('table').css('border', '1px solid #cdcdcd');
	});
});