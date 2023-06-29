import React, { useState } from 'react';
import styled from "styled-components";
import '../font/Lora/font.css';

const Button = styled.button`
  border: 0;
  background-color: ${props => props.showChildren ? '#E2E2E2' : 'white'};
  margin-left: ${props => props.indent ? '20px' : '0'};
  font-size: 15px;
  cursor: pointer;
`;

const DivLeft = styled.div`
  float: left;
  width: 25%;
  height: 663px;
  margin-left: 20px;
`;

const DivRight = styled.div`
  float: right;
  width: 65%;
  height: 663px;
`;

function Directory() {
  const [showChildrenParent, setShowChildrenParent] = useState(false);
  const [showChildrenChild, setShowChildrenChild] = useState(false);

  function toggleChildrenParent() {
    setShowChildrenParent(!showChildrenParent);
    setShowChildrenChild(false); // Reset child state when parent is toggled
  }

  function toggleChildrenChild() {
    setShowChildrenChild(!showChildrenChild);
  }

  return (
    <>
      <DivLeft>
        <Button showChildren={showChildrenParent} onClick={toggleChildrenParent} style={{ fontSize: '20px' }}>
          Parent Directory
        </Button>
        {showChildrenParent && (
          <div style={{ marginLeft: '20px', whiteSpace: 'nowrap' }}>
            <DivLeft>
              <Button
                showChildren={showChildrenChild}
                onClick={toggleChildrenChild}
                indent
                showChildrenParent={showChildrenParent} // Pass parent state to child button
              >
                Child Directory
              </Button>
              {showChildrenChild && (
                <div style={{ marginLeft: '20px' }}>
                </div>
              )}
            </DivLeft>
          </div>
        )}
      </DivLeft>
    </>
  );
}

export default Directory;
