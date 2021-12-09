export default class Skill {
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
                className: 'fas fa-minus',
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

