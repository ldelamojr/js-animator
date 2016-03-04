// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//





console.log("jquery works")
$(document).ready(function(){
	var refreshArray = [];
	$("#stringConcatButton").on('click', function(){
		
		if (refreshArray.length === 3) {
			location.reload(true);
		}else {
			refreshArray.push("one");

			$("<span>").appendTo(".animation-container")
			$("span").last().addClass("mover1")
			$(".mover1").css({"margin-right": "100px"})
			$("<span>").appendTo(".mover1").last().addClass("outer-quote").text('"')

			// $("<span>").last().appendTo(".mover1");
			// write animation stuff
			for(var i = 0; i <= $("#stringConcat1").val().length - 1; i++){
// debugger
				$("<span>").appendTo(".mover1");
				$("span").last().css({"color": "brown"})
				$("span").last().text($("#stringConcat1").val()[i]);
					
			};		

			$("<span>").appendTo(".mover1")
			$("span").last().addClass("inner-quote").text('"')

			$("<span>").appendTo(".animation-container")
			$("span").last().addClass("plus").text('+').css({"color":"red", "margin-right": "100px"})

			$("<span>").appendTo(".animation-container")
			$("span").last().addClass('mover2')

			$("<span>").appendTo(".mover2")
			$("span").last().addClass("inner-quote").text('"')
			for(var i = 0; i <= $("#stringConcat2").val().length - 1; i++){
// debugger
				$("<span>").appendTo(".mover2");
				// $("span").last().addClass("mover2")
				$("span").last().css({"text-align": "center", "color": "brown"})
				$("span").last().text($("#stringConcat2").val()[i]);
					
			};		
			$("<span>").appendTo(".mover2")
			$("span").last().addClass("outer-quote").text('"')
			$("span").last().css({"text-align": "center", "color": "black"})
			$("<br>").appendTo(".animation-container")

			$(".mover1").animate({
				opacity: 1
			},1500);

			$(".mover2").animate({
				opacity: 1
			},1500);

			$(".animation-container").animate({
				opacity: 1
			},1500)

			// $(".plus").animate({"font-size": "3em"},1000).animate({"font-size": "0"},1000)
			// $(".plus").animate({"font-size": "3em"},1000)
			// $(".plus")
			// $(".plus").animate({"font-size": "0"},1000)

			$(".mover1").css({"position":"relative"})
			$(".mover2").css({"position":"relative"})


			setTimeout(function(){
// $('div').animate({rotate: '30deg'},1000);
$(".mover1").last().animate({left: "+=50px"},400);
$(".mover2").last().animate({left: "-=50px"},400);
$(".inner-quote").hide();
$(".plus").hide();

					// $(".mover").animate({
					// 	left: ''
					// },160)

			},1500)


		};

	});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	$("#arrayPopButton").on('click', function(){
		
		if (refreshArray.length === 3) {
			location.reload(true);
		}else {
			refreshArray.push("one");

			$("<span>").appendTo(".animation-container")
			// $("span").last().addClass("mover1")
			$("span").last().addClass("first-bracket").text("[")
			// $(".mover1").css({"margin-right": "100px"})
			// $("<span>").appendTo(".mover1").last().addClass("outer-quote").text('"')	

			// $("<span>").appendTo(".mover1");
			for(var i = 1; i <= 5; i++) {
				$("<span>").appendTo(".animation-container");
				$("span").last().css({"color": "brown"})
				$("span").last().text( $("#arrayElement"+i).val() );
				if (i<5) {$("<span>").appendTo(".animation-container").text(",")}
				// if (i=5) {$("span").last().css({"font-family":"monospace"})}

			}

			$("<span>").appendTo(".animation-container")
			// $("span").last().addClass("mover1")
			$("span").last().addClass("second-bracket").text("]")
			$("<br>").appendTo(".animation-container")


			// $fifthElement = $(".animation-container").children()[$(".animation-container").children().length-2]
			// var fifthElement = $( ".animation-container:eq( -2 )" );
			var $fifthElement = $(".animation-container").children().last().prev().prev()
			$fifthElement.css({"position": "relative"})
			var lastElCount = $fifthElement.width()
			var brackMoveAmt = lastElCount - 4

			var $lastComma = $(".animation-container").children().last().prev().prev().prev();
			$lastComma.attr({"position": "relative"})

			var $lastBracket = $(".animation-container").children().last().prev()
			$lastBracket.css({"position": "relative"})

			$(".animation-container").animate({opacity: 1},1300)

			setTimeout(function(){

				$fifthElement.animate({
					left: "1000px"
				},300)

			},1500)

			setTimeout(function(){
				// debugger;
				$lastComma.hide()
				// 	$lastComma.animate({
				// 	left: "100%"
				// },400)
				$lastBracket.animate({
					left: "-=" + brackMoveAmt + "px"
				},400)

			
			},2000)
		}
	});
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////
	$("#forLoopPushButton").on('click', function(){
console.log("hey")
		if (refreshArray.length === 3) {
			location.reload(true);
		}else {
			refreshArray.push("one");


			$("<div>").appendTo(".animation-container").addClass("iValue").text("(i = "+$("#forLoopStart").val()+")")
			$("div").last().css({"font-family": "monospace", "text-align": "left", "margin-left": "60px", "color": "brown", "font-family":"cursive"})

			$("<span>").appendTo(".animation-container").addClass("loopOpenArray").text("[")
			
			$("<span>").appendTo(".animation-container").addClass("loopCloseArray").attr("id","loopCloseArray").text("]")
			// $("<span>").css({"margin-left": "20px"})
			$(".animation-container").animate({opacity:1},2500)

			$('.iValue').fadeTo(1000, 0.5, function() { $('.iValue').fadeTo(800, 1); });

			function doSetTimeout(i){
				setTimeout(function(){
					$(".iValue").text("(i = "+i+")")
					$(".iValue").animate({opacity:0},1250,function(){
						$(".iValue").animate({opacity:1},1250)
					})
					$("<span>").appendTo(".loopOpenArray").css({"color":"brown"}).text(i)
					$("<span>").appendTo(".loopOpenArray").addClass("comma").text(",")
					console.log($(".iValue").val().toString())
				},2500*j);
			}

			var j = 0;
			for(var i = parseInt( $("#forLoopStart").val() ); i <= parseInt( $("#forLoopEnd").val() ); i = i + parseInt( $("#forLoopIncrement").val() ) ) {
				// debugger
				j++
				console.log(j)
				doSetTimeout(i)
				debugger
				// if( i > parseInt( $("#forLoopEnd").val() ) - 2 * parseInt( $("#forLoopIncrement").val() )) {
					// $(".comma").last().hide()
				// }
				console.log(i)
			};
			setTimeout(function(){
				$(".comma").last().hide()
			},2500*j)
		}
	});
});
// $("#arrayLengthButton").on('click', function(){
// 	return "one" + "two";
// });
