import Skill from '../skill/skill'

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
        new Skill('Cobol', -100)
    ]) {
        skill.renderInto(skillList);
    }
});
