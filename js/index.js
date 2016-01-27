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

$('.mainnav_01').hover(function(){
		$('.navcontent').css('display','block');						
		$('#mainnav_01').css({'display':'block','margin-left':'80px'});							
	},function(){
		
		$('#mainnav_01').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_02').hover(function(){
		$('.navcontent').css('display','block');							
		$('#mainnav_02').css({'display':'block','margin-left':'160px'});							
	},function(){
		$('#mainnav_01').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_03').hover(function(){
		$('.navcontent').css('display','block');							
		$('#mainnav_03').css({'display':'block','margin-left':'240px'});							
	},function(){
		$('#mainnav_01').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_05').hover(function(){
		$('.navcontent').css('display','block');
		$('#mainnav_05').css({'display':'block','margin-left':'293px'});							
	},function(){
		$('#mainnav_01').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_06').hover(function(){
		$('.navcontent').css('display','block');
		$('#mainnav_06').css({'display':'block','margin-left':'293px'});							
	},function(){
		$('#mainnav_01').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_07').hover(function(){
		$('.navcontent').css('display','block');
		$('#mainnav_07').css({'display':'block','margin-left':'293px'});							
	},function(){
		$('#mainnav_01').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_10').hover(function(){
		$('.navcontent').css('display','block');
		$('#mainnav_10').css({'display':'block','margin-left':'293px'});							
	},function(){
		$('#mainnav_01').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_04').hover(function(){
		$('.navcontent').css('display','block');
		$('#mainnav_04').css('display','block');							
	},function(){
		$('#mainnav_09').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_08').hover(function(){
		$('.navcontent').css('display','block');
		$('#mainnav_08').css('display','block');							
	},function(){
		$('#mainnav_09').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_09').hover(function(){
		$('.navcontent').css('display','block');
		$('#mainnav_09').css('display','block');							
	},function(){
		$('#mainnav_09').css('display','none');
		$('.navcontent').css('display','none');
	});
$('.mainnav_11').hover(function(){
		$('.navcontent').css('display','block');
		$('#mainnav_11').css({'display':'block','margin-left':'712px'});							
	},function(){
		$('#mainnav_11').css('display','none');
		$('.navcontent').css('display','none');
	});

$('#mainnav_01').mouseover(function(){
    $(this).show();
	alert(1);
}); 
$('.con').hover(function(){
		$('#mainnav_01').css('display','block');							
	},function(){
		$('#mainnav_01').css('display','none');
		$('.navcontent').css('display','none');
	});
$('#mainnav_11').hover(function(){
		$('#mainnav_11').css('display','block');							
	},function(){
		$('#mainnav_11').css('display','none');
		$('.navcontent').css('display','none');
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
$('#boxtwo_1>li').hover(function(){
		var num_boxli =$(this).index()+1;						 
		$(this).children().children().attr('src','images/bowtwo_0'+num_boxli+'.png');
	},function(){
		var num_boxli =$(this).index()+1;						 
		$(this).children().children().attr('src','images/bowtwo_'+num_boxli+'.png');
	}
	);
	var curIndex = 0;
	var curRoad = 0;
	var imgLen = $(".img_go>img").length; //图片总数
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
		  $(".nextone").click(function(){ alert(curIndex);
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