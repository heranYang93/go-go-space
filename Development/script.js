var startBtn = document.getElementById(launchButton);

function launch() {}



function issdata() {

fetch(`https://api.wheretheiss.at/v1/satellites/25544`)
.then(function (response) {
    return response.json();
})
.then(function(data) {
    console.log('iss data', data);
})
}

issdata()



