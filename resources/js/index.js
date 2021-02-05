let grade1 = document.getElementById("grade-1-content")
let grade2 = document.getElementById("grade-2-content")
let grade3 = document.getElementById("grade-3-content")
let grade4 = document.getElementById("grade-4-content")
let grade5 = document.getElementById("grade-5-content")
let gradeOne = document.getElementById("grade-1")
let gradeTwo = document.getElementById("grade-2")
let gradeThree = document.getElementById("grade-3")
let gradeFour = document.getElementById("grade-4")
let gradeFive = document.getElementById("grade-5")
let home = document.getElementById("home")
let menu = document.getElementById("menu")

window.onbeforeunload =function(){
    window.scrollTo(0,0)
}
window.onload = function(){
    home.click()
}

function firstGrade(){
    if (grade1.style.display === "block"){
        grade1.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }else{
        grade1.style.display = "block"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
        gradeOne.classList.add("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.remove("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }     
}
function secondGrade(){
    if (grade2.style.display === "block"){
        grade2.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }else{
        grade2.style.display = "block"
        grade1.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.add("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.remove("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }     
}
function thirdGrade(){
    if (grade3.style.display === "block"){
        grade3.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }else{
        grade3.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.add("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.remove("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }     
}
function fourthGrade(){
    if (grade4.style.display === "block"){
        grade4.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }else{
        grade4.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade5.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.add("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.remove("grade")
        gradeFive.classList.add("grade")
    }     
}
function fifthGrade(){
    if (grade5.style.display === "block"){
        grade5.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }else{
        grade5.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.add("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.remove("grade")
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
        gradeOne.classList.add("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.remove("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }else{
        grade1.style.display = "block"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
        gradeNav.style.display = "none"
        subjects.style.display = "none"
        gradeOne.classList.add("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.remove("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
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
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.add("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.remove("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }else{
        grade2.style.display = "block"
        grade1.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
        gradeNav.style.display = "none"
        subjects.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.add("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.remove("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
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
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.add("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.remove("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
    }else{
        grade3.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade4.style.display = "none"
        grade5.style.display = "none"
        gradeNav.style.display = "none"
        subjects.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.add("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.remove("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.add("grade")
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
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.add("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.remove("grade")
        gradeFive.classList.add("grade")
    }else{
        grade4.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade5.style.display = "none"
        gradeNav.style.display = "none"
        subjects.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.add("grade-selected")
        gradeFive.classList.remove("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.remove("grade")
        gradeFive.classList.add("grade")
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
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.add("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.remove("grade")
    }else{
        grade5.style.display = "block"
        grade1.style.display = "none"
        grade2.style.display = "none"
        grade3.style.display = "none"
        grade4.style.display = "none"
        gradeNav.style.display = "none"
        subjects.style.display = "none"
        gradeOne.classList.remove("grade-selected")
        gradeTwo.classList.remove("grade-selected")
        gradeThree.classList.remove("grade-selected")
        gradeFour.classList.remove("grade-selected")
        gradeFive.classList.add("grade-selected")
        gradeOne.classList.add("grade")
        gradeTwo.classList.add("grade")
        gradeThree.classList.add("grade")
        gradeFour.classList.add("grade")
        gradeFive.classList.remove("grade")
    }    
}
function sub(){
    // let maths = document.getElementById('maths')
    // let science = document.getElementById('science')
    // let sst = document.getElementById('sst')
    // let landa = document.getElementById('landa')
    let subjects = document.getElementById("subjects")
    let gradeNav = document.getElementById("gradesNav")
    if (subjects.style.display === "block"){
        subjects.style.display = "none"
    }else{
        subjects.style.display = "block"
        gradeNav.style.display = "none"
        // maths.style.display = "none"
        // science.style.display = "none"
        // sst.style.display = "none"
        // landa.style.display = "none"
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

// function maths(){
//     let maths = document.getElementById('maths')
//     let science = document.getElementById('science')
//     let sst = document.getElementById('sst')
//     let landa = document.getElementById('landa')
//     if (maths.style.display === "block"){
//         maths.style.display = "none"
//     }else{
//         maths.style.display = "block"
//         science.style.display = "none"
//         sst.style.display = "none"
//         landa.style.display = "none"
//     }
// }
// function science(){
//     let maths = document.getElementById('maths')
//     let science = document.getElementById('science')
//     let sst = document.getElementById('sst')
//     let landa = document.getElementById('landa')
//     if (science.style.display === "block"){
//         science.style.display = "none"
//     }else{
//         science.style.display = "block"
//         maths.style.display = "none"
//         sst.style.display = "none"
//         landa.style.display = "none"
//     }
// }
// function sst(){
//     let maths = document.getElementById('maths')
//     let science = document.getElementById('science')
//     let sst = document.getElementById('sst')
//     let landa = document.getElementById('landa')
//     if (sst.style.display === "block"){
//         sst.style.display = "none"
//     }else{
//         sst.style.display = "block"
//         maths.style.display = "none"
//         science.style.display = "none"
//         landa.style.display = "none"
//     }
// }
// function landa(){
//     let maths = document.getElementById('maths')
//     let science = document.getElementById('science')
//     let sst = document.getElementById('sst')
//     let landa = document.getElementById('landa')
//     if (landa.style.display === "block"){
//         landa.style.display = "none"
//     }else{
//         landa.style.display = "block"
//         maths.style.display = "none"
//         science.style.display = "none"
//         sst.style.display = "none"
//     }
// }
function scrollNav(){
    // let maths = document.getElementById('maths')
    // let science = document.getElementById('science')
    // let sst = document.getElementById('sst')
    // let landa = document.getElementById('landa')
    let gradeNav = document.getElementById("gradesNav")
    let subjects = document.getElementById("subjects")
    // if (maths.style.display === "block"){
    //     maths.style.display = "none"
    // }else{
    //     maths.style.display = "none"
    // }
    // if (science.style.display === "block"){
    //     science.style.display = "none"
    // }else{
    //     science.style.display = "none"
    // }
    // if (sst.style.display === "block"){ 
    //     sst.style.display = "none"
    // }else{
    //     sst.style.display = "none"
    // }
    // if (landa.style.display === "block"){ 
    //     landa.style.display = "none"
    // }else{
    //     landa.style.display = "none"
    // }
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
    }else{
        gradeNav.style.display = "none"
        subjects.style.display = "none"
    }
}
function gradeCollapse(){
    grade1.style.display="none"
    grade2.style.display="none"
    grade3.style.display="none"
    grade4.style.display="none"
    grade5.style.display="none"
    gradeOne.classList.remove("grade-selected")
    gradeTwo.classList.remove("grade-selected")
    gradeThree.classList.remove("grade-selected")
    gradeFour.classList.remove("grade-selected")
    gradeFive.classList.remove("grade-selected")
    gradeOne.classList.add("grade")
    gradeTwo.classList.add("grade")
    gradeThree.classList.add("grade")
    gradeFour.classList.add("grade")
    gradeFive.classList.add("grade")     
}
function navColapse(){
    
    if (menu.style.display === "flex"){
        menu.style.display = "none"
    }else{
        menu.style.display = "flex"
        
    }
}
function clickScrollNav(){
        if(window.innerWidth < 501 && menu.style.display === "flex"){
            menu.style.display = "none"
        }
        else if(window.innerWidth < 501 && menu.style.display === "none"){
            menu.style.display = "none"
        }
}
window.onresize = function(){
    
    if(window.innerWidth > 501){
        menu.style.display = "flex"
    }
    else{
        menu.style.display = "none"
    }
}
if(window.innerWidth < 501){
    document.getElementsByTagName("body")[0].removeAttribute("onscroll")
}