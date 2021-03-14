const input = document.querySelector('#input-text');
const base64btn = document.querySelector('#encode');
const clearbtn = document.querySelector('#clear');
clearbtn.addEventListener('click', () => {
    document.querySelector('#output-text').value = '';
    document.querySelector('#input-text').value = '';
});
base64btn.addEventListener('click', () => {
    document.querySelector('#output-text').value = window.btoa(input.value);
});

function myFunction() {
    const x = document.getElementById('myTopnav');
    if (x.className === 'topnav') {
        x.className += ' responsive';
    } else {
        x.className = 'topnav';
    }
}
