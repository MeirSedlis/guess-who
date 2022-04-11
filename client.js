$(document).ready(onReady);

console.log('Here are all the available people:', people);
// here is the url for chris https://avatars.githubusercontent.com/u/95505985?v=4
// here is the url for meir https://avatars.githubusercontent.com/u/96435697?v=4

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