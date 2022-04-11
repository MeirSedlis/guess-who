$(document).ready(onReady);

console.log('Here are all the available people:', people);

function onReady(){
    $(document).on('click', '.clickable', guessChecker);
    appendDivs();
    pickACard();
}

function appendDivs(){
    for (let person of people){
        $('main').append(`
        <img class="clickable" data-name="${person.name}" src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris">
        `)
    }
}

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function randomNameGenerator(){
    return people[randomNumber(0, 6)].name;
}

function pickACard(){
    $("#randomName").empty();
    $("#randomName").append(randomNameGenerator);
}

function guessChecker(){
    if($(this).data() === randomNameGenerator()){
        alert('correct!');
        pickACard();
    }
}