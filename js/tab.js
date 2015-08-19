$(function(){

	var now_tabs = 0;



	$("#tab_add").on("click",function(){

		now_tabs++;

		$("#tabs").append("<div class=tab>タブ"+ now_tabs +"</div>");
		
		// alert("asd");

		$(".tab").css({width:100 / now_tabs +"%"});

		// $(".tab").addClass("tab_on");



	});


	onContextmenu="return false";

	$("main").click(function(e){
  		if(e.which == 3){
    alert("ok!");
  }
});





});