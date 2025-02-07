const messages = [
    "You Sure?",
    "Really sure??",
    "I Made Cookies For You:(",
    "Please...",
    "Oanh chet h",
    "Pick Yes bro",
    "You thought I'm givin up?",
    "Nevaaaaaa",
    "You are mine",
    "I'm gonna get you back!",
    "One way or another",
    "Anh se ngoannnnnnn",
    "So Pick Yes big dawg",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes",
    "Yes"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}