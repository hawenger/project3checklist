let robertsCookie;
let returningUser = "";

function generateUserId() {
    let userId = new Uint32Array(1);
    window.crypto.getRandomValues(userId);
    console.log(userId);
    return userId;
}

function generateNow() {
    let now = new Date();
    now.setMonth( now.getMonth() + 1 );
    return now;
}

function writeCookie() {
    let userId = generateUserId();
    let now = generateNow();
    document.cookie=`id= ${userId};`
    document.cookie=`expires= ${now.toUTCString()};`
}
    
function readCookie() {
    let currentCookie = document.cookie;
    if(currentCookie == "") {
        console.log("hello")
        writeCookie();
        console.log(document.cookie);
        robertsCookie = document.cookie
        returningUser = false
        //console.log(returningUser)
    } else {
        console.log("welcome back")
        returningUser = true;
        //console.log(returningUser)
    }
}

readCookie();