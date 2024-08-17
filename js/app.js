const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('aside');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

const menuBtnContainer = document.querySelector('.nav-content nav');

menuBtnContainer.addEventListener('click', (event) => {
    if(event.target.tagName === "A") {
        hamMenu.classList.remove('active');
        offScreenMenu.classList.remove('active');
    }
})