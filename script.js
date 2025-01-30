function changeMessage() {
    const message = document.querySelector('.message p');
    message.innerHTML = "The fairy says: 'Everything is going to be okay, your new tooth will grow back stronger than ever! Keep smiling! ✨'";

    const music = document.getElementById('fairyMusic');
    music.play();
}
