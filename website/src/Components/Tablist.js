import React, { Component } from 'react';
import Tab from './Tab';

export class Tablist extends Component {
  render() {
    const tab = this.props.tabs.map((indtab) => (
      <Tab tab={indtab}
      changeTab={this.props.changeTab}
      activeTab={this.props.activeTab}/> ));
    return (
        <ul id="nav-bar-list">
          {tab}
        </ul>

    );

  }
}

export default Tablist;
