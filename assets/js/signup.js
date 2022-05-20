// function validateForm() {
//     var mail = document.querySelector('#email').value;
//     var passwd = document.querySelector('#password').value;
//     var username = "username";
//     var password = "password";
//     if ((mail == username) && (pw == passwd)) {
//       alert('You are successfully logged in');
//     } else {
//       alert("Login was unsuccessful, please check your username and password");
//       return false;
//     }
// }

// function validlogin(event) {
//     var username = document.getElementById('#email').value;
//     var password = document.getElementById('#password').value;

//     var entriesJSON = localStorage.getItem('allEntries');
//     if (!entriesJSON) {
//         alert("Nothing stored!");
//         event.preventDefault();
//         return;
//     }
//     var allEntries = JSON.parse(entriesJSON);
//     for (var i = 0; i < allEntries.length; i++) {
//         var entry = allEntries[i];
//         var storedUserName = entry.user;
//         var storedPassWord = entry.pass;
//         var storedEmailAddress = entry.email;
//         if (username == storedUserName && password == storedPassWord) {
//             alert("Successfully logged in!");
//             return;
//     }
//     alert('Invalid Username or Password! Please try again.');
//     event.preventDefault();
//     window.location="Login.html";
// }

// function login(){
//     var usern = document.getElementById('.uname')
//     var umail = document.getElementById('.email')
//     var passwd = document.getElementById('.password')
//     sessionStorage.setItem("currentlogedin", usern)
//     localStorage.setItem('all_users' JSON.stringify(a))

//     for(var i=0; i < a.length; i++){
//         var li = document.createElement('li')
//         li.innerHTML = a[i]['name']
//         document.getElementById("listuser").appendChild(li)
//     }

// }

// function store() {
//     var users = document.getElementById('uname').value;
//     var usrName = document.getElementById('uname').value;
//     var usrPw = document.getElementById('password').value;

//     let stored_users = JSON.parse(localStorage.getItem('users'));
//     if(stored_users) {
//         stored_users.push({name: usrName, password: usrPw});
//         localStorage.setItem('users', JSON.stringify(stored_users));
//     } else {
//         localStorage.setItem('users', JSON.stringify([{name: usrName, password: usrPw}]));
//     }
// }


// localStorage.setItem('users', JSON.stringify(users));

// function check() {
//     var usrName = document.getElementById('uname').value;
//     var usrPw = document.getElementById('password').value;

//     let stored_users = JSON.parse(localStorage.getItem('users'))
//     if(stored_users) {
//         for (let u = 0; u < stored_users.length; u++){
//             if (usrName == stored_users[u].name && usrPw == stored_users[u].password) {
//                 alert('You are logged in ' + usrName);
//                 return location.replace("./index.html");

//              }
//         }
//     } else {
//         localStorage.setItem('users', '[]');
//     }

//     return alert('Access denied. Valid username and password is required.');
// }


function signup(e){
    event.preventDefault()
    // console.log('working')
    var email = document.getElementById('uname').value;
    var uname = document.getElementById('email').value;
    var passwd = document.getElementById('password').value;

    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(email == mailformat){
    //     return true
    // }else{
    //     console.log("wrowng email format")
    // }

    // var passLenght = 12
    // if(passwd.length == passLenght){
    //     return true
    // }else{
    //     console.log("Password length must be 12 characters long")
    // }

    var users = {
        email:email,
        username:uname,
        password:passwd
    }
    var jsoned = JSON.stringify(users)
    localStorage.setItem(users, jsoned)
    console.log('users added')
    window.location.href = '../index.html'
}





