//main data collecting- and sending function
function sendData() {

  // Room code
  const roomcode = window.location.href.split("/")[4];

  // Player count
  const playercountelement = document.querySelector(".flex.items-center.justify-center");
  const playercount = playercountelement ? playercountelement.innerText.split("\n")[1] : "no result";

  // Username
  const usernameelement = document.querySelector(".mr-7");
  const username = usernameelement ? usernameelement.innerText : "no result";

  //team
  const allElements = document.body.getElementsByTagName("*");
  const matchingElements = [];
  for (let element of allElements) {
    if (element.innerText && element.innerText.includes(usernameelement.innerText)) {
      matchingElements.push(element);
    }
  }
  const team = matchingElements[16] ? matchingElements[16].id.split("-")[1] : "spec";

  //role cant get this to work

  //game score
  const teamscoreelement = document.querySelector(`.dark\\:text-dark-${team}-score`);
  const teamscore = teamscoreelement ? "(" + teamscoreelement.innerText + " left)" : "";

  // sending data to local server
  fetch("http://localhost:3000/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ playercount, roomcode, username, team, gamecount, teamscore })
  })
}

//first iteration once page loads in
function waitForElement() {
  const targetNode = document.body;
  const config = { childList: true, subtree: true };

  const callback = (mutationsList, observer) => {
    for (let mutation of mutationsList) {
      if (mutation.type === "childList") {
        const element = document.querySelector(".flex.items-center.justify-center");
        if (element) {
          sendData();
          observer.disconnect();
          break;
        }
      }
    }
  };

  const observer = new MutationObserver(callback);
  observer.observe(targetNode, config);
}

waitForElement();

//gamecount
var gamecount = 1;
var lockedcount = false;
function checkgamecount() {
  const gamecountelement = document.querySelector(".text-md.text-center");
  if(gamecountelement && lockedcount===false) {
    gamecount++;
    lockedcount = true;
  }
  if(!gamecountelement) {
    lockedcount = false;
  }
}

//sending data every interval
var intervalId = window.setInterval(function() {
  checkgamecount();
}, 5000);

var intervalId = window.setInterval(function() {
  sendData();
}, 20000);