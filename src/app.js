import './common.blocks/theme-switcher/theme-switcher';

const map = func => target => func(target);

const define = (target, properties) => {
    for (const [key, value] of Object.entries(properties)) {
        target[key] = value;
    }
    return target;
};

class Skill {
    constructor(name = '', value = 0) {
        this.name = name;
        this.value = value;
    }

    render(target) {
        target.className = 'skill';
        target.style.setProperty('--value', this.valueFormat());
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
                    className: 'remove-button focusable'
                }
            ).appendChild(document.createElement('i')),
            {
                className: 'far fa-minus',
                title: 'Remove skill'
            }
        );
    }

    valueFormat() {
        return `${this.value}%`;
    }
}

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.skill_form').addEventListener('submit', function (event) {
        const [name, value] = [event.target.elements.skillName.value, event.target.elements.skillValue.value];
        if (name === '') {
            // incorrect name
        }
        (new Skill(name, value))
            .render(document
                .querySelector('.skills-list')
                .appendChild(document.createElement('div'))
            );
        event.preventDefault();
    });
});
