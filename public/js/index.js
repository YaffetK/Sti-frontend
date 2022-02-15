var anElement = document.getElementById("app");

var anotherElement=document.getElementById('demo');

anotherElement.innerHTML= "Här kommer dagens datum stå:";

function buttonClickForDate() {
    console.log("Dagens datum")
    anotherElement.innerHTML= Date();
}

var ettElement=document.createElement("strong");
ettElement.innerHTML("Hello My World");

var app=getElementById("app")
app.appendChild(anElement);



anElement.innerHTML= "Hello world";
console.log(anElement);


//anElement.innerHTML = "<button onClick='buttonClick()'> Click me</button>";


function buttonClick() {
    console.log("Klicked at button!")
    anElement.outerHTML = "<strong>Yaffet</strong>";
}