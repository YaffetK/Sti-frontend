var ettElement= document.getElementById("app")
ettElement.innerHTML="Hello World"

var skapatElement= document.createElement("strong")
skapatElement.innerHTML= "Hello My World"

var andraElement=document.getElementById("demo")
andraElement.appendChild(skapatElement)

setTimeout(age,3000)

function age(){
 console.log("aging game")
 setTimeout(age,3000)
}

function buttonClickForDate(){
    console.log("Today´s date is:")
    console.log(Date())
}

function buttonClick() {
    console.log("Klicked at button!")
    skapatElement.outerHTML = "<strong>Yaffet</strong>"
}