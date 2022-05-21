"use strict"

const apiURL = 'http://localhost:3000';

document.forms['addStory'].addEventListener('submit', e => {
    e.preventDefault();

    const form = document.forms['addStory'];
    const title = form.elements['title'].value;
    const content = form.elements['content'].value;

    const body = {
        title: title,
        content: content
    }

    addStory(body);
    form.reset();
});

async function addStory(body){

    let date = new Date()
    let day = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    let fullDate = `${day}.${month}.${year}`;
    console.log(fullDate);

    const response = await fetch(apiURL + '/stories', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: body.title,
            content: body.content,
            date: fullDate,
            username: "Username",
            likes: 0
        })
    });

    if(response.ok){
        alert("Story added!")
        window.location.href = '/html/top-stories.html'
    }
}