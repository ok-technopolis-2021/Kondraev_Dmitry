import Skill from '../skill/skill'

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
