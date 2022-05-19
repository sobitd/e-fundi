//Setting up elements for DOM manipulation
const email = document.getElementById("email")
const passWord = document.getElementById("pass-word")
const errorMessage = document.getElementById("error-message")
// var form = document.getElementById("loginForm")

 //Event Listener that will prevent Submit button from submitting and run through to check if there are any errors present

 form.addEventListener("submit", (e) =>{
     let messages = []
     if(email.value === '' || email.value == null){
         messages.push('Email is required')
     }

     if(messages.length > 0){
         e.preventDefault()
         errorElement.innerText = messages.join(",")
     }
 })
