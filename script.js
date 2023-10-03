// inimation
const wrapper = document.querySelector('.wrapper');
const text = document.querySelector('.content-text');
const img = document.querySelector('.content-img');

window.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {
        wrapper.classList.toggle('active');
    }, 0);
    setTimeout(() => {
        text.classList.toggle('active');
    }, 500);
    setTimeout(() => {
        img.classList.toggle('active');
    }, 500);


});

const button = document.querySelector('.button-form');
const input = document.querySelector('#email');
const grup = document.querySelector('.grup p');
const boxelement = document.querySelector('.box-element');
const dimis = document.querySelector('.dimis-btn');

button.addEventListener("click", () => {
    if (!input.checkValidity()) {
        input.classList.toggle('error');
        grup.classList.toggle('display-none');
        console.log('click')
    } else {
        const box = document.createElement('div');
        box.classList.add('box-pup-up');
        box.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="32" r="32" fill="url(#paint0_linear_26_448)"/>
            <path d="M18.2856 34.6855L26.6198 42.6667L45.7142 24.381" stroke="white" stroke-width="4"/>
                <defs>
                    <linearGradient id="paint0_linear_26_448" x1="64" y1="-3.47137e-06" x2="28.8976" y2="77.1484" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FF6A3A"/>
                    <stop offset="1" stop-color="#FF527B"/>
                    </linearGradient>
                </defs>
        </svg>

        <h1>Thanks for subscribing!</h1>
        <p>A confirmation email has been sent to <span>ash@loremcompany.com</span>. Please open it and click the button inside to confirm your subscription.</p>
        <button class="dimis-btn">Dismiss message</button>
        `;
        document.body.appendChild(box);
        const dimis = document.querySelector('.dimis-btn');
        wrapper.classList.toggle('active');
        text.classList.toggle('active');
        img.classList.toggle('active');
        wrapper.classList.toggle('display-none');
        setTimeout(() => {
            box.classList.add('active');
        }, 20);

        
        dimis.addEventListener('click', () => {
            wrapper.classList.toggle('display-none');
            document.body.removeChild(box);

            setTimeout(() => {
                wrapper.classList.toggle('active');
            }, 0);
            setTimeout(() => {
                text.classList.toggle('active');
            }, 500);
            setTimeout(() => {
                img.classList.toggle('active');
            }, 500);
        
        })
    }
});

