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

function age(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET" , "/js/data.json")
    xhr.onload = function(){
        var data = JSON.parse(this.response)
        createTable(data)
    }
    xhr.send()
}

function createTable(data){
    var appElement = document.getElementById("app")
    var aTable = document.createElement("table")
    appElement.appendChild(aTable)
    aTable.appendChild(createRow(data[0].name,data[0].points))
    aTable.appendChild(createRow(data[1].name,data[1].points))
    aTable.appendChild(createRow(data[2].name,data[2].points))
    aTable.appendChild(createRow(data[3].name,data[3].points))
}

function createRow(name,points){
    var aRow=document.createElement("tr")
    aRow.appendChild(createCell(name))
    aRow.appendChild(createCell(points))
    return aRow
}

function createCell(content){
    var aCell= document.createElement("td")
    aCell.innerHTML = content
    return aCell;
}

function createLogoCell(url){
    var aCell = document.createElement("td")

    var anImg = document.createElement("img")

    anImg.src = url;

    anImg.classList.add("logo")
    
    aCell.appendChild(anImg)
    
    return aCell
    
    }