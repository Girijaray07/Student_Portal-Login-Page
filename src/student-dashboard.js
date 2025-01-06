const chatBox = document.getElementById('chat-box');

chatBox.addEventListener('focus', () => {
    chatBox.style.height = 'auto';
    chatBox.style.height = chatBox.scrollHeight + 'px';
});