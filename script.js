window.addEventListener('load', function() {
    document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
});

function format(command, value) {
    document.execCommand(command, false, value);
}

function setUrl() {
    let url = document.getElementById('txtFormatUrl').value;
    let stext = document.getSelection();
    document.execCommand('insertHTML', false, `<a href="${url}" target="_blank">${stext}</a>`);
    document.getElementById('txtFormatUrl').value = '';
}
