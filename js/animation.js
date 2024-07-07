document.addEventListener("DOMContentLoaded", function () {
    const landing = document.querySelector('.landing');
    landing.classList.add('loaded');

    const landingText = document.querySelector('.landingText');
    const landingParagraph = document.querySelector('.landing p');

    landingText.classList.add('animate');
    landingParagraph.classList.add('animate');
});

document.addEventListener("DOMContentLoaded", function () {
    const landing = document.querySelector('.sub-landing');
    landing.classList.add('loaded');

    const landingText = document.querySelector('.sub-landingText');

    landingText.classList.add('loaded');
});