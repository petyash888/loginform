function login(){
    var emailAddress = document.getElementById("emailAddress").value;
    var password = document.getElementById("password").value;
    if(emailAddress == "" || password == ""){
        alert("Username and/or password cannot be empty!");
        return;
    } 
    var isValid = validateEmail(emailAddress);

    if(!isValid){
        alert("Invalid Email Address");
        return;
    }


    var checked = document.getElementById("checkbox").checked;
    console.log(checked);
        if(checked == true){
            document.getElementById("emailAddress").value = emailAddress;
        }

   navigateToLoginPage();
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function loadUserInfo() {
    //if error occurs remove the error message on the next submit 
    let error = document.getElementById('error');
    error.innerHTML = "";

    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("surname").value;
    let gender = document.getElementById("gender").value;
    let birthdate = document.getElementById("birthdate").value;
    
    console.log(`birthdate: "${birthdate}"`);
    console.log(`firstname:"${firstName}"`);
    
    if(firstName == "" || lastName == "") {
        error.innerHTML = "First and Last name are mandatory fields";
        return;
    }
    
    navigateToLoginPage();

    saveToLocalStorage(firstName, gender, lastName, birthdate);
};

function saveToLocalStorage(firstName, gender, lastName, birthdate){
    localStorage.setItem('username', firstName);
    localStorage.setItem('gender', gender);
    localStorage.setItem('lastname', lastName );
    if(birthdate == ""){
        localStorage.setItem('age', 'unknown');
    } else {
        localStorage.setItem('age', getAge(birthdate));
    }
}

function getAge(dateString) 
{
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    return age;
}

function navigateToLoginPage(){
    document.location.href = "./login.html";
}