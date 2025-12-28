const scriptURL = 'https://script.google.com/macros/s/AKfycbzSgliXl8r7VjASL5-1Ksv99ZNwCZiYr-TXqtLKJ1_Sa4D-8udSIjj-gKh9qNdma3-S/exec';
const form = document.getElementById('contactForm');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', e => {
    e.preventDefault();
    btn.disabled = true;
    btn.innerHTML = "Sending...";

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            alert("Success! Your data has been stored.");
            btn.disabled = false;
            btn.innerHTML = "Send Message";
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert("Error! Please check your internet or script settings.");
            btn.disabled = false;
            btn.innerHTML = "Send Message";
        });
});
//////////////////////
let l = document.querySelector(".fa-youtube");
function open_github() {
    window.location.href = "https://github.com/shivam-raj-0";
}
function open_linkedin() {
    window.location.href = "https://www.linkedin.com/in/shivam-raj-619b65329/";
}
function open_insta() {
    window.location.href = "https://www.instagram.com/royal_rajput_shivam_/?hl=en";
}
function open_youtube() {
    window.location.href = "https://www.youtube.com/@royalhindurashtra";
}
