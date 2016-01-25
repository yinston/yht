$('.boxonenav').mouseover(function(){
	 var num = $(this).index();
	 $('.boxoneimg').each(function() {
		 if($(this).index()==num){
		 	$(this).show();
		 }else{
		 	$(this).hide();
		 }
     });
}); 

/*名师团队遮罩显示*/
$('.msteaml01 dl').bind('mouseenter', function () {
	$(this).find('dt div').hide();
	$(this).find('dd').stop().animate({'top':0},300);
}).bind('mouseleave', function () {
	$(this).find('dd').stop().animate({'top':175},300);
	$(this).find('dt div').show();
});