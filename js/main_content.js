$(function(){

	var left_now = "open";
	var right_now = "open";

	$("#tag_board_but").on("click",function(){

		if(left_now === "open" && right_now === "open"){

			$(".main_content").removeClass("open_open_main");

			$(".main_content").addClass("close_open_main");

			$("#tag_board").addClass(".close_open_left");

			left_now = "close";
			

		}else if(left_now === "open" && right_now === "close"){

			$(".main_content").removeClass("open_close_main");

			$("#tag_board").addClass("close_close_right");

			$(".main_content").addClass("close_close_main");

			left_now = "close";


		}else if(left_now === "close"　&& right_now === "open"){

			$("#tag_board").removeClass("close_open_left");

			$(".main_content").removeClass("close_open_main");

			$("#tag_board").removeClass("open_close_left");

			left_now = "open";
			

		}else if(left_now === "close" && right_now === "close"){

			$(".main_content").removeClass("close_open_main");

			$(".main_content").removeClass("open_close_main");

			// function close_left(){
			$(".main_content").removeClass("close_close_main");

			$(".main_content").addClass("open_close_main");


			left_now = "open";


		}

	});




	$("#style_board_but").on("click",function(){

		if(left_now === "open" && right_now === "open"){

			$(".main_content").removeClass("open_open_main");

			$(".main_content").addClass("open_close_main");

			$("#style_board").addClass("open_right");

			right_now = "close";
			

		}else if(left_now === "open" && right_now === "close"){

			$(".main_content").removeClass("open_close_main");

			$(".main_content").removeClass("open_close_main");

			$("#style_board").removeClass("close_right");


			right_now = "open";


		}else if(left_now === "close"　&& right_now === "open"){

			$(".main_content").removeClass("close_open_main");

			$(".main_content").addClass("close_close_main");

			$("#style_board").addClass("open_right");


			right_now = "close";
			

		}else if(left_now === "close" && right_now === "close"){


			$(".main_content").removeClass("close_close_main");

			$("#style_board").removeClass("close_right");

			$(".main_content").addClass("close_open_main");

			right_now = "open";


		}

	});

	

	var hei = $("#tag_board .board_main li").height();

	// alert(hei);

	$("#tag_board .board_main li").css({lineHeight:hei + "px"});

	var opt_hei = $("#option_but").height();

	$("#option_but").css({width:opt_hei + "px"})

	var settings_h1_hei = $(".settings h1").height();

	$(".settings h1").css({
		lineHeight:settings_h1_hei + "px",
		fontSize:settings_h1_hei / 2 + "px"
	});

	var settings_li_hei = $(".settings ul li").height();

	$(".settings ul li").css({
		lineHeight:settings_li_hei + "px",
		fontSize:settings_li_hei / 2 * "px"
	});



});