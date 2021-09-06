import React, { useState } from 'react';
import { DefaultNodeModel, DefaultPortModel, LinkModel } from "storm-react-diagrams";
import { validGet, validGetOr } from '../../util';

export const nodeDataToNode = (id, nodeData, that, engine) => { 
  let node = nodeData.node;

    const nextName = typeof validGet(node, 'name') === 'string' ? node.name : validGet(node, 'name', 'props', 'children', 0);
      if (node) {
        if (node.cond) {
          const onClose = (e) => {
            e.stopPropagation();
            node.remove();
          };

          const onClick = () => {
            if (!that.state.show && node) {
              node.setSelected(false);
              //that.toggleModal(nodeData.type, id);
            }
          };

          node.setName(<span>
            <span className='node-name'>{nextName}</span>&nbsp;
            <button className='btn btn-sm node-btn' onClickCapture={onClick}>edit</button>&nbsp;
            <button className='btn btn-sm node-btn' onClickCapture={onClose}>x</button>
          </span>);

          node.addListener({
            entityRemoved: () => that.onNodeRemove(node),
          });
          node.parameters = nodeData.parameters;
          
        if (node.cond) engine.getDiagramModel().addNode(node);
      }
    }
}
  
export default class CustomNodeModel extends DefaultNodeModel {

    setName(name) {
      this.name = name;
    }
}