var space = 1;
for (var r=0; r<8; r++) {
  var col = "";
  var get_val = Math.floor(Math.random() * 8);
  var img = new Image();
  img.src = 'diamond.svg';
  for (var c=0; c<8; c++) { 
  	 if(get_val === c){
  	 	col += "<td data-pos='"+space+"' class='diamondBox'><div><span>?</span><img src='"+img.src+"'></div></td>";
 	}
 	else{
 		col += "<td data-pos='"+space+"' class='defaultBox'><div><span>?</span></div></td>";
 	}

     space++; 
  }
  $("#chessboard").append("<tr>"+col+"</tr>");
}
count = 1;
$(".diamondBox").click(function(){
	$(this).find('img').css("visibility","visible");
	$(this).removeClass('diamondBox').addClass('clicked');
	$(this).off("click");
	if($(this).next().is('.hintBox') || $(this).prev().is('.hintBox')){
		$(".hintBox").text('');
	}
		count ++;
		if(count > 8){
			var ClickedDiv = $('.clicked').length;
			var result = 64 - ClickedDiv;
			$("h1").text("Congratulations !! You have unlocked all the 8 Diamonds !!")
			$(".finalScore").text(result);
			$(".results").show();
			window.location.hash = 'show';
	}
});

$(".defaultBox").click(function(){

	if($(this).next().is('.diamondBox')){
		$(".hintBox").text('');
		$(this).text('->');
		$(this).addClass('hintBox');
		$(this).next().removeClass('diamondBox');
	}
	else if($(this).prev().is('.diamondBox')){
		$(".hintBox").text('');
		$(this).text('<-');
		$(this).addClass('hintBox');
		$(this).prev().removeClass('diamondBox');
	}
	else{$(this).text('');}
	$(this).addClass('clicked');
	$(this).off("click");
});
