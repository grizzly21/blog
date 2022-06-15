"use strict"

const apiURL = 'http://localhost:3000';

let queryId =  +location.search.replace('?id=', '');
async function getStoryById(){
    const response = await fetch(`${apiURL}/stories/${queryId}`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if(response.ok){
        const story = await response.json();
        
        const mainContainer = document.querySelector('div.main-container');

        const storyContent = document.createElement('div');
        storyContent.className = 'small-container',

        storyContent.insertAdjacentHTML(
            'afterbegin',
            `<img alt="#" src="https://via.placeholder.com/638x236.png">
            <h2 class="story-title">
                ${story.title}
            </h2>
            <div class="user-author">
                <img src="../assets/profile-icon.png" alt="" class="user-icon">
                <div class="user-info">
                    <span class="username">${story.username}</span>
                    <span class="date-posted">on ${story.date}</span>
                </div>
            </div>
            <p class="story-text">${story.content}</p>`
        );

        mainContainer.append(storyContent);
    } else{
        alert("Error");
    }
}
getStoryById();