import {connect} from 'react-redux';
import Infrastructure from './index';
import { storeNodesData, removeNodeData } from '../../action-creators/infrastructure/draggable-items';

function mapStateToProps({draggableItems}) {
   console.log('draggableItems>',draggableItems)
    return {
      draggableItems        
    }
}

const mapDispatchToProps = {
   removeNodeData,
   storeNodesData
};


export default connect(mapStateToProps, mapDispatchToProps)(Infrastructure);