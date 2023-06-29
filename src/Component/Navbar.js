import React from 'react';
import styled from "styled-components";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { BiSolidShip } from 'react-icons/bi';
import { BsPersonFill } from 'react-icons/bs';

import {Link} from 'react-router-dom';

function Navbar() {
    const DivTop = styled.div`
        display: flex;
        align-items: center; 
        height: 70px;
        margin: 0;
        padding: 0;
    `;

    const Ul = styled.ul`
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
    `;

    const Item = styled.li`
        display: flex;
        align-items: center;
        padding: 15px;
        font-size: 20px;
        color: rgb(0, 0, 100);

        white-space: nowrap;
    `;

    const ShipIcon = styled(BiSolidShip)`
        color: rgb(0, 0, 100);
        font-size: 60px;
    `;

    const PersonIcon = styled(BsPersonFill)`
        color: rgb(0, 0, 100);
        font-size: 60px;
    `;

    const LinkStyle = styled(Link)`
        text-decoration-line: none;
        text-decoration-color : none;
        color: rgb(0, 0, 100);
    `

    return (

        <DivTop>
            <div style={{width: '60px'}}></div>
            <Ul>
                <Item><LinkStyle to="/"><ShipIcon/></LinkStyle></Item>
                <div style={{width: '70px'}}></div>
                <Item><LinkStyle to="DevDesign">Dvelopment Design</LinkStyle></Item>
                <div style={{width: '70px'}}></div>
                <Item><LinkStyle to="TestCode">Test Code</LinkStyle></Item>
                <div style={{width: '70px'}}></div>
                <Item><LinkStyle to="AutoGenerateAPIDocu">API Document</LinkStyle></Item>
                <div style={{width: '550px'}}></div>
                <Item><LinkStyle to="MyPage"><PersonIcon/></LinkStyle></Item>
            </Ul>
        </DivTop>
    );
}

export default Navbar;