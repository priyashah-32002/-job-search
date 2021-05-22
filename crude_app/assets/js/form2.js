console.log("this is a project");
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const jobcategory = document.getElementById('jobs');
const salaryoffered = document.getElementById('salary');
let validusername = false; 
let validphone = false; 
$('#failure').hide(); 
$('#success').hide();

username.addEventListener('blur', () => {
    console.log("username is blurred");
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,16}$/;
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your name is valid');
        username.classList.remove('is-invalid');
        validusername = true;
    }
    else {
        console.log('your name is not valid');
        username.classList.add('is-invalid');
        validusername = false;
    }
})

phone.addEventListener('blur', () => {
    console.log("phone is blurred");
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('your phone is valid');
        phone.classList.remove('your phone is-invalid');
        validphone = true;
    }
    else {
        console.log('your phone is not valid');
        phone.classList.add('is-invalid');
        validphone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {

    e.preventDefault();

    console.log('You click on submit');

    if (validphone && validusername) {
        let failure = document.getElementById('failure');
        console.log('username and phone are valid.Submitting tha form');
        let success = document.getElementById('success');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
       
    } else {

        console.log('one of the details are not valid.hence not submitting the form');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
       $('#success').hide();
       $('#failure').show();
    }

})