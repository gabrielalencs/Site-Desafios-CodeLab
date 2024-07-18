const buttonDarkMode = document.getElementById('themeToggle');
const bodyContent = document.querySelector('body');
const logoCodelabHome = document.querySelector('.introduction__container-image img');
const logoCodelabFooter = document.querySelector('footer img');


function toggleImage() {

    if (bodyContent.classList.contains('white')) {
        logoCodelabHome.src = 'assets/images/logoCodelab_black.svg';
        logoCodelabFooter.src = 'assets/images/logo_black.svg';
    } else {
        logoCodelabHome.src = 'assets/images/logoCodelab_white.svg';
        logoCodelabFooter.src = 'assets/images/logo_white.svg';
    }
    
       
}

buttonDarkMode.addEventListener('click', () => {
    bodyContent.classList.toggle('white');

    toggleImage();
});