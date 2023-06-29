import React from 'react';
import styled from "styled-components";
import { CodeBlock, dracula } from "react-code-blocks";



function TestCodeblock() {

    return(
        <CodeBlock
            text='console.log("Hello, world!");'
            language='javascript'
            showLineNumbers={true}
            theme={dracula}
        />
    )
}

export default TestCodeblock;