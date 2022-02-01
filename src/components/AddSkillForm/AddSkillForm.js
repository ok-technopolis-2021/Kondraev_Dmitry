import React from "react";
import SkillModel from "../../models/SkillModel";

export class AddSkillForm extends React.Component {
    _emptyModel = new SkillModel();
    state = {
        model: this._emptyModel,
    };

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleValueInput = this.handleValueInput.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    render() {
        return <form className="skills-list-container__form skill_form" onSubmit={this.handleSubmit} onReset={this.handleReset}>
            <h2 className="skill_form__title">Add skill</h2>
            <div className="skill" style={{'--skill-value': this.state.model.valueFormat()}}>
                <label className="skill__name">
                    Name:
                    <input type="text" className="skill_form__input skill_form__input_name focusable"
                           name="skillName" required onChange={this.handleNameChange} value={this.state.model.name}/>
                </label>
                <label className="skill__value skill__value_in-form">
                    Ratio:
                    <input type="number" className="skill_form__input focusable" onInput={this.handleValueInput}
                           name="skillValue" min="0" max="100" step="5" value={this.state.model.value} size="5" required/>
                </label>
                <div className="skill__progress-bar progress-bar"/>
                <div className="skill__remove-button-container">
                    <button type="submit" className="skill-button focusable">
                        <i className="fas fa-plus" title="Add skill"/>
                    </button>
                </div>
            </div>
        </form>;
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state.model);
        this.handleReset();
        event.target.elements[0].focus();
    }

    handleValueInput(event) {
        this.setState(state => ({model: new SkillModel(state.model.name, event.target.value)}));
    }

    handleReset() {
        this.setState({model: this._emptyModel});
    }

    handleNameChange(event) {
        this.setState(state => ({model: new SkillModel(event.target.value, state.model.value)}));
    }
}
