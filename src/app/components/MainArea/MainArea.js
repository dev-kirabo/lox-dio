import React from 'react';

import Container from 'react-bootstrap/Container';

import Content from '../Content/Content';
import ButtonColumn from '../ButtonColumn/ButtonColumn';

import './MainArea.css';



export default function MainArea() {



    return (
        <div id="mainArea">
            <p>main area</p>
            <Container fluid id="pageLayout" className="container-fluid">
                <ButtonColumn side="left" />
                <Content />
                <ButtonColumn side="right" />
            </Container>
        </div>
    );
}