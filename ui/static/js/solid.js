function firstChoose(){
  var width = document.getElementById('card-header3').offsetHeight;
  document.getElementById('card-header1').style.height = width+'px'
  document.getElementById('card-header2').style.height = width+'px'
  document.getElementById("button1").style.border = "4px solid green";
  document.getElementById("button2").style.border = "1px solid black";
  document.getElementById("col1").innerHTML = "3000";
  document.getElementById("col2").innerHTML = "5000";
  document.getElementById("col3").innerHTML = "6000";
  document.getElementById("col1").style.fontWeight = "bold";
  document.getElementById("col2").style.fontWeight = "bold";
  document.getElementById("col3").style.fontWeight = "bold";
  document.getElementById("col1").style.color=`green`;
  document.getElementById("col2").style.color=`green`;
  document.getElementById("col3").style.color=`green`;
}

function  changeButton(button) {
  if (button.id=="button1"){
    document.getElementById("button1").style.border = "4px solid green";
    document.getElementById("button2").style.border = "1px solid black";
    document.getElementById("col1").innerHTML = "3000";
    document.getElementById("col2").innerHTML = "5000";
    document.getElementById("col3").innerHTML = "6000";
    document.getElementById("col1").style.color=`green`;
    document.getElementById("col2").style.color=`green`;
    document.getElementById("col3").style.color=`green`;
  }
  if (button.id=="button2"){
    document.getElementById("button2").style.border = "4px solid #FF0000";
    document.getElementById("button1").style.border = "1px solid black";
    document.getElementById("col1").innerHTML = "1500";
    document.getElementById("col2").innerHTML = "3000";
    document.getElementById("col3").innerHTML = "4500";
    document.getElementById("col1").style.color=`#FF0000`;
    document.getElementById("col2").style.color=`#FF0000`;
    document.getElementById("col3").style.color=`#FF0000`;
  }
}
