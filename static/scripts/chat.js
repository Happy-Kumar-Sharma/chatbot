// #region Element and variable declariation
// Bind whatsapp link mobile responsive
var img =
  "<img src= 'https://cdn.jsdelivr.net/gh/Happy-Kumar-Sharma/chatbot/content/whatsapp-icon.svg'";
let result = img.link(
  "https://wa.me/7493980307?text=Hii%20BusinessAra,%20I%20would%20like%20to%20discuss%20about%20my%20business"
);

const item = [
  { id: 1, value: "Pricing" },
  { id: 2, value: "Offers" },
  { id: 3, value: "Why BusinessAra" },
  { id: 4, value: "Our Clients" },
  { id: 5, value: "Our Services" },
];

var coll = document.getElementsByClassName("collapsible");
var chat_bar_input_block = document.getElementById("chat-bar-input-block");
const scrollmenu = document.getElementById("scrollmenu");
// #endregion

// #region method and function defination
function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage =
    "Welcome aboard! We're excited to help you succeed. Talk with expert directly on WhatsApp " +
    result;
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' + firstMessage + "</span></p>";

  document.getElementById("botSecondMessage").innerHTML =
    `<il><h4 style= 'color:#28F2E1'>TIPS:<br>
    - Get Answers Quick with Menu<br>
    - Mail your queries - admin@businessara.in<br>
    - Talk with real Human - Click on `+ result +`</h4> </il>`;
  
  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

// Retrieves the response
function getHardResponse(userText) {
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>";
  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "Hello BusinessAra";
  }

  let userHtml = '<p class="userText"><span>' + userText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  // Uncomment this if you want the bot to respond to this buttonSendText event
  setTimeout(() => {
    getHardResponse(sampleText);
  }, 1000);
}

function sendButton() {
  getResponse();
}

function heartButton() {
  buttonSendText("I Love BusinessAra");
}

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
function choiceClieck(event) {
  const id = eval(event.getAttribute("data-item"));
  buttonSendText(item.find((x) => x.id == id).value);
}
function loadData() {
  chat_bar_input_block.style.display = "none";
  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        chat_bar_input_block.style.display = "none";
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        chat_bar_input_block.style.display = "flex";
      }
    });
  }

  item.forEach((x) => {
    const ele = document.createElement("choice");
    ele.setAttribute("onclick", `choiceClieck(this)`);
    ele.textContent = x.value;
    ele.setAttribute("data-item", `${x.id}`);
    scrollmenu.appendChild(ele);
  });
}
// #endregion

// #region method and funtion call on load/ first time
firstBotMessage();
loadData();
// #endregion
