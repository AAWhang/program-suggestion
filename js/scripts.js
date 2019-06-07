// 7 program names to collect value
// each checkbox will add 1 to the value of associated program names
// if program name is over 1 it will highlight the row
// if program name is 0 it will clear the highlight of the row
// each program name will reset to 0 after check and highlight, may just call the variable names = 0 within the on click function
// this will run on checkbox click

$(document).ready(function(){

$("input").click(function(){
  var ruby = 0;
  var csharp = 0;
  var java = 0;
  var go = 0;
  var python = 0;
  var rust = 0;
  var swift = 0;

  if ($("input:checkbox[name=vehicle1]:checked").val() === "1"){
    ruby += 1;
    python += 1;
  }

  if ($("input:checkbox[name=vehicle2]:checked").val() === "1"){
    csharp += 1;
    go += 1;
  }

  if ($("input:checkbox[name=vehicle3]:checked").val() === "1"){
    go += 1;
    rust += 1;
    swift += 1;
  }

  if ($("input:checkbox[name=vehicle4]:checked").val() === "1"){
    java += 1;
    python += 1;
  }

  if ($("input:checkbox[name=vehicle5]:checked").val() === "1"){
    ruby += 1;
    rust += 1;
  }

  if ($("input:checkbox[name=vehicle6]:checked").val() === "1"){
    csharp += 1;
    swift += 1;
  }

if (ruby === 0) {
  $("div#ruby").removeClass("highlightrow");
} else {
  $("div#ruby").addClass("highlightrow");
};

if (csharp === 0) {
  $("div#csharp").removeClass("highlightrow");
} else {
  $("div#csharp").addClass("highlightrow");
};

if (java === 0) {
  $("div#java").removeClass("highlightrow");
} else {
  $("div#java").addClass("highlightrow");
};

if (go === 0) {
  $("div#go").removeClass("highlightrow");
} else {
  $("div#go").addClass("highlightrow");
};

if (python === 0) {
  $("div#python").removeClass("highlightrow");
} else {
  $("div#python").addClass("highlightrow");
};

if (rust === 0) {
  $("div#rust").removeClass("highlightrow");
} else {
  $("div#rust").addClass("highlightrow");
};

if (swift === 0) {
  $("div#swift").removeClass("highlightrow");
} else {
  $("div#swift").addClass("highlightrow");
};



})



















































});
