
"use strict"

function redirectTo(e) {
    window.location.href = '/html/add-story.html'
}

const apiURL = 'http://localhost:3000';

function createCardForStory(body) {

    const storyBoard = document.querySelector('div.story-board');

    let newStoryItem = document.createElement('div');

    newStoryItem.className = 'story-item';
    newStoryItem.insertAdjacentHTML(
        'afterbegin',
        `<div class="story-item-header">
            <img alt="#" src="../assets/profile-icon.png">
            <span class="story-item-name">${body.username}</span>
            <span class="story-item-date">on ${body.date}</span>
        </div>
        <div class="story-item-image">
            <img alt="#" src="https://via.placeholder.com/283x100.png">
        </div>
        <h4 class="story-item-paragraph">${body.title}</h4>
        <p class="story-item-article">${body.content}</p>
        <div class="story-item-footer">
            <a href="/html/story.html?id=${body.id}">Read more</a>
            <div class="story-item-footer-likes">
                <img alt="#" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAs0lEQVRIie3UzYkCQRCG4cefg2FsCgZgAHrZi7AmIBiOGILgxSyMwByc3cMGsCeF9toMNkMzU7AHP6hDF837UhQU/zQbnDCJgH/hjoRtJDxhPyR83YIn7CLhCfNI+B+mfeGfBXjCpS8cmgK8qxosc1D7Q6lfUzcYZaA8pX5tRuOegM5ECn6iBcf8MfSSH/iIFJzb4wwtWEQKrjk4YsmHV83SBLWn4hezGsGyQvKNVdWs78ATxQmvoZJfIjgAAAAASUVORK5CYII="/>
                <span class="likes-counter"> ${body.likes} likes</span>
            </div>
        </div>`
    );

    storyBoard.prepend(newStoryItem);

}

async function getAllStories(){
    const response = await fetch(apiURL + '/stories', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if(response.ok){
        const stories = await response.json();
        for (const story of stories) {
            createCardForStory(story);
        }
    }
};

getAllStories();