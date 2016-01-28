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

$(function(){
	var my_i=1;
	for(my_i;my_i<=11;my_i++){
		var my_i2=my_i;	
		$('#mainnav_'+my_i2).mousemove(function(){
			$(this).show();
		});	
		$('#mainnav_'+my_i2).mouseout(function(){
			$(this).hide();
					
		});
	}
	
	$('#nav .navnum').mousemove(function(){
			var mynum=$(this).data('num');
			$('#mainnav_'+mynum).show();
	});	
	$('#nav .navnum').mouseout(function(){
			var mynum=$(this).data('num');
			$('#mainnav_'+mynum).hide();
			
	});	
	
	
});



$('.nav>li').mouseover(function(){
		var num_bar =$(this).index();
		$('.banner>li').each(function(){
		 if($(this).index('.banner>li')==num_bar){
		 	$(this).fadeIn(3000);
		 }else{
		 	$(this).fadeOut(3000);
		 }
								});
   });
//boxtwo
$('.boxtwo>.middle>ul>li').hover(function(){
		var num_boxli =$(this).index('.boxtwo>.middle>ul>li')+1;			 
		$(this).children().children().attr('src','images/bowtwo_0'+num_boxli+'.png');
	},function(){
		var num_boxli =$(this).index()+1;						 
		$(this).children().children().attr('src','images/bowtwo_'+num_boxli+'.png');
	}
	);
$('.boxtwo>.middle>ul').eq(0).show().siblings('ul').hide();
$('.boxtwo>.middle>.pre').click(function(){
		var ul_len = $('.boxtwo>.middle>ul').length;							 
		var now_ul = $('.boxtwo>.middle>.active').index('.middle>ul');
		if(now_ul>0){
			now_ul-=1;
			$('.boxtwo>.middle>ul').eq(now_ul).show().siblings('ul').hide();
			$('.boxtwo>.middle>ul').eq(now_ul).addClass('active').siblings('ul').removeClass('active');
			}
	});
$('.boxtwo>.middle>.next').click(function(){
		var ul_len = $('.boxtwo>.middle>ul').length;								 
		var now_ul = $('.boxtwo>.middle>.active').index('.middle>ul');
		if(now_ul<ul_len){
			now_ul+=1;
			$('.boxtwo>.middle>ul').eq(now_ul).show().siblings('ul').hide();
			$('.boxtwo>.middle>ul').eq(now_ul).addClass('active').siblings('ul').removeClass('active');
			}
	});
	var curIndex = 0;
	var curRoad = 0;
	var imgLen = $(".img_go>a>img").length; //图片总数
	var autoChange = setInterval(function(){ 
	  if(curIndex < imgLen-3&&curRoad==0){ 
		curIndex++ ;
	  }else{
	  	curRoad=1;
		curIndex-- ;
		if(curIndex <0){
				curRoad=0;
				curIndex=1 ;
			}
	  }
	  changeTo(curRoad);
	  },1000);
	 
		 $(".preone").hover(function(){ 
	  //滑入清除定时器
		  clearInterval(autoChange);
		},function(){ 
		  //滑出则重置定时器
		  autoChangeAgain();
		});
		  $(".preone").bind('click',function(){ 
	  		if(curIndex < 2&&curIndex>0){
   			changeTo(1);
			curIndex--;
			
			}
		});
		  
		 $(".nextone").hover(function(){ 
	  //滑入清除定时器
		  clearInterval(autoChange);
		},function(){ 
		  //滑出则重置定时器
		  autoChangeAgain();
		});
		  $(".nextone").click(function(){ 
	  		if(curIndex < imgLen-3&&curIndex>=0){
				changeTo(0);
				curIndex++;
			}
		}); 
		 
		function autoChangeAgain(){
			autoChange = setInterval(function(){ 
			  if(curIndex < imgLen-3&&curRoad==0){ 
				curIndex++ ;
			  }else{
				curRoad=1;
				curIndex-- ;
				if(curIndex <0){
						curRoad=0;
						curIndex=1 ;
					}
			  }
			  changeTo(curRoad);
			  },1000);
		 }
		 function changeTo(curRoad){
		 	if(curRoad==0){
				$(".img_go").animate({
								left: '-='+212.5
							},'quick');
			}else{
				$(".img_go").animate({
								left: '+='+212.5
							},'quick');

				}
		 }