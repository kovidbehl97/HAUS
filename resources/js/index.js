let grade1 = document.getElementById("grade-1-content")
let grade2 = document.getElementById("grade-2-content")
let grade3 = document.getElementById("grade-3-content")
let grade4 = document.getElementById("grade-4-content")
let grade5 = document.getElementById("grade-5-content")
function firstGrade(){
    if (grade1.style.display === "block"){
        grade1.style.display = "none"
    }else{
        grade1.style.display = "block"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }     
}
function secondGrade(){
    if (grade2.style.display === "block"){
        grade2.style.display = "none"
    }else{
        grade2.style.display = "block"
        grade1.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }     
}
function thirdGrade(){
    if (grade3.style.display === "block"){
        grade3.style.display = "none"
    }else{
        grade3.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }     
}
function fourthGrade(){
    if (grade4.style.display === "block"){
        grade4.style.display = "none"
    }else{
        grade4.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade5.style.display = "none"
    }     
}
function fifthGrade(){
    if (grade5.style.display === "block"){
        grade5.style.display = "none"
    }else{
        grade5.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
    }     
}
function firsthGradeNav(){
    if (grade1.style.display === "none"){
        grade1.style.display = "block"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }else{
        grade1.style.display = "block"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }   
}
function secondGradeNav(){
    if (grade2.style.display === "none"){
        grade2.style.display = "block"
        grade1.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }else{
        grade2.style.display = "block"
        grade1.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }    
}
function thirdGradeNav(){
    if (grade3.style.display === "none"){
        grade3.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }else{
        grade3.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
    }    
}
function fourthGradeNav(){
    if (grade4.style.display === "none"){
        grade4.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade5.style.display = "none"
    }else{
        grade4.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade5.style.display = "none"
    }    
}
function fifthGradeNav(){
    if (grade5.style.display === "none"){
        grade5.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
    }else{
        grade5.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
    }    
}
function sub(){
    let subjects = document.getElementById("subjects")
    let gradeNav = document.getElementById("gradesNav")
    if (subjects.style.display === "block"){
        subjects.style.display = "none"
    }else{
        subjects.style.display = "block"
        gradeNav.style.display = "none"
    }     
}
function gradesNav(){
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
    if (gradeNav.style.display === "block"){
        gradeNav.style.display = "none"
    }else{
        gradeNav.style.display = "block"
        subjects.style.display = "none"
    }     
}

function maths(){
    let maths = document.getElementById('maths')
    if (maths.style.display === "block"){
        maths.style.display = "none"
    }else{
        maths.style.display = "block"
    }
}
function science(){
    let science = document.getElementById('science')
    if (science.style.display === "block"){
        science.style.display = "none"
    }else{
        science.style.display = "block"
    }
}
function sst(){
    let sst = document.getElementById('sst')
    if (sst.style.display === "block"){
        sst.style.display = "none"
    }else{
        sst.style.display = "block"
    }
}
