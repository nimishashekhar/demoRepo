import React from 'react';
import DragIcon from '../../Icons/Drag';
import ToolTipContainer from '../../common/ToolTip'
import '../../../styles/infrastructure/index.css';
//import ExistingResources from './ExistingResources';

// const nameToStateMap = {
// 	'Data Factory': { name: 'dataFactory', fetch: 'listDataFactories' },
// 	'Virtual Network': { name: 'vNet', fetch: 'listVirtualNetworks' }
// };

const TrayItemWidget = ({ color, name, model }) => {

	return (
		<div
			style={{ background: color }}
			draggable={true}
			//draggable = {false}
			onDragStart={event => {
				event.dataTransfer.setData('iac-diagram-node', JSON.stringify(model));
			}}
			className='tray-item flex-align-center1'
		>
			<DragIcon width={8} fill={"white"} className='drag-icon' />
			{/* <ExistingResources state={nameToStateMap[name]} name={name} /> */}
		</div>
	);

}
export default TrayItemWidget;
