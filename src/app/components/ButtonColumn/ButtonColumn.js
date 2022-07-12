import React from 'react';

import './ButtonColumn.css';

import SelectButton from '../SelectButton/SelectButton';

export default function ButtonColumn(props){

    const displayClass = "buttonColumn button-" + props.side; 

    return (
        <div className={displayClass}>
            <SelectButton />
            <SelectButton />
            <SelectButton />
        </div>

    );

}