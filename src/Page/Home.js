import React from 'react';
import styled from "styled-components";
import '../font/Lora/font.css';

function Home() {

    const Container = styled.div`
        
    `;

    const Port = styled.div`
        position: absolute;
        top: 120px;
        left: 200px;
        font-size: 220px;
        font-weight: bold;
        text-align: left;
        letter-spacing: normal;
        color: rgb(0, 0, 90);
    `;

    const TextContainer = styled.div`
        position: absolute;
        margin-top: 350px;
        font-size: 20px;
        right: 300px;
        text-align: left;
        line-height: 1.5;
        color: rgb(0, 0, 70);;
    `;

    return(
        <Container>
            <Port>Port</Port>
            <TextContainer>
                Developer Productivity Tools, Port.<br/>It's easy to develop with just a few clicks.<br/>It provides automatic generation of development designs, text codes, and API documents.<br/>You can also become a developer.
            </TextContainer>
        </Container>
    )
}

export default Home;
