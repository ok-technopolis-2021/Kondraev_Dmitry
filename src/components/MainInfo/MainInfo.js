import React from 'react'

export class MainInfo extends React.Component {
    render() {
        return <div className="main-info">
            <h1 className="main-info__name">Kondraev Dmitry</h1>
            <p className="main-info__position">Web Developer</p>
            <p className="main-info__message">
                <a href="skills.html" className="focusable link link_type_primary">Check
                out</a> my skills! 💪
            </p>
        </div>;
    }
}
