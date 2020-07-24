import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'antd-mobile';
import { Tabs, WhiteSpace } from 'antd-mobile';
import CardDemo from "./Pages/CardDemo";
import ListPage from "./Pages/ListPage";
class App extends Component {
  renderContent = tab =>
      (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
        <p>Content of {tab.category}</p>
      </div>);

  render() {
    const tabs = [
      {
        title: '1st Tab',
        category: '1'
      },
      {
        title: '2nd Tab',
        category: '2'
      },
      {
        title: '3rd Tab',
        category: '3'
      },
      {
        title: '4th Tab',
        category: '4'
      },
      {
        title: '5th Tab',
        category: '5'
      },
      {
        title: '6th Tab',
        category: '6'
      },
      {
        title: '7th Tab',
        category: '7'
      },
      {
        title: '8th Tab',
        category: '8'
      },
      {
        title: '9th Tab',
        category: '9'
      },
    ];

    return (
        <div>
          <WhiteSpace />
          <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
            {/*{this.renderContent}*/}
            {/*<CardDemo></CardDemo>*/}
            <ListPage></ListPage>
          </Tabs>
          <WhiteSpace />
        </div>
    );
  }

}

export default App;
