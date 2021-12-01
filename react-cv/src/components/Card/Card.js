import React from "react";
import {MainInfo} from "../MainInfo/MainInfo";
import {MinorInfo} from "../MinorInfo/MinorInfo";

export class Card extends React.Component {
    render() {
        return <div className="card">
            <MainInfo/>
            <MinorInfo/>
        </div>;
    }
}
