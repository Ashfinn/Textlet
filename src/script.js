window.addEventListener('load', function () {
    document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
});

function format(command, value = null) {
    document.execCommand(command, false, value);
}

function setUrl() {
    let urlInput = document.getElementById('txtFormatUrl');
    let url = urlInput.value;
    if (!url) {
        alert("Please enter a URL");
        return;
    }
    if (!url.match(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/)) {
        alert("Please enter a valid URL");
        return;
    }
    let stext = document.getSelection();
    document.execCommand('insertHTML', false, `<a href="${url}" target="_blank">${stext}</a>`);
    urlInput.value = '';
}

document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
});

document.getElementById('instructionsBtn').addEventListener('click', function () {
    $('#instructionsModal').modal('show');
});
