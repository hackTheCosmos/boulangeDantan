// const email = document.querySelector("#email")

// function validateEmail(email){
//     var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
//     return emailReg.test(email);
// }

// function checkIsNotEmpty (input) {
//     if (input.value.trim() === "") {
//         return false
//     } else {
//         return true
//     }
// }

// function checkIsLessThan1000chars (input) {
//     if(input.value.length <= 1000) {
//         return true
//     } else {
//         return false
//     }
// }

// if()

// if(!validateEmail(email)) {

// }
// console.log(email)

const messageWrapper = document.querySelector(".message__wrapper")


document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let data = new FormData(this)

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200) {
  
            let result = this.response
            if(!result.success) {
                messageWrapper.classList.add("error")
                
            } else {
                messageWrapper.classList.remove("error")
                messageWrapper.classList.add("success")
                setTimeout(() => {
                    location.href = "index.php"
                },'5000')
            }

            messageWrapper.innerHTML = result.msg
            
        } else if (this.readyState == 4) {
            alert("une erreur est survenue...")
        }
    }

    xhr.open("POST", "async/contact.php", true)
    xhr.responseType = "json"
    xhr.send(data);
})