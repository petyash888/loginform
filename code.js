function login(){
    var emailAddress = document.getElementById("emailAddress").value;
    //    console.log("Email Address : \"" + emailAddress +"\"");
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

}


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
