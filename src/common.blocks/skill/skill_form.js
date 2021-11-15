import Skill from './skill'

window.addEventListener('DOMContentLoaded', function () {
    const skillList = document.querySelector('.skills-list');
    const form = document.querySelector('.skill_form');
    if (!skillList || !form) {
        return;
    }

    form.model = new Skill();
    form.addEventListener('submit', function (event) {
        event.target.model.renderInto(skillList);
        form.reset();
        form.elements[0].focus();
        event.preventDefault();
    });
    form.elements.skillValue.addEventListener('input', function (event) {
        form.model.value = event.target.value;
        form.model.renderStyle(form.querySelector('.skill'));
    });
    form.addEventListener('reset', function () {
        form.model.value = 0;
        form.model.name = '';
        form.model.renderStyle(form.querySelector('.skill'));
    });
    form.elements.skillName.addEventListener('change', function (event) {
        form.model.name = event.target.value;
    });
});
