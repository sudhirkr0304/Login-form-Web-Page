function validateform()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email == null || email == "")
    {
        alert("email cannot be blank");
        return false;
    }
    else if( password.length < 6)
    {
        alert("Password length must be atlest 6");
        return false;
    }
    else
    {
        alert("Form submitted succesfully");
        return true;
    }
 }