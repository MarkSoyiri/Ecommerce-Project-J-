

let regForm = document.getElementById("register-form");
let logForm = document.getElementById("login-form");
let regBtn = document.getElementById("register-button");
let logBtn = document.getElementById("login-button");


regBtn.addEventListener("click",()=>{
    regForm.classList.remove("register-form");
    logForm.classList.add("register-form")
    

})

logBtn.addEventListener("click",()=>{
    logForm.classList.remove("register-form");
    regForm.classList.add("register-form")

})