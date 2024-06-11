let btn = document.querySelector("button")
let email = document.querySelector(".email")
let password = document.querySelector(".password")
let password2 = document.querySelector(".password2")
let number = document.querySelector(".number")
let h1 = document.querySelector('h1')
let h2 = document.querySelector('h2')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')

// phone number validation
btn.addEventListener("click",function(){
    if(number.value == ""){
        h1.textContent = "add number"
    }else if(number.value.length == 10){
        h1.textContent = "login successfull"
    }else{
         h1.textContent = "add a valid number"
    }
})


// email-validation
btn.addEventListener("click",function(){
    if(email.value.includes("@" && ".com")){
        h2.textContent = "valid email"
    }else{
         h2.textContent = "add a valid email"
    }
})


// password validation
btn.addEventListener("click",function(){
    if(password.value.includes("$" || "+" || "-")){
        h3.textContent = "invalid"
    }else if(password.value.length < 12){
        h3.textContent = "password should contain atleast 12 characters"
    }else{
        h3.textContent = "valid password"  
    }
})


btn.addEventListener("click",function(){
    if(password.value == password2.value){
        h4.textContent = "correct password"
    }else{
        h4.textContent = "incorrect password"  
    }
})


