const form = document.querySelector('.email-form');
const subscribeBtn = document.querySelector('.subscribe');
const card = document.querySelector('.card');
const dismissBtn = document.querySelector('.dismiss');


subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (form.reportValidity()) {
        card.classList.toggle('submitted');
    } else {
        form.classList.add('error');
    }
});

dismissBtn.addEventListener('click', () => {
    location.reload();
});