import React, { Component } from 'react';
import Tab from './Tab';

export class Tablist extends Component {
  render() {
    return this.props.tabs.map((indtab) => (
      <Tab tab={indtab}
      changeTab={this.props.changeTab}
      activeTab={this.props.activeTab}/>
    ));

  }
}

export default Tablist;
