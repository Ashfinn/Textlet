window.addEventListener('load', function(){
    document.getElementById('sampleeditor').setAttribute('contenteditable', 'true');
    document.getElementById('sampleeditor2').setAttribute('contenteditable', 'true');

});
function format(command, value) {
    document.execCommand(command, false, value);
}
function seturl() {
    let url = document.getElementById('txtUrl').value;
    let stext = document.getSelection();

    document.execCommand('insertHTML', false, `<a href="${url}" target="_blank">${stext}</a>`);
    document.getElementById('txtFormatUrl').value = '';
}