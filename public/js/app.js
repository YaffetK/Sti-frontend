var anElement = document.getElementById("app");

anElement.innerHTML= "Hello world";
anElement.outerHTML="Helo world";

anElement.innerHTML = <button onClick='buttonClick()'> Click me</button>;


function buttonClick() {
    anElement.outerHTML = <strong>Yaffet</strong>;
}