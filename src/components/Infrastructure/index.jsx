import React from 'react';
import {
	DiagramWidget,
	DiagramEngine,
	DefaultNodeFactory,
	DefaultLinkFactory,
	DefaultPortModel
} from 'storm-react-diagrams';
import { Alert, Button, Col, Spinner, Card, CardBody, UncontrolledCollapse } from 'reactstrap';
import '../../styles/infrastructure/index.css';
import CustomNodeModel, { nodeDataToNode } from '../React-Diagrams/CustomNodeModel';
import DraggableItems from './draggable-Items/draggable-connector';

class Infrastructure extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			engine: null,
      		show: false      
		};

		//this.showModal = this.showModal.bind(this);
		this.onNodeRemove = this.onNodeRemove.bind(this);

		this.engine = {};
    	this.lastLink = {};
	}

  componentDidMount() {
		this.engine = new DiagramEngine();
		this.engine.registerNodeFactory(new DefaultNodeFactory());
		this.engine.registerLinkFactory(new DefaultLinkFactory());
		this.setState({ engine: this.engine });
		Object.keys(this.props.draggableItems.nodes).forEach(key => {
			const node = this.props.draggableItems.nodes[key];
			nodeDataToNode(key, node, this, this.engine);
		});
	}

  componentDidUpdate(nextProps) {
		const newNodes = new Set(Object.keys(this.props.draggableItems.nodes));
		const oldNodes = new Set(Object.keys(nextProps.draggableItems.nodes));
		const notUpdated = [...newNodes].reduce((a, c) => a && oldNodes.has(c), true) && [...oldNodes].reduce((a, c) => a && newNodes.has(c), true);
		if (!notUpdated) {
			Object.keys(this.props.draggableItems.nodes).forEach(key => {
				const node = this.props.draggableItems.nodes[key];
				nodeDataToNode(key, node, this, this.engine);
			});
			this.setState({ engine: this.engine });
		}
	}

  onDrop(event) {
		var data = JSON.parse(event.dataTransfer.getData('iac-diagram-node'));
		if (Object.keys(data.resources).length !== 0) {
			let node = null;
			node = new CustomNodeModel('', '#656b82');

			const onClose = (e) => {
				e.stopPropagation();
				node.remove();
			};

			const onClick = () => {
				if (!this.state.show && node) {
					node.setSelected(false);
					//this.showModal(data.resources.type, node.id);
				}
			};

			node.setName(<span>
				{data.resources.name}&nbsp;
				<button className='btn btn-secondary btn-sm' onClickCapture={onClick}>edit</button>&nbsp;
				<button className='btn btn-secondary btn-sm' onClickCapture={onClose}>x</button>
			</span>)

			node.addPort(new DefaultPortModel(false, '', ''));

			var points = this.state.engine.getRelativeMousePoint(event);
			node.x = points.x;
			node.y = points.y;

			//on removing node
			node.addListener({
				entityRemoved: () => this.onNodeRemove(node)
			});

			this.state.engine.getDiagramModel().addNode(node);

			// this.setState({
			// 	blockNavigation: true
			// })
			this.props.storeNodesData(node, data.resources.type);
		}
	}

	onNodeRemove(node) {
		this.props.removeNodeData(node.id)
		this.setState({
			show: false
		});
	}

  render() {
    return (
      <div className="drag-drop-container">
        <div className="row">
          <Col md={2} className='draggable-items'>
            <div className="sidebar dataops-sidebar" data-color="purple" data-background-color="black" data-image="assets/img/sidebar-2.jpg">
              <p className='tool-heading'>Service Categories</p>
              <DraggableItems />
            </div>
          </Col>
          <Col md={10}>
		  	<div className="row">
							<Col md={10} className='drop-area'>
								<p className='tool-heading'>Draggable Area</p>
							</Col>

			</div>
			<div
							className="diagram-layer"
							onDrop={event => {
								this.onDrop(event, this.props.draggableItems.nodes);
							}}

							onDragOver={event => {
								event.preventDefault();
							}}
						>
							{
								this.state.engine ?
									<DiagramWidget
										diagramEngine={this.state.engine} />
									: <Spinner type='grow' />
							}
						</div>
        </Col>
        </div>
      </div>
    )
  }

}


export default Infrastructure;