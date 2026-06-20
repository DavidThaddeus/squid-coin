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

// Close mobile menu when a link is clicked
const navLinksItems = navLinks.querySelectorAll('a:not(#close)');
navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});