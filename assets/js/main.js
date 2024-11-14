/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


/*=============== MENU SHOW ===============*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/*=============== MENU HIDDEN ===============*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header')
                         : header.classList.remove('bg-header');
};
window.addEventListener('scroll', scrollHeader);


/*=============== TESTIMONIAL SWIPER ===============*/



/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-up class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px', 
    duration: 2500,
    delay: 00,
})

sr.reveal('.home__data, .footer__container, .footer__group')
sr.reveal('.home__img', {delay: 700, origin: 'bottom'})
sr.reveal('.logos__img, .program__card, .pricing__card', {interval: 100})
sr.reveal('.choose__img', {origin: 'left'})
sr.reveal('.choose__content', {origin: 'right'})


/*=============== CALCULATE JS ===============*/
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector('.logos__track');
    const logos = document.querySelectorAll('.logos__img');
    const totalWidth = Array.from(logos).reduce((sum, img) => sum + img.clientWidth, 0);
    track.style.animationDuration = `${totalWidth / 100}s`; // Adjust speed here
});


/*=============== EMAIL JS ===============*/
emailjs.init('TzLsx2oaRZgLZVBEv');

const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
    e.preventDefault();
    
    // Check if the email field is empty
    if (contactUser.value.trim() === '') {
        // Ensure error color class is added and success color class is removed
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');
        
        // Show error message
        contactMessage.textContent = 'You must enter your email.';

        // Remove message 3 sec
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 3000)
    } else{
        emailjs.sendForm('service_x2me7er', 'template_iiycugr', '#contact-form')
            .then(() => {
                contactMessage.classList.add('color-green');
                contactMessage.textContent = 'You registered successfully';

                // Remove message 3 sec
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 3000)
            }, (error) =>{
                // 404 Error
                alert('Error', error)
            })
        
        // Clear input field
        contactUser.value = ''
    }
};

// Attach event listener to the form
contactForm.addEventListener('submit', sendEmail);

