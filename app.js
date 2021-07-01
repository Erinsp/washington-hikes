
function getUserName(){
    let userName = prompt('What is your name?');
    document.write('<h2>' + 'welcome ' + userName + '!</h2>')
    return userName;
}

//function 2
function likeHike(){
    let likeHike = prompt('do you like to hike?')
    if (likeHike == 'yes'){
        document.write('<h3>' + 'cool, so do we!'+ '</h3>')
    } else {
        document.write('<h3>' + 'Bummer');
        }
}


//funciton 3
function getTime(){
    let today = new Date();
    let hourNow = today.getHours();
    let greeting;
    if (hourNow > 18) {
        greeting = 'Good evening';
    } else if (hourNow > 11) {
        greeting = 'Good afternoon';
    } else if (hourNow >= 0) {
        greeting = 'Good morning';
    } else {
        greeting = 'Whatsup';
    }
    document.write('<h3>' + greeting.toLowerCase() + '</h3>');
}






