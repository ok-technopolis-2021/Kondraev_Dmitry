import render from '../../js/utils'

export default class Skill {
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
                            event.target.closest('.skill').remove();
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

