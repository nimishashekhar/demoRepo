import React from 'react';
import '../../../styles/infrastructure/draggable-items.css'
import TrayWidget from './TrayWidget';
import TrayItemWidget from './TrayItemWidget';
import Accordion from '../../common/Accordion';
import PropTypes from 'prop-types';

const categories = ['Storage', 'Test'];
class DraggableItems extends React.Component{
    static propTypes = {
        children: PropTypes.instanceOf(Object).isRequired,
      };

    constructor(props) {
        super(props);
    
        const openSections = {};
    
        this.state = { openSections };
      }

    componentDidMount() {
        this.props.fetchDraggableItems();
    }
    
    accordionContent = (draggableItems, category) => {
        return (
            <TrayWidget>
            {
                draggableItems.map(sourceResource => {

                    if ((sourceResource.category).toUpperCase() === category.toUpperCase()) {      
                        return <span key={sourceResource && sourceResource.id}>
                        <TrayItemWidget 
                            model={{ resources: sourceResource }}
                            name={sourceResource.name}
                            color='rgb(87, 95, 123)'
                        />
                       </span>
                    }
                    return <span/>
                })
            }
            </TrayWidget>
        );
    }

    onClick = title => {
        const {
            state: { openSections },
          } = this;
    
        const isOpen = !!openSections[title];
    
        this.setState({
          openSections: {
            [title]: !isOpen
          }
        });
      };

    render(){
        const {
            onClick,
            state: { openSections },
          } = this;
        return(
            <div>
            {
                categories.map(category => (
                  
                        
                        <Accordion
                            title={category}
                            content={this.accordionContent(this.props.draggableItems.items, category)}
                            onClick={onClick}
                            isOpen={!!openSections[category]}
                        >
                        {this.accordionContent(this.props.draggableItems.items, category).props.children}
                         </Accordion>
                ))
            }
            </div>
        )
    }
}

export default DraggableItems;