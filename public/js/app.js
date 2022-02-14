var anElement = document.getElementById("app");

anElement.innerHTML= <button oneclick='buttonClick()'> Click me</button>;


function buttonClick(){
    anElement.outerHTML = "<strong>Yaffet</strong>"
}