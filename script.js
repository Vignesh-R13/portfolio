/ Smooth scroll for navbar links
const links = document.querySelectorAll('nav .nav-links a');

for (const link of links) {
    link.addEventListener('click', smoothScroll);
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth"
    });
}

// Contact form submission (dummy)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
});