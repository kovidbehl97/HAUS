let math = parseInt( document.getElementById("math").value )
let science = parseInt( document.getElementById("science").value )
let sst = parseInt( document.getElementById("sst").value )
let landa = parseInt( document.getElementById("landa").value )
let grade1 = parseInt( document.getElementById("grade1").value )
let grade2 = parseInt( document.getElementById("grade2").value )
let grade3 = parseInt( document.getElementById("grade3").value )
let grade4 = parseInt( document.getElementById("grade4").value )
let grade5 = parseInt( document.getElementById("grade5").value )
let bundle1 = parseInt( document.getElementById("bundle1").value )
let bundle2 = parseInt( document.getElementById("bundle2").value )
let bundle3 = parseInt( document.getElementById("bundle3").value )
let result = 0
let finalResult
function checkSub(){
    let math = document.getElementById("math")
    let science = document.getElementById("science")
    let sst = document.getElementById("sst")
    let landa = document.getElementById("landa")
    if(math.checked === false && science.checked === false && sst.checked === false && landa.checked === false){
        document.getElementById("check").checked = false
    }else{
        document.getElementById("check").checked = true
    }
}

function calculate(){
    finalResult = result
}



function mathCal (){
    result = result + math
}
function scienceCal (){
    result = result + science
}
function sstCal (){
    result = result + sst
}
function landaCal (){
    result = result + landa
}
function grade1Cal (){
    result = result + grade1
}
function grade2Cal (){
    result = result + grade2
}
function grade3Cal (){
    result = result + grade3
}
function grade4Cal (){
    result = result + grade4
}
function grade5Cal (){
    result = result + grade5
}
function bundle1Cal (){
    result = result + bundle1
}
function bundle2Cal (){
    result = result + bundle2
}
function bundle3Cal (){
    result = result + bundle3
}