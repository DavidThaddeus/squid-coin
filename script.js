const bar = document.getElementById('bar');
const close = document.getElementById('close');
const navLinks = document.getElementById('navLinks');

if(bar) {
    bar.addEventListener('click',() => {
        navLinks.classList.add('active')
    })
}

if(close) {
    close.addEventListener('click',() => {
        navLinks.classList.remove('active')
    })
}