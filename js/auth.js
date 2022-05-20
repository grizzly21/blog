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
        return await response.json()
    }
};


/*  User login servise  */ 

document.forms['loginForm'].addEventListener('submit', e => {
    e.preventDefault();
    const form = document.forms['loginForm'];
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    const body = {
        email: email,
        password: password
    }

    login(body);
    form.reset()
});

async function login(body){
    const allUsers = await getAllUsers()
    
    for(let i = 0; i < allUsers.length; i++){
        if(body.email == allUsers[i].email){
            if(body.password == allUsers[i].password){
                localStorage.setItem('token', 'Bearer:' + allUsers[i].name + ':' + allUsers[i].name.toUpperCase());
                window.location.href = '/html/top-stories.html';
                return alert("Succes")
            }
        }
    }
    alert("Wrong email or password");
}