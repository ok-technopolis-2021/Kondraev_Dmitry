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

/**
 * Object, representing specification of HTML element
 * @typedef {Object} Specification
 * @property {string} [tagName]
 * @property {string} [className]
 * @property {string} [title]
 * @property {Object.<string, string|null>} [style]
 * @property {EventListener} [onclick]
 * @property {Content} [content]
 */

/**
 * @typedef {(string|Specification|Specification[])} Content
 */

/**
 * Updates element to match specification
 * @returns {HTMLElement}
 * @param {HTMLElement} target
 * @param {Specification} tree
 */
function render(target, tree) {
    if (tree.className && target.className !== tree.className) {
        target.className = tree.className;
    }
    if (tree.title && target.title !== tree.title) {
        target.title = tree.title;
    }
    if (tree.onclick) {
        // overwriting, just as planned
        target.onclick = tree.onclick;
    }
    if (tree.style) {
        for (const [property, value] of Object.entries(tree.style)) {
            target.style.setProperty(property, value);
        }
        Object.assign(target.style, tree.style);
    }
    if (!tree.content) {
        return target;
    }
    if (typeof tree.content === "string" && target.innerText !== tree.content) {
        target.innerText = tree.content;
        return target;
    }
    if (target.childNodes.length !== 0) {
        target.innerHTML = '';
    }
    for (let element of Array.isArray(tree.content) ? tree.content : [tree.content]) {
        target.appendChild(render(document.createElement(element.tagName), element));
    }
    return target;
}

class Skill {
    constructor(name = '', value = 0) {
        this.name = name;
        this.value = value;
    }

    render() {
        return render(document.createElement('div'), {
            className: 'skill skills-list__element',
            style: this.style(),
            content: [
                {
                    tagName: 'span',
                    className: 'skill__name',
                    content: this.name
                },
                {
                    tagName: 'span',
                    className: 'skill__value',
                    content: this.valueFormat()
                },
                {
                    tagName: 'div',
                    className: 'skill__progress-bar progress-bar'
                },
                {
                    tagName: 'div',
                    className: 'skill__remove-button-container',
                    content: {
                        tagName: 'button',
                        className: 'skill-button skill-button_remove focusable',
                        onclick: function (event) {
                            const skillElement = event.target.closest('.skill');
                            (skillElement.nextElementSibling || skillElement.previousElementSibling)?.querySelector('.skill-button_remove').focus();
                            skillElement.remove();
                        },
                        content: {
                            tagName: 'i',
                            className: 'fas fa-minus',
                            title: 'Remove skill'
                        }
                    }
                }
            ]
        });
    }

    style() {
        return {
            '--skill-value': this.valueFormat()
        };
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

window.addEventListener('DOMContentLoaded', function () {
    const skillList = document.querySelector('.skills-list');
    if (!skillList) {
        return;
    }

    // Здесь можно забрать скиллы с сервера
    const skills = [
        new Skill('JavaScript', 25),
        new Skill('PHP', 85),
        new Skill('HTML/CSS', 100),
        new Skill('Cobol', 95)
    ];
    for (const skill of skills) {
        skillList.appendChild(skill.render());
    }
});
