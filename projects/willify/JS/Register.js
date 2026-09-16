function showSidebar(){
    // alert('ehe')
    const sidebar = document.querySelector('#sidebar');
    sidebar.style.display = 'flex';
    sidebar.classList.toggle('animate')
}

function closeSidebar(){
    const sidebar = document.querySelector('#sidebar');
    sidebar.classList.toggle('animate2')
    sidebar.style.display = 'none';
}

function password_check(password) {
    let haveNumber = false;
    let haveUpper = false;
    for (let i = 0; i < password.length; i++) {
        const character = password[i];
        if ((character >= 'A' && character <= 'Z')) {
            haveUpper = true;
        } else if (character >= '0' && character <= '9') {
            haveNumber = true;
        }
    }
    return haveNumber && haveUpper && password.length > 8;
}

function email_check(email) {
    return (email.endsWith('@gmail.com') || email.endsWith('@binus.ac.id'));
}

function check() {
    const username_ori = document.getElementById('username');
    const username = username_ori.value;

    const password_ori = document.getElementById('password');
    const password = password_ori.value;

    const age_ori = document.getElementById('age');
    const age1 = age_ori.value;

    const Female = document.getElementById('GenderF');
    const male = document.getElementById('GenderM');

    const email_ori = document.getElementById('email');
    const email = email_ori.value;

    const DOB_ori = document.getElementById('date');
    const DOB = DOB_ori.value

    const error_text = document.getElementById('error_text');

    if (username === '') {
        error_text.textContent = "Username Cannot be Empty";
        return;
    }
    else if (username.length<8){
        error_text.textContent = "Minimum length for username is 8 characters";
        return;
    }

    if(password === ''){
        error_text.textContent = "Password Cannot be Empty";
        return;
    }
    else if (!password_check(password)) {
        error_text.textContent = "Password must have an uppercase letter, a number, and minimum of 8 characters";
        return;
    }

    let age = Number(age1);
    if (age1 === '') {
        error_text.textContent = "Age Cannot be Empty";
        return;
    } else if (age < 0 || age > 150) {
        error_text.textContent = "Age must be reasonable";
        return;
    }

    if (!(male.checked || Female.checked)) {
        error_text.textContent = "Please Choose your Gender";
        return;
    }
    // alert("ehe");
    if (email === '') {
        error_text.textContent = "Email Cannot be Empty";
        return;
    } else if (!email_check(email)) {
        error_text.textContent = "Email must be Valid(ends with @gmail.com or @binus.ac.id)";
        return;
    }

    if(DOB === ''){
        error_text.textContent = "Date of Birth Cannot be Empty";
        return;
    }

    error_text.textContent = "";
    alert('Register success');
    window.location.href = "home.html";
}

document.getElementById('sign_button').onclick = function(event) {
    event.preventDefault();
    check();
};