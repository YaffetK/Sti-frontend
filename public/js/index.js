var anElement = document.getElementById("app");

anElement.innerHTML= "Hello world";
//anElement.outerHTML="<h1>Hello world</h1>";

//anElement.innerHTML = "<button onClick='buttonClick()'> Click me</button>";


function buttonClick() {
    console.log("Klicked at button!")
    anElement.outerHTML = "<strong>Yaffet</strong>";
}