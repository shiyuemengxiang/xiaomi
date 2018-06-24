$(function(){
	$(window).scroll(function(){
		 let top=$(window).scrollTop();
		 if(top>0){
		 	$('#header').css({'position':'fixed','top':'0','z-index':'999'})
		 }else{
		 	$('#header').css({'position':'static'})
		 }
	})
})
