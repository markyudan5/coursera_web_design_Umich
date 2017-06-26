// code for the form
function findGame(){
  var x = document.getElementById("gameChosen").value;
  return x;
}
function displayForms(x){
  console.log("display:success");
  var len = x.length;
  for(i=0;i<len;i++){
    // console.log(x[i].style);
    x[i].style.display = "block";
  }
}
function hideForms(x){
  // console.log("hide:check current");
  // console.log(x);

  if(x != undefined){
    var len = x.length;
    for(i=0;i<len;i++){
      //  console.log("hide:clearing current");
      x[i].style.display = "none";
    }
  }
}

var current = document.getElementsByClassName("wot-choose");;//remember current form for clearing
function initForm(){
  current = document.getElementsByClassName("wot-choose");

  displayForms(current);
}
function switchForm(){
  var x = findGame();

  if(x == "wot"){
    // console.log("World of Tanks");
    hideForms(current);
    current = document.getElementsByClassName("wot-choose");
    // console.log("wot: current update");
    // console.log(current);
    // console.log("=====");
    displayForms(current);
  }
  else if(x == "sc2"){
    // console.log("Starcraft 2");
    hideForms(current);
    current = document.getElementsByClassName("sc2-choose");
    // console.log("sc2: current update");
    // console.log(current);
    // console.log("=====");
    displayForms(current);
  }
  else if(x == "ow"){
    // console.log("Overwatch");
    hideForms(current);
    current = document.getElementsByClassName("ow-choose");
    displayForms(current);
  }

  else if(x == "hos"){
    // console.log("Heros of the Storm");
    hideForms(current);
    current = document.getElementsByClassName("hos-choose");
    displayForms(current);
  }
  else if(x == "other"){
    // console.log("Other games");
    hideForms(current);
    current = document.getElementsByClassName("other-choose");
    displayForms(current);
  }
  else{
    console.log("error!");
  }
}
