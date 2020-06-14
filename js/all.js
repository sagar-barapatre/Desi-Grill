var send = document.querySelector(".send");



// Sign up process
document.getElementById("signupForm").addEventListener("submit", signup);

function signup(event) {
    event.preventDefault();
    event.stopPropagation();

    var emailStr = document.querySelector(".email").value;
    var passwordStr = document.querySelector(".password").value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    //ajax//
    var xhr = new XMLHttpRequest();
    xhr.open("post", "https://hexschool-tutorial.herokuapp.com/api/signup", true);
    xhr.setRequestHeader("Content-type", "application/json");
    var data = JSON.stringify(account);
    xhr.send(data);
    xhr.onload = function() {
        //JSON.parse() 
        var ajaxresult = JSON.parse(xhr.responseText);
        if (ajaxresult.message == "") {
            $('#successmodal').modal('show');
            $('#signModal').modal('hide');

            console.log(ajaxresult);
        } else {
            $('#signModal').modal('show');
            $('#signfailmodal').modal('show');


            console.log(ajaxresult);
        }
    };

    //JSON.parse()

    //stringify
}

//DOM
var usersend = document.querySelector(".usersend");

// Login process
document.getElementById("loginForm").addEventListener("submit", usersignup);

function usersignup(event) {
    event.preventDefault();
    event.stopPropagation();

    var useremailStr = document.querySelector(".useremail").value;
    var userpasswordStr = document.querySelector(".userpassword").value;
    var useraccount = {};
    useraccount.email = useremailStr;
    useraccount.password = userpasswordStr;

    //ajax//
    var userxhr = new XMLHttpRequest();
    userxhr.open(
        "post",
        "https://hexschool-tutorial.herokuapp.com/api/signin",
        true
    );
    userxhr.setRequestHeader("Content-type", "application/json");
    var userdata = JSON.stringify(useraccount);
    userxhr.send(userdata);

    userxhr.onload = function() {
        console.log("h: ");
        var userajaxresult = JSON.parse(userxhr.responseText);
        if (userajaxresult.message == "") {
            $('#loginsuccessmodal').modal('show');
            $('#loginModal').modal('hide');
            console.log(userajaxresult);
        } else {
            $('#failmodal').modal('show');
            $('#loginModal').modal('show');

            console.log(userajaxresult);
        }
    };

    //JSON.parse() 

    //stringify 
}

// Example starter JavaScript for disabling form submissions if there are invalid fields




function trybtn() {
    $('#failmodal').modal('hide');
    $('#loginModal').modal('show');
}




function signtrybtn() {
    $('#signfailmodal').modal('hide');
    $('#signModal').modal('show');

}
