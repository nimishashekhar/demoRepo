import React from 'react';
	
const TrayWidget = (props) => {
	return (
		<div className="tray">
			{props.children}
		</div>
	);
}

export default TrayWidget;
