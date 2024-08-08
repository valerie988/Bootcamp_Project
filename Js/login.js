var submit = document.querySelectorAll("button")
var sign = document.querySelectorAll(".form-container")
var tabs = document.querySelectorAll(".tab")
var forms = document.querySelectorAll("form")

const form = function () {
    var username = document.querySelector("#username").value
    var fName = document.querySelector("#F_name").value
    var lName = document.querySelector("#L_name").value
    var pass = document.querySelector(".Password").value
    var message = document.querySelectorAll(".message")
    var email = document.querySelector("#email").value
    
    let isValid = true;
    if (username == "") {
        message[0].textContent = "Username cannot be empty"
        isValid = false;
    }
    if (fName == "") {
        message[2].textContent = "First Name cannot be empty"
        isValid = false;
    }
    if (lName == "") {
        message[3].textContent = "Last Name cannot be empty"
        isValid = false;
    }
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/;
    if (emailPattern.test(email)) {
        message.textContent = ``;
    }
    else {
        message.textContent = ``;
        message[4].textContent = "Looks like this is not an email"
        isValid = false;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;;
    if (passwordPattern.test(pass)) {
        message.textContent = ``;
    }
    else {
        message[1].textContent = "Invalid Password"
        isValid = false;
    }
    if (isValid){
        window.location.href = "Field.html";
    }
   
};

submit.addEventListener("submit", (ev) => {
    form()
})


tabs.forEach((ele, index) => {
    ele.addEventListener("click", function(){
        if(index === 0 || index === 2) {
            console.log("the login was clicked")
            sign[0].classList.remove("hidden")
            sign[1].classList.add("hidden")

            
        } else{
            console.log("sign up was clicked");

            sign[0].classList.add("hidden")

            sign[1].classList.remove("hidden")
        } 
    })
})