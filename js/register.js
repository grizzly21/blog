"use strict"

const apiURL = 'http://localhost:3000';

async function sendReq() {
    const response = await fetch(apiURL + '/user', {
        method: "GET",
        headers: {
            'Accept': 'application/json'
        }
    });
    if(response.ok === true){
        const user = await response.json();
        return user;
    }
};

sendReq().then(res => console.log(res));

document.forms['registerForm'].addEventListener('submit', e => {
    e.preventDefault();
    const form = document.forms['registerForm'];
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    const repeatPassword = form.elements['repeatPassword'].value;

    if(password === repeatPassword){
        const body = {
            name: name,
            email: email,
            password: password
        }
        
        registerUser(body);
    }else{
        alert('Passwords is not matched');
    }
});

async function registerUser(body){
    console.log(body)
    const response = await fetch(apiURL + '/registers', {
        method: "POST",
        mode: 'no-cors',
        headers: {
            'Accept-Control-Request-Method': 'application/json',
            'Content-Type': 'application/json; charset=utf-8'
        },
        body: body.email
        
    });
    if(response.ok === true){
        return response;
    }
}
