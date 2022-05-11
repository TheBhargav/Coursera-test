// function to change html text

function myFunction()  {

  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

document.getElementById("demo").innerHTML = 5 + 6;



function docWrite () {

  document.write(5+7);
}

function winAlert()  {
  window.alert("hello world");
}

function conLog() {
  console.log(5+8);
}

function printPage() {

  window.print();
}



function mul(p1,p2) {
  return p1*p2;
}
// window.alert(mul(12,4));

function displayDate()  {

  document.getElementById("demo").innerHTML = Date();

}

let str = 'Bhargav';
let text = "";

for (const x of str) {
 text += x + "<br>"; 
}


function iterate(){

document.getElementById("demo").innerHTML = text;
  }

  
  function sets(){
    const letters = new Set(["a", "b","c"]);
    document.getElementById("demo1").innerHTML = letters.values();
  }



  const 