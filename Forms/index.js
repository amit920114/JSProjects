console.log('This is Project 4')

let name = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let small = document.getElementById("small")
let zip = document.getElementById("zip")
let validName = false;
let validEmail = false;
let validPhone = false;
let validZip = false;
$('#failure').hide();
$('#success').hide();
// console.log(name, email, phone)


name.addEventListener("blur", () => {
    // console.log("exit from username")
    regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}/
    let str = name.value;
    if (regex.test(str)) {
        console.log("You entered correct username")
        name.classList.add('is-valid')
        small.classList.add('text-success');
        validName = true

    } else {
        // console.log("Error");
        name.classList.add('is-invalid')
        small.classList.add('text-danger');
        validName = false;

    }

})
email.addEventListener("blur", () => {
    console.log("exit from email section")
    regex = /^([_\-\.a-zA-Z0-9]+)@([a-zA-z]+)\.([A-Za-z]){2,7}$/
    // /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/
    let str = email.value;
    if (regex.test(str)) {
        // console.log("You entered correct username")
        email.classList.add('is-valid')
        validEmail = true


    } else {
        console.log("Error");
        email.classList.add('is-invalid')
        valideEmail = false;


    }

})
phone.addEventListener("blur", () => {
    // console.log("exit from phone section")
    regex = /^([0-9]){10}$/
    let str = phone.value;
    if (regex.test(str)) {
        // console.log("You entered correct username")
        phone.classList.remove('is-invalid');
        validPhone = true



    } else {
        // console.log("Error");
        phone.classList.add('is-invalid')
        validPhone = false;




    }


})

zip.addEventListener("blur", () => {
    // console.log("exit from phone section")
    regex = /^([0-9]){6}$/
    let str = zip.value;
    if (regex.test(str)) {
        // console.log("You entered correct username")
        zip.classList.remove('is-invalid');
        validZip = true



    } else {
        // console.log("Error");
        zip.classList.add('is-invalid')
        validZip = false;

    }


})

let submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("You Clicked Submit Button")
    console.log(validEmail, validPhone, validName, validZip)
    if(validName && validEmail && validPhone && validZip){
        let failure = document.getElementById("failure")

        let success = document.getElementById("success")
        success.classList.add("show");
        $('#failure').hide();
        $('#success').show();
    }else{
        let failure = document.getElementById("failure")
        $('#failure').show();
        $('#success').hide();

        
    }


})
