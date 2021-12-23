import React from 'react'
import {AddSkillForm} from "../AddSkillForm/AddSkillForm";
import {Skill} from "../Skill/Skill";
import SkillModel from "../../models/SkillModel";

export default class SkillsApp extends React.PureComponent {
    state = {
        skills: [
            new SkillModel('JavaScript', 25),
            new SkillModel('PHP', 85),
            new SkillModel('HTML/CSS', 100),
            new SkillModel('Cobol', 95)
        ],
    };

    constructor(props) {
        super(props);
        this.handleAddSkill = this.handleAddSkill.bind(this);
        this.handleRemoveSkill = this.handleRemoveSkill.bind(this);
    }

    render() {
        return <div className="skills-list-container">
            <div className="skills-list-wrapper">
                <div className="skills-list">
                    {this.state.skills.map((s, index) => <Skill model={s} /*Плохая практика:*/ key={index} onRemove={this.handleRemoveSkill}/>)}
                </div>
            </div>
            <AddSkillForm onSubmit={this.handleAddSkill}/>
        </div>;
    }

    handleAddSkill(skill) {
        this.setState(state => {
            const index = state.skills.indexOf(skill);
            if (index >= 0) {
                return state;
            }
            return ({skills: [...state.skills, skill]});
        });
    }

    handleRemoveSkill(skill) {
        //(skillElement.nextElementSibling || skillElement.previousElementSibling)?.querySelector('.skill-button_remove').focus();
        this.setState(state => {
            const index = state.skills.indexOf(skill);
            if (index < 0) {
                return state;
            }
            const copy = [...state.skills];
            copy.splice(index, 1);
            return ({skills: copy});
        });
    }
}
