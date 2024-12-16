//function is to validate the password
function ValP(){

    // var SLogs is to store the entered user password
    var UserL1 = document.getElementById("User1").value;
    var InLog = document.getElementById("LogPass").value;
    let span = document.getElementById("message");
    //i need to make this more secure

    if (UserL1 == "Cyrus" && InLog == "Mask"){
        alert("Authorized")
        window.location.href = "CreatureInfo.html";
    }
        else{
            alert( "This user does not have authorization to this page. Please enter the name of an authorized personnel");
            window.location.href = "Logs.html";
        }

    return false;
}

//I'm going to start sobbing why did it suddenly break on me