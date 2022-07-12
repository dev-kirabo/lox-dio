import React from 'react';

import './SelectButton.css';

import {Link} from 'react-router-dom';


export default function SelectButton(props){

    const url = props.url;

    return(
        <div className="selectButton">
            <p>Select Button</p>
            <Link to={url}>ButtonLink</Link>
        </div>
    );

}