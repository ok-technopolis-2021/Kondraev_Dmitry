export default class SkillModel {
    constructor(name = '', value = 0) {
        this.name = name;
        this.value = value;
    }

    valueFormat() {
        return `${this.value}%`;
    }
}
