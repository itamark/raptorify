$(function(){
	did = 0;
$('.raptorify').click(function(){
did++;
	$('body').append('<img src="img/1.png" class="raptor" id="'+did+'" style="position:absolute; top:10px; left:10px; display:none;" />')
	$('img.raptor#'+did).css({
   'top' : (Math.floor(Math.random() * $(window).height()) + 0),
   'left' : Math.floor(Math.random() * $(window).width()) + 0
});
	$('img.raptor#'+did).show();
});
});