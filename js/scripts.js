// 7 program names to collect value
// each checkbox will add 1 to the value of associated program names
// if program name is over 1 it will highlight the row
// if program name is 0 it will clear the highlight of the row
// each program name will reset to 0 after check and highlight, may just call the variable names = 0 within the on click function
// this will run on checkbox click
$(document).ready(function(){

$("input").click(function(){
  var collection = 0;
  if ($("input:checkbox[name=vehicle1]:checked").val() === "1"){
    collection += 1;
  }

  if ($("input:checkbox[name=vehicle2]:checked").val() === "1"){
    collection += 1;
  }

  if ($("input:checkbox[name=vehicle3]:checked").val() === "1"){
    collection += 1;
  }

  if ($("input:checkbox[name=vehicle4]:checked").val() === "1"){
    collection += 1;
  }

  if ($("input:checkbox[name=vehicle5]:checked").val() === "1"){
    collection += 1;
  }

  if ($("input:checkbox[name=vehicle6]:checked").val() === "1"){
    collection += 1;
  }
  
  alert(collection);
})



















































});
