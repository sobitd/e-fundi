//Setting up elements for DOM manipulation
const email = document.getElementById("email")
const passWord = document.getElementById("pass-word")
const errorMessage = document.getElementById("errorMessage")
var form = document.getElementById("loginForm")

 //Event Listener that will prevent Submit button from submitting and run through to check if there are any errors present

 form.addEventListener("submit", (e) =>{
     let messages = []
     var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
     if(email.value === '' || email.value == null){
         messages.push('Email is required')
     }

     if(passWord.value.length <= 6 >= 20 || passWord.value.length ||!regularExpression.test(passWord)||passWord.value === 'Password' ){
         messages.push("Password must contain Alphanumeric characters and Symbols")
     }

     if(messages.length > 0){
         e.preventDefault()
         errorMessage.innerText = messages.join(",")
     }
 })
