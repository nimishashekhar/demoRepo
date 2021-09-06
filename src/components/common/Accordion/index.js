import React, { Component } from "react";
 
import "../../../styles/common/accordion.css";
import Chevron from "../../Icons/Chevron";
import NetworkIcon from "../../Icons/network";
import AnalyticsIcon from '../../Icons/analytics';
import SecurityIcon from '../../Icons/security';
import MonitorIcon from '../../Icons/monitor';
import DatabaseIcon from '../../Icons/database';
import StorageIcon from '../../Icons/storage';
import PropTypes from 'prop-types';
 
class Accordion extends Component {
  
constructor(props) {
    super(props);
    this.content = React.createRef(null);
  }
static propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
    isOpen: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
   
  };
  
  onClick = () => {
    this.props.onClick(this.props.title);
  };
 
  render() {
    const {
      onClick,
      props: { isOpen, title },
    } = this;
 
    return (
      <div className="accordion__section">
          <button className={`accordion`} onClick={onClick}>
                <span>
                    {
                        title === 'Networking' ? <NetworkIcon className='category-icon' width={25} fill={'white'} /> :
                            title === 'Analytics' ? <AnalyticsIcon className='category-icon' width={25} fill={'white'} /> :
                                title === 'Security' ? <SecurityIcon className='category-icon' width={17} fill={'white'} /> :
                                    title === 'Monitor' ? <MonitorIcon className='category-icon' width={25} fill={'white'} /> :
                                        title === 'Storage' ? <StorageIcon className='category-icon' width={20} fill={'white'} /> :
                                            title === 'Database' ? <DatabaseIcon className='category-icon' width={20} fill={'white'} /> :
                                            title === 'Subscriptions' ? <i class='fa fa-key' aria-hidden="true" style={{"fontSize":"20px","paddingRight":"7px", transform: 'rotate(45.1deg)'}}></i> : 
                                            title === 'ResourceGroups' ? <i class="fa fa-cubes" style={{"fontSize":"20px","paddingRight":"7px"}}></i> : ''
                    }
                </span>
                <p className="accordion__title">{title}</p>
                <Chevron className={!isOpen ? "accordion__icon" : "accordion__icon rotate" } width={10} fill={"#fff"} />
            </button>
       
        {
        isOpen && (
          <div
          
          
          className="accordion__content"
          >
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}
 
export default Accordion;