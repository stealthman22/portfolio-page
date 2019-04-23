/*Inspired by Brad Traversy*/
/* Selecting elements for the node list 

Selects all elements with specified aselectors */
const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// Sets automatic scroll and it's interval
const auto = true;
const intervalTime = 5000;
// keeps track of interval 
let slideInterval;

// Methods to prepare the next slides 
const nextSlide = () => {
    /* Grabs current element */
    const current = document.querySelector('.current');
    /* Removes current class */
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add curent to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to first sibling
        slides[0].classList.add('current');
    }
    // Quickly remove current class again, with a little delay
    setTimeout(() => current.classList.remove('curent'));
};

// Methods to prepare the previous slides 
const prevSlide = () => {
    /* Grabs current element */
    const current = document.querySelector('.current');
    /* Removes current class */
    current.classList.remove('current');
    // Check for previous slide
    if (current.previousElementSibling) {
        // Add curent to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to lastsibling
        slides[slides.length - 1].classList.add('current');
    }
    // Quickly remove current class again, with a little delay
    setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto Slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

// If you want interval too always be set irrespective of manual click, just add this in the events and modify respectively.
/* if(auto) {
     clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
}  */