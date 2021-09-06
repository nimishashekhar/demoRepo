import {
    FETCH_DRAGGABLE_ITEMS,
    STORE_NODE_DATA,
    UPDATE_NODE_DATA,
    REMOVE_NODE_DATA,
    STORE_LINKS
} from '../../../actions';
import { validGet } from '../../../util';

const items = [
    {
        category: 'storage',
        id: '1',
        name: 'S3',
        type: 'S3'
    },
    {
        category: 'test',
        id: '2',
        name: 'test',
        type: 'test'
    },
    
];

export function fetchDraggableItems() {
    return (dispatch) => {
        dispatch({
            items,
            type: FETCH_DRAGGABLE_ITEMS
        });
    }
}

export function updateNodeData(id, data) {
    return (dispatch) => {
        dispatch({
            id,
            data,
            type: UPDATE_NODE_DATA
        })
    }
}

export function storeNodesData(nodeInfo, dataType) {
    return (dispatch) => {
        dispatch({
            nodeInfo,
            dataType,
            type: STORE_NODE_DATA
        });
    }
}

export function removeNodeData(id) {
    return (dispatch) => {
        dispatch({
            id,
            type: REMOVE_NODE_DATA
        })
    }
}

export function storeLinks(source, target) {
    return (dispatch) => {
        dispatch({
            source: validGet(source, 'node', 'id'),
            target: validGet(target, 'node', 'id'),
            type: STORE_LINKS
        });
    }
}