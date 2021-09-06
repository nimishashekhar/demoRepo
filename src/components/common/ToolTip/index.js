/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const ToolTipContainer = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <>
      <span 
        style={{ color: "white" }} 
        href="#" id="TooltipExample"
      >
        {props.name}
      </span>
      <Tooltip placement="top-end" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        {props.message}
      </Tooltip>
   </>
  );
}

export default ToolTipContainer;