import React from 'react';
import styled from "styled-components";

function DevDesignState() {

        const DivLeft = styled.div`
            float: left;
            width: 20%;
            height: 663px;
            margin-left: 20px;
        `

        const DivRight = styled.div`
            float: right;
            width: 70%;
            height: 663px;
        `

        const Ul = styled.div`
            list-style-type: none;
            padding-left: 0px;
            color: rgb(0, 0, 100);
        `

        const Li = styled.div`
            list-style-type: none;
            padding-left: 0px;
            color: rgb(0, 0, 100);
        `

    return(
        <DivLeft>
           <Ul>
                <Li>Database ERD</Li>
                <Li>Database Discription</Li>
                <Li>Process</Li>
                <Li>Mind Map</Li>
           </Ul>
        </DivLeft>
    )
}

export default DevDesignState;