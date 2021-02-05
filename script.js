const input = document.querySelector('#input-text');
const encodebtn = document.querySelector('#encode');
const decodebtn = document.querySelector('#decode');
const clearbtn = document.querySelector('#clear');
encodebtn.addEventListener('click', () => {
    document.querySelector('#output-text').value = encodeURIComponent(input.value);
});
decodebtn.addEventListener('click', () => {
    document.querySelector('#output-text').value = decodeURIComponent(input.value);
});
clearbtn.addEventListener('click', () => {
    document.querySelector('#output-text').value = '';
    document.querySelector('#input-text').value = '';
});
