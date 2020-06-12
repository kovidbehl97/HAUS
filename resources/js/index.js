let grade1 = document.getElementById("grade-1-content")
let grade2 = document.getElementById("grade-2-content")
let grade3 = document.getElementById("grade-3-content")
let grade4 = document.getElementById("grade-4-content")
let home = document.getElementById("home")
window.onbeforeunload = function () {
    window.location.reload()
    window.scrollTo(0,0)
}
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
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
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
        gradeNav.style.display = "none"
        subjects.style.display = "none"
    }   
}
function secondGradeNav(){
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
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
        gradeNav.style.display = "none"
        subjects.style.display = "none"
    }    
}
function thirdGradeNav(){
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
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
        gradeNav.style.display = "none"
        subjects.style.display = "none"
    }    
}
function fourthGradeNav(){
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
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
        gradeNav.style.display = "none"
        subjects.style.display = "none"
    }    
}
function fifthGradeNav(){
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
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
        gradeNav.style.display = "none"
        subjects.style.display = "none"
    }    
}
function firstGradeCur(){
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
function secondGradeCur(){
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
function thirdGradeCur(){
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
function fourthGradeCur(){
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
function fifthGradeCur(){
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
    let maths = document.getElementById('maths')
    let science = document.getElementById('science')
    let sst = document.getElementById('sst')
    let landa = document.getElementById('landa')
    let subjects = document.getElementById("subjects")
    let gradeNav = document.getElementById("gradesNav")
    if (subjects.style.display === "block"){
        subjects.style.display = "none"
    }else{
        subjects.style.display = "block"
        gradeNav.style.display = "none"
        maths.style.display = "none"
        science.style.display = "none"
        sst.style.display = "none"
        landa.style.display = "none"
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
    let science = document.getElementById('science')
    let sst = document.getElementById('sst')
    let landa = document.getElementById('landa')
    if (maths.style.display === "block"){
        maths.style.display = "none"
    }else{
        maths.style.display = "block"
        science.style.display = "none"
        sst.style.display = "none"
        landa.style.display = "none"
    }
}
function science(){
    let maths = document.getElementById('maths')
    let science = document.getElementById('science')
    let sst = document.getElementById('sst')
    let landa = document.getElementById('landa')
    if (science.style.display === "block"){
        science.style.display = "none"
    }else{
        science.style.display = "block"
        maths.style.display = "none"
        sst.style.display = "none"
        landa.style.display = "none"
    }
}
function sst(){
    let maths = document.getElementById('maths')
    let science = document.getElementById('science')
    let sst = document.getElementById('sst')
    let landa = document.getElementById('landa')
    if (sst.style.display === "block"){
        sst.style.display = "none"
    }else{
        sst.style.display = "block"
        maths.style.display = "none"
        science.style.display = "none"
        landa.style.display = "none"
    }
}
function landa(){
    let maths = document.getElementById('maths')
    let science = document.getElementById('science')
    let sst = document.getElementById('sst')
    let landa = document.getElementById('landa')
    if (landa.style.display === "block"){
        landa.style.display = "none"
    }else{
        landa.style.display = "block"
        maths.style.display = "none"
        science.style.display = "none"
        sst.style.display = "none"
    }
}
function scrollNav(){
    let maths = document.getElementById('maths')
    let science = document.getElementById('science')
    let sst = document.getElementById('sst')
    let landa = document.getElementById('landa')
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
    if (maths.style.display === "block"){
        maths.style.display = "none"
    }else{
        maths.style.display = "none"
    }
    if (science.style.display === "block"){
        science.style.display = "none"
    }else{
        science.style.display = "none"
    }
    if (sst.style.display === "block"){ 
        sst.style.display = "none"
    }else{
        sst.style.display = "none"
    }
    if (landa.style.display === "block"){ 
        landa.style.display = "none"
    }else{
        landa.style.display = "none"
    }
    if (gradeNav.style.display === "block"){
        gradeNav.style.display = "none"
    }else{
        gradeNav.style.display = "none"
        subjects.style.display = "none"
    }
}
function clickNav(){   
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
    if (gradeNav.style.display === "block"){
        gradeNav.style.display = "none"
        window.location.hash=""
    }else{
        gradeNav.style.display = "none"
        subjects.style.display = "none"
        window.location.hash=""
    }
}
function gradeCollapse(){
    grade1.style.display="none"
    grade2.style.display="none"
    grade3.style.display="none"
    grade4.style.display="none"
    grade5.style.display="none" 
}
