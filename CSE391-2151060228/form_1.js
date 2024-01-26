var username = document.querySelector('#username')
var email = document.querySelector('#email')
var pass = document.querySelector('#pass')
var repass = document.querySelector('#re-pass')
var form = document.querySelector('form')

function showError(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    // parent.classList.remove('valid')
    parent.classList.add('error')
    small.innerText = message
}
function showSuccess(input) {
    let parent = input.parentElement
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    // parent.classList.add('valid')
    small.innerText = ''
}
function checkEmptyError(input) {
    let isEmptyError = false;
    input.value = input.value.trim()
    if (!input.value) {
        isEmptyError = true;
        showError(input, 'khong dc de trong')

    } else {
        showSuccess(input)
    }
    return isEmptyError
}
function checkEmail(input) {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

    input.value = input.value.trim()
    let isEmailError = !regexEmail.test(input.value)
    if (regexEmail.test(input.value)) {
        showSuccess(input)
    } else {
        showError(input, 'invalid email')
    }
    return isEmailError
}

function checkLength(input, min, max) {
    input.value = input.value.trim()

    if (input.value.length < min) {
        showError(input, 'phải có ít nhất ' + min + ' kí tự')
        return true
    }
    if (input.value.length > max) {
        showError(input, 'Không đc quá ' + max + ' kí tự')
        return true
    }
    showSuccess(input)
    return false
}

function checkMatch(input, confirm) {
    if (input.value !== confirm.value) {
        showError(confirm, 'phần kiểm tra không trùng khớp')
    }

}

form.addEventListener('submit', function (e) {
    e.preventDefault()
    
     checkEmptyError(username)
     if (!checkEmptyError(username)) {
         checkLength(username, 6, 20)

     }

    checkEmail(email)
     if (checkEmptyError(email)) {
         checkEmptyError(email)
     } else {
         checkEmail(email)
     }

    // checkEmptyError(pass)
    // checkPass(pass)
    // checkEmptyError(repass)
    // checkMatch(pass, repass)
    checkEmptyError(email)
    checkEmptyError(pass)
    if (checkEmptyError(email) || checkEmptyError(pass)) {
        //do nothing
    } else {
        alert('Chúng tôi sẽ sớm liên hệ lại với bạn')
    }
})


//const regexPass = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
// function checkPass(input) {
//     const regexPass = /^(?=.*[A-Z])(?=.*\d)(?=.*[a-z]).{8,}$/

//     input.value = input.value.trim()
//     let isPassError = !regexPass.test(input.value)
//     if (regexPass.test(input.value)) {
//         showSuccess(input)
        
//     } else {
//         showError(input, 'invalid password')
//     }
//     return isPassError
// }
// function checkUser(input) {
//     const regexUser = /^[a-zA-Z]+$/i

//     input.value = input.value.trim()
//     let isUserError = !regexUser.test(input.value)
//     if (regexUser.test(input.value)) {
//         checkLength(input, 6, 20)
        
//     } else {
//         showError(input, 'invalid user ')
//     }
//     return isUserError
// }


