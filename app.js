document.querySelector('.theme-switcher').addEventListener('click', function (element) {
    document.body.classList.toggle('light-theme');
    element.target.classList.toggle('theme-switcher_light-theme');
});
