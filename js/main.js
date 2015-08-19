$(function(){

	var main_now = 0;

	$("#option_but").on("click",function(){

		if(main_now === 0){

			$("main").addClass("option_on");

			$(".settings").addClass("option_on_settings");

			main_now = 1;


			$("#option_but:hover > .inbox1").css({
				transform:"rotate(45deg)",
				width:"33%",
				top:"36%",
				left:"52%"
			});


			$("#option_but:hover > .inbox3").css({
				transform:"rotate(-45deg)",
				width:"33%",
				top:"54%",
				left:"52%"
			});

			$("#option_but:hover > .inbox2").css({
				transform:"rotate(0deg)",
				width:"56%"
			});

		}else if(main_now === 1){

			$("main").removeClass("option_on");

			$(".settings").removeClass("option_on_settings");

			main_now = 0;

			$("#option_but:hover > .inbox1").css({
				transform:"",
				width:"",
				top:"",
				left:""
			});


			$("#option_but:hover > .inbox3").css({
				transform:"",
				width:"",
				top:"",
				left:""
			});

			$("#option_but:hover > .inbox2").css({
				transform:"",
				width:""
			});

		}

	});

});