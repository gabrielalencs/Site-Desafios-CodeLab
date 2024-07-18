const buttonDarkMode = document.getElementById('themeToggle');
const bodyContent = document.querySelector('body');
const logoCodelab = document.querySelector('.introduction__container-image img');

function toggleImage() {
    bodyContent.classList.contains('white')
        ? logoCodelab.src = 'assets/images/logoCodelab_black.svg'
        : logoCodelab.src = 'assets/images/logoCodelab_white.svg';
}

buttonDarkMode.addEventListener('click', () => {
    bodyContent.classList.toggle('white');

    toggleImage();
});