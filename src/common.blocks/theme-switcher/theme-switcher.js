window.addEventListener('DOMContentLoaded', function () {
    const switcher = document.querySelector('.theme-switcher');
    if (!switcher) {
        return;
    }
    switcher.addEventListener('click', function (element) {
        document.body.classList.toggle('light-theme');
        element.target.classList.toggle('theme-switcher_light-theme');
    });
});
