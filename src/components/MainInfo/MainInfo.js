import React from 'react'
import {Link} from "react-router-dom";

export default class MainInfo extends React.Component {
    render() {
        return <>
            <h1 className="main-info__name">Kondraev Dmitry</h1>
            <p className="main-info__position">Web Developer</p>
            <p className="main-info__message">
                <Link to="skills" className="focusable link link_type_primary">Check
                out</Link> my skills! 💪
            </p>
        </>;
    }
}
