import React, {Component} from 'react';

export class Tab extends Component {
  addStyling = () => {
    if(this.props.tab.id === this.props.activeTab){
      return 'active'
      }
    }
  render() {
    return (
           <li onClick={this.props.changeTab.bind(this, this.props.tab.id)} className= {this.addStyling()}> <a><span>{this.props.tab.title}</span></a></li>
    );
  }
}

export default Tab;
