import React from "react";

export class MinorInfo extends React.Component {
    render() {
        return <section className="minor-info">
            <img src="assets/avatar.png" alt="Dmitry's avatar" className="avatar minor-info__avatar"/>
            <h2 className="minor-info__name">Kondraev Dmitry</h2>
            <p className="minor-info__position">Web Developer</p>
            <ul className="minor-info__social social">
                <li><a className="social__icon social__icon_site_github focusable link"
                       href="https://github.com/mariohuq"></a>
                </li>
                <li><a className="social__icon social__icon_site_tamtam focusable link"
                       href="https://tt.me/mariohuq"></a></li>
                <li><a className="social__icon social__icon_site_polytech focusable link"
                       href="mailto:kondraev.de@edu.spbstu.ru"></a></li>
            </ul>
            <a href="./media/kondraev-dmitry-java-dev-cv.pdf"
               className="minor-info__download-button download-button focusable link link_type_default"
               download="Kondraev Dmitry WebDev CV">
                Download CV
            </a>
            <footer className="card__footer">© 2021 All rights reserved</footer>
        </section>;
    }
}
