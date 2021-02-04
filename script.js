const input = document.querySelector('#input-text');
const encodebtn = document.querySelector('#encode');
const decodebtn = document.querySelector('#decode');
const clearbtn = document.querySelector('#clear');
const base64btn = document.querySelector('#base64encode');
encodebtn.addEventListener('click', () => {
    document.querySelector('#output-text').value = encodeURI(input.value);
});
decodebtn.addEventListener('click', () => {
    document.querySelector('#output-text').value = decodeURI(input.value);
});
clearbtn.addEventListener('click', () => {
    document.querySelector('#output-text').value = '';
    document.querySelector('#input-text').value = '';
});
base64btn.addEventListener('click', () => {
    document.querySelector('#output-text').value = window.btoa(input.value);
});
