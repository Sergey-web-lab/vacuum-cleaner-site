export function menuAction() {

    const hamburger = document.querySelector('.headerNav__menu'),
        menu = document.querySelector('.menu'),
        overlayBlock = document.querySelector('.menu__overlay'),
        menuLinks = document.querySelectorAll('.menu__link'),
        closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
        menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
    });

    menuLinks.forEach(link => link.addEventListener('click', () => {
        menu.classList.remove('active');
    }));

    overlayBlock.addEventListener('click', () => {
        menu.classList.remove('active');
    });
}

