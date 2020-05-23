(() => {
    const button = document.querySelector(".js-main-navigation__mobile-button");
    const menu = document.querySelector(".js-main-navigation__menu");

    const taggleClass = () => {
        menu.classList.taggle("main-navigation__menu--open")
    };

    button.addEventListener("click", taggleClass);
    menu.addEventListener("click", taggleClass);
})();