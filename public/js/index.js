const UPDATE_FIRST = 0;
const UPDATE_INTERVAL = 1000;

var appElement=document.getElementById("app")

setTimeout(age,UPDATE_FIRST)
function age(){
    var xhr = new XMLHttpRequest()
    //xhr.open("GET" , "http://yaffet-backend.herokuapp.com/fotball")
    //xhr.open("GET" , "http://localhost:3001/fotball")
    xhr.open("GET" , "/js/data.json")
    xhr.onload = function(){
        let data = JSON.parse(this.response)

        console.log(data)
        console.log(data.title)
        console.log(data.table)

        createTable(data.table)
        setTimeout(age,UPDATE_INTERVAL)
    }
    xhr.send()
}

function createTable(table){
    const d = new Date();
    let time = d.toLocaleTimeString();

    var appElement = document.getElementById("app")
    appElement.textContent = ""

    var aHeader = document.createElement("h1")
    aHeader.innerHTML = time
    appElement.appendChild(aHeader)
    
    var aTable = document.createElement("table")

    appElement.appendChild(aTable)
    for(const dataRow of table){
        aTable.appendChild(createRow(dataRow))
    }
    
}

function createRow(tableRow){
    var aRow=document.createElement("tr")
    aRow.appendChild(createCell(tableRow.name))
    aRow.appendChild(createCell(tableRow.points))
    aRow.appendChild(createLogoCell(tableRow.imgsrc))
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