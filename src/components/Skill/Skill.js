import React from 'react'

export class Skill extends React.PureComponent {
    constructor(props) {
        super(props);
        this.removeFromList = this.removeFromList.bind(this);
    }

    render() {
        return <div className="skill skills-list__element" style={{'--skill-value': this.props.model.valueFormat()}}>
            <span className="skill__name">{this.props.model.name}</span>
            <span className="skill__value">{this.props.model.valueFormat()}</span>
            <div className="skill__progress-bar progress-bar"/>
            <div className="skill__remove-button-container">
                <button className="skill-button skill-button_remove focusable" onClick={this.removeFromList}>
                    <i className="fas fa-minus" title="Remove skill"/>
                </button>
            </div>
        </div>;
    }

    removeFromList() {
        this.props.onRemove(this.props.model);
    }
}
