import React from "react";

import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
`;

const CardStyldVer = (props) => {
  return <Card className={props.className} >{props.children}</Card>;
};

export default CardStyldVer;
