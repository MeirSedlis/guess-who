$(document).ready(onReady);

console.log('Here are all the available people:', people);

function onReady(){
    appendDivs();
}

function appendDivs(){
    for (let person of people){
        $('main').append(`
        <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris">
        `)
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function randomNameGenerator(){
    return people[randomNumber(0, 6)].name;
}