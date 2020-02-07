import React from "react";
import { css } from "@emotion/core";
import {HashLoader } from "react-spinners";
 

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
 
const Loading= (props)=> {
    return (
      <div id='center' className="sweet-loading">
        <HashLoader
          css={override}
          size={props.size}
          color={"#FF4B2B"}
          loading={true}
        />
      </div>
    );
  }

export default Loading
