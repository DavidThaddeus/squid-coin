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

// Close mobile menu when a link is clicked and smooth scroll to section
const navLinksItems = navLinks.querySelectorAll('a:not(#close)');
navLinksItems.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.classList.remove('active');

        // Handle internal links with scroll offset
        const href = link.getAttribute('href');
        if(href && href.startsWith('#')) {
            e.preventDefault();
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if(targetElement) {
                const navBar = document.getElementById('navBar');
                const navHeight = navBar.offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});