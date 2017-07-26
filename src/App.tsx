import React, { Component } from 'react';
import './App.css';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

const TabContainer = ({children}: {children: React.ReactNode}) => (
  <div style={{ padding: 24 }}>
    {children}
  </div>
);

const styleSheet = createStyleSheet('FullWidthTabs', theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  }
}));

export interface AppProps { classes: string; }
export interface AppState { index: string; }

class App extends Component<AppProps, {index: number}> {
  state = { index: 0 };
  handleChange = (event: React.ChangeEvent<{checked: boolean}>, index: number) => {
    this.setState({ index });
  }
  handleChangeIndex = (index: number) => {
    this.setState({ index });
  }
  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable={true}
            scrollButtons="auto"
          >
            <Tab label="Monday" />
            <Tab label="Tuesday" />
            <Tab label="Wednesday" />
            <Tab label="Thursday" />
            <Tab label="Friday" />
            <Tab label="Saturday" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <TabContainer>
            {'Item One'}
          </TabContainer>
          <TabContainer>
            {'Item Two'}
          </TabContainer>
          <TabContainer>
            {'Item Three'}
          </TabContainer>
          <TabContainer>
            {'Item Four'}
          </TabContainer>
          <TabContainer>
            {'Item Five'}
          </TabContainer>
          <TabContainer>
            {'Item Six'}
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styleSheet)(App);