// const submitElement = document.getElementById("submit");
// submitElement.addEventListener("click",() => {
//     console.log("You clicked this!")
// });

const usernameElement = document.getElementById("username");
const emailElement = document.getElementById("email");
const passwordElement = document.getElementById("password");

const submitFunc = () => {
    if (usernameElement.innerText == "" || emailElement.innerText == "" ||
        passwordElement.innerText == "") {
        alert("入力が完了していません")
        return false;
    }
    else {
        return true;
    }
};
