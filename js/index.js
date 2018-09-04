var space = 1;
for (var r=0; r<8; r++) {
  var col = "";
  var get_val = Math.floor(Math.random() * 8);
  for (var c=0; c<8; c++) { 
  	 if(get_val === c){
  	 	col += "<td data-pos='"+space+"'><span>1</span></td>";
 	}
 	else{
 		col += "<td data-pos='"+space+"'></td>";
 	}

     space++; 
  }
  $("#chessboard").append("<tr>"+col+"</tr>");
}