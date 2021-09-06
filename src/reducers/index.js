import State from '../state/state';
import draggableItems from './drag-drop-tool/draggable-items';
import {combineAndWrapReducers} from './combine-and-wrap-reducers';

export function makeReducer() {
    const reducers = {
        draggableItems
    }

    return combineAndWrapReducers(reducers, State);
}