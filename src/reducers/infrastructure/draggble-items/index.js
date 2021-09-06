import {
    FETCH_DRAGGABLE_ITEMS,
    STORE_NODE_DATA,
    UPDATE_NODE_DATA,
    REMOVE_NODE_DATA,
    STORE_LINKS
} from '../../../actions';

import { reduce, REQUEST_OBJECT, RECEIVE_OBJECT, INVALIDATE_OBJECT, OBJECT_ERROR } from '../../../util/redux';
  
  const DEFAULT_DRAGGABLE_ITEMS = {
    items: [],
    nodes: {},
    links: []
  };
  
  const handlers = {
    [FETCH_DRAGGABLE_ITEMS]: (state, {items}) => ({...state, ...RECEIVE_OBJECT({items})}),
    [STORE_NODE_DATA]: (state, action) => {
        var nodes = {
            ...state.nodes,
            [action.nodeInfo.id]: {
                name: action.nodeInfo.name,
                node: action.nodeInfo,
                type: action.dataType,
                parameters: action.nodeInfo.parameters
            }
        };

        return ({...state, ...RECEIVE_OBJECT({nodes})})
    },

    [UPDATE_NODE_DATA]: (state, action) => {
        const nodes = {
            ...state.nodes,
            [action.id]: {
                ...state.nodes[action.id],
                parameters: action.data
            }
        }

        return ({...state, ...RECEIVE_OBJECT({nodes})})
    },

    [REMOVE_NODE_DATA]: (state, action) => {
        const nodes = {...state.nodes};
        delete nodes[action.id];
        const links = state.links.filter(({target, source}) => !(target === action.id || source === action.id));
        
        return ({...state, ...RECEIVE_OBJECT({links, nodes})})
    },

    [STORE_LINKS]: (state, action) => {
        const exists = state.links.reduce((a, c) => a || (c.source === action.source && c.target === action.target), false);
    
        return exists ? state : ({...state, ...RECEIVE_OBJECT({links: [
            ...state.links,
            {
                source: action.source,
                target: action.target
            }
        ]})})
        
    },
  };
  
  export default reduce(DEFAULT_DRAGGABLE_ITEMS, handlers);