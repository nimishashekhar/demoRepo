import {connect} from 'react-redux';
import {fetchDraggableItems}  from '../../../action-creators/infrastructure/draggable-items';
import DraggableItems from './index';

function mapStateToProps({draggableItems}) {
    return {
        draggableItems
    }
}

const mapDispatchToProps = {
    fetchDraggableItems
};

export default connect(mapStateToProps, mapDispatchToProps)(DraggableItems);