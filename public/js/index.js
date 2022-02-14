var anElement = document.getElementById("app");

anElement.innerHTML= "Hello World";
anElement.outerHTML= "Hello World";

function buttonClick(){
    anElement.outerHTML = "<strong>Yaffet</strong>"
}