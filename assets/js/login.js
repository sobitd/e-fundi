//Function to validate email 
function validateEmail(){
var email = document.myForm.email.value;
var atPosition =email.indexOf("@");
var dotPosition = email.lastIndexOf(".");

if (atPosition<1 ||dotPosition<atPosition+2||dotPosition+2>=email.length){
    alert("Please enter a valid address \n atPosition:"+atPosition+"\n dotPosition:"+dotPosition);
    return false;
 }
}

//Function to validate Password

// var password = document.myForm.password.value;

// if(password.length<6){
//     alert("Password must be at least 6 characters long.");
//     return false;
// }

