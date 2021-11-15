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

class Skill {
    constructor(name = '', value = 0) {
        this.name = name;
        this.value = value;
    }

    render(target) {
        const define = (target, properties) => {
            for (const [key, value] of Object.entries(properties)) {
                target[key] = value;
            }
            return target;
        };

        target.className = 'skill';
        this.renderStyle(target);
        define(target.appendChild(document.createElement('span')), {
            className: 'skill__name'
        }).appendChild(document.createTextNode(this.name));
        define(target.appendChild(document.createElement('span')), {
            className: 'skill__value'
        }).appendChild(document.createTextNode(this.valueFormat()));
        define(target.appendChild(document.createElement('div')), {
            className: 'skill__progress-bar progress-bar'
        });
        define(
            define(
                define(
                    target.appendChild(document.createElement('div')),
                    {
                        className: 'skill__remove-button-container'
                    }
                ).appendChild(document.createElement('button')),
                {
                    className: 'skill-button skill-button_remove focusable'
                }
            ).appendChild(document.createElement('i')),
            {
                className: 'far fa-minus',
                title: 'Remove skill'
            }
        );

        target.querySelector('.skill-button_remove').addEventListener('click', function (event) {
            event.target.closest('.skill').remove();
        });
    }

    renderInto(targetList) {
        this.render(targetList.appendChild(document.createElement('div')));
    }

    renderStyle(target) {
        target.style.setProperty('--skill-value', this.valueFormat());
    }

    valueFormat() {
        return `${this.value}%`;
    }
}

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

window.addEventListener('DOMContentLoaded', function () {
    const skillList = document.querySelector('.skills-list');
    if (!skillList) {
        return;
    }

    // Здесь можно забрать скиллы с сервера
    for (const skill of [
        new Skill('JavaScript', 25),
        new Skill('PHP', 85),
        new Skill('HTML/CSS', 100),
        new Skill('Cobol', 95)
    ]) {
        skill.renderInto(skillList);
    }
});
