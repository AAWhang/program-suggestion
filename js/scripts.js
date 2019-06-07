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

  if ($("input:checkbox[name=question1]:checked").val() === "1"){
    csharp += 1;
    python += 1;
    rust += 1;
    swift += 1;
  }

  if ($("input:checkbox[name=question2]:checked").val() === "1"){
    python += 1;
    ruby += 1;
    java += 1;
  }

  if ($("input:checkbox[name=question3]:checked").val() === "1"){
    go += 1;
    swift += 1;
    csharp += 1;
  }

  if ($("input:checkbox[name=question4]:checked").val() === "1"){
    ruby += 1;
    python += 1;
  }

  if ($("input:checkbox[name=question5]:checked").val() === "1"){
    csharp += 1;
    java += 1;
  }

  if ($("input:checkbox[name=question6]:checked").val() === "1"){
    ruby += 1;
    csharp += 1;
    java += 1;
    go += 1;
    python += 1;
    rust += 1;
    swift += 1;
  }

  function removehighlight(language){
    $("div#" + language).removeClass("highlightrow");
    $("div#" + language).removeClass("highlightrow1");
    $("div#" + language).removeClass("highlightrow2");
  }

//Made a function to do the same thing as the commented section out below in a generic manner
  function highlightcheck(language, lengaugestring){
    if (language === 0) {
      removehighlight(lengaugestring);
    } else if (language === 1){
      removehighlight(lengaugestring);
      $("div#" + lengaugestring).addClass("highlightrow");
    } else if (language === 2){
      removehighlight(lengaugestring);
      $("div#" + lengaugestring).addClass("highlightrow1");
    } else {
      removehighlight(lengaugestring);
      $("div#" + lengaugestring).addClass("highlightrow2");
    };
  }
  highlightcheck(ruby, "ruby");
  highlightcheck(csharp, "csharp");
  highlightcheck(java, "java");
  highlightcheck(go, "go");
  highlightcheck(python, "python");
  highlightcheck(rust, "rust");
  highlightcheck(swift, "swift");


/*  Code works but can be simplified into a function

if (ruby === 0) {
  removehighlight("ruby");
} else if (ruby === 1){
  removehighlight("ruby");
  $("div#ruby").addClass("highlightrow");
} else if (ruby === 2){
  removehighlight("ruby");
  $("div#ruby").addClass("highlightrow1");
} else {
  removehighlight("ruby");
  $("div#ruby").addClass("highlightrow2");
};

if (csharp === 0) {
  removehighlight("csharp");
} else if (csharp === 1){
  removehighlight("csharp");
  $("div#csharp").addClass("highlightrow");
} else if (csharp === 2){
  removehighlight("csharp");
  $("div#csharp").addClass("highlightrow1");
} else {
  removehighlight("csharp");
  $("div#csharp").addClass("highlightrow2");
};

if (java === 0) {
  removehighlight("java");
} else if (java === 1){
  removehighlight("java");
  $("div#java").addClass("highlightrow");
} else if (java === 2){
  removehighlight("java");
  $("div#java").addClass("highlightrow1");
} else {
  removehighlight("java");
  $("div#java").addClass("highlightrow2");
};

if (go === 0) {
  removehighlight("go");
} else if (go === 1){
  removehighlight("go");
  $("div#go").addClass("highlightrow");
} else if (go === 2){
  removehighlight("go");
  $("div#go").addClass("highlightrow1");
} else {
  removehighlight("go");
  $("div#go").addClass("highlightrow2");
};

if (python === 0) {
  removehighlight("python");
} else if (python === 1){
  removehighlight("python");
  $("div#python").addClass("highlightrow");
} else if (python === 2){
  removehighlight("python");
  $("div#python").addClass("highlightrow1");
} else {
  removehighlight("python");
  $("div#python").addClass("highlightrow2");
};

if (rust === 0) {
  removehighlight("rust");
} else if (rust === 1){
  removehighlight("rust");
  $("div#rust").addClass("highlightrow");
} else if (rust === 2){
  removehighlight("rust");
  $("div#rust").addClass("highlightrow1");
} else {
  removehighlight("rust");
  $("div#rust").addClass("highlightrow2");
};

if (swift === 0) {
  removehighlight("swift");
} else if (swift === 1){
  removehighlight("swift");
  $("div#swift").addClass("highlightrow");
} else if (swift === 2){
  removehighlight("swift");
  $("div#swift").addClass("highlightrow1");
} else {
  removehighlight("swift");
  $("div#swift").addClass("highlightrow2");
};
*/


})



















































});
