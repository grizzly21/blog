"use strict"

const apiURL = 'http://localhost:3000';

async function getAllUsers() {
    const response = await fetch(apiURL + '/users', {
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

//getAllUsers().then(res => console.log(res));


/* Get values form register form */ 
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

        form.reset();
    }else{
        alert('Passwords is not matched');
    }
});


/* User registration */
async function registerUser(body) {
    const response = await fetch(apiURL + '/users', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: body.name,
            email: body.email,
            password: body.password
        })
    }).then(res => res.json())
        .then(json => {
            alert('User registered: ', json.name);
        })
        .catch(err => alert("Something problem", err))
    
}


/*  User login servise  */ 