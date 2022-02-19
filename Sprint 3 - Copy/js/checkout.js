// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var firstName = document.querySelector('.firstName');
var lastName = document.querySelector('.lastName');
var email = document.querySelector('.email');
var address = document.querySelector('.address');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorPhone = document.getElementById('errorPhone');
var errorLastName = document.getElementById('errorLastName');
var errorEmail = document.getElementById('errorEmail');
var errorAddress = document.getElementById('errorAddress');

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    // First Name
    // Check if it is long enough
    if (firstName.value.length < 3) {
        errorName.classList.add('d-block');
        errorName.classList.add('invalid-feedback');
        errorName.innerHTML = 'First Name is too short.';
        firstName.classList.add('border-danger')
    }
    // Check if it contains numbers
    if (firstName.value.match(/\d+/g) != null) {
        errorName.classList.add('d-block');
        errorName.classList.add('invalid-feedback');
        firstName.classList.add('border-danger');
        errorName.innerHTML = "First Name can't contain numbers."
    }
    // Hide the warning once the length is correct and the name contains no numbers
    if (firstName.value.length >= 3) {
        if (firstName.value.match(/\d+/g) == null) {
            errorName.classList.remove('d-block')
            firstName.classList.remove('border-danger');
        }
    }

    // Last Name
    // Check if it is long enough
    if (lastName.value.length < 3) {
        errorLastName.classList.add('d-block');
        errorLastName.classList.add('invalid-feedback');
        lastName.classList.add('border-danger');
        errorLastName.innerHTML = "Last Name is too short."
    }
    // Check if it contains numbers
    if (lastName.value.match(/\d+/g) != null) {
        errorLastName.classList.add('d-block');
        errorLastName.classList.add('invalid-feedback');
        lastName.classList.add('border-danger');
        errorLastName.innerHTML = "Last Name can't contain numbers."
    }
    // Hide the warning once the length is correct and the last name contains no numbers
    if (lastName.value.length >= 3) {
        if (lastName.value.match(/\d+/g) == null) {
            lastName.classList.remove('border-danger');
            errorLastName.classList.remove('d-block');
        }
    }

    // Phone
    // Check if it is long enough
    if (phone.value.length < 3) {
        errorPhone.classList.add('d-block');
        errorPhone.classList.add('invalid-feedback');
        phone.classList.add('border-danger');
        errorPhone.innerHTML = "Phone is too short."
    }
    // Check if it contains letters
    if (phone.value.match(/[A-Za-z]/g) != null) {
        errorPhone.classList.add('d-block');
        errorPhone.classList.add('invalid-feedback');
        phone.classList.add('border-danger');
        errorPhone.innerHTML = "Phone number can't contain letters."
    }
    // Hide the warning once the length is correct and phone contains no letters
    if (phone.value.length >= 3) {
        if (phone.value.match(/[A-Za-z]/g) == null) {
            phone.classList.remove('border-danger');
            errorPhone.classList.remove('d-block');
        }
    }

    //Password
    // Check if it is long enough
    if (password.value.length < 3) {
        errorPassword.classList.add('d-block');
        errorPassword.classList.add('invalid-feedback');
        password.classList.add('border-danger');
        errorPassword.innerHTML = "This Password is too short."
    }
    // Check if it contains letters
    if (password.value.match(/[A-Za-z]/g) != null) {
        errorPassword.classList.add('d-block');
        errorPassword.classList.add('invalid-feedback');
        password.classList.add('border-danger');
        errorPassword.innerHTML = "Your Password must have numbers and letters."
    }
    // Check if it contains numbers
    if (password.value.match(/\d+/g) != null) {
        errorPassword.classList.add('d-block');
        errorPassword.classList.add('invalid-feedback');
        password.classList.add('border-danger');
        errorPassword.innerHTML = "Your Password must have numbers and letters."
    }
    // Hide the warning once the length is correct and password contains letters and numbers
    if (password.value.length >= 3) {
        if (password.value.match(/[A-Za-z]/g) !== null) {
            if (password.value.match(/\d+/g) !== null) {
                password.classList.remove('border-danger');
                errorPassword.classList.remove('d-block');
            }
        }
    }
    //Address
    // Check if it is long enough
    if (address.value.length < 3) {
        errorAddress.classList.add('d-block');
        errorAddress.classList.add('invalid-feedback');
        address.classList.add('border-danger');
        errorAddress.innerHTML = "This Address is too short."
    }
    // Remove the warning if it is
    if (address.value.length >= 3) {
        address.classList.remove('border-danger');
        errorPassword.classList.remove('d-block');
    }

    //Email
    // Check if it has a valid email format
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value) == false) {
        errorEmail.classList.add('d-block');
        errorEmail.classList.add('invalid-feedback');
        email.classList.add('border-danger');
        errorEmail.innerHTML = "You have to enter a valid email."
    }
    // If the format is valid remove the warning
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        email.classList.remove('border-danger');
        errorPassword.classList.remove('d-block');
    }
}