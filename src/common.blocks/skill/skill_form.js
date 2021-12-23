import Skill from './skill'
import render from '../../js/utils'

window.addEventListener('DOMContentLoaded', function () {
    const skillList = document.querySelector('.skills-list');
    const form = document.querySelector('.skill_form');
    if (!skillList || !form) {
        return;
    }

    form.model = new Skill();
    form.addEventListener('submit', function (event) {
        skillList.appendChild(event.target.model.render());
        form.reset();
        form.elements[0].focus();
        event.preventDefault();
    });
    form.elements.skillValue.addEventListener('input', function (event) {
        form.model.value = event.target.value;
        render(form.querySelector('.skill'), {
            style: form.model.style()
        });
    });
    form.addEventListener('reset', function () {
        form.model.value = 0;
        form.model.name = '';
        render(form.querySelector('.skill'), {
            style: form.model.style()
        });
    });
    form.elements.skillName.addEventListener('change', function (event) {
        form.model.name = event.target.value;
    });
});
