function removeBorder(){
    var div=document.getElementsByTagName("div");
    console.log(div[0].style.border);
    div[0].style.border = "0px";
}

function addBorder(){
    var div=document.getElementsByTagName("div");
    console.log("adding border");
    div[0].style.border = "2px solid black";
}

function changeTextColor(id){
    var heading = document.getElementById(id);
    heading.className="content2";    
    
}/*change text color by changing the class*/

function centerHeading(){
    var heading = document.getElementsByTagName("h1");
    heading[0].style.textAlign ="center";
}
