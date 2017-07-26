import React, { Component } from 'react';
import './App.css';

import { withStyles, createStyleSheet } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import List, { ListItem } from 'material-ui/List';

import Schedule from './Data';

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
            {Schedule.map(({day}: {day: string}) => <Tab key={day} label={day}/>)}
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          {Schedule.map(({day, tasks}) => 
            <TabContainer key={day}>
              <List>
                {tasks.map((task, i) => <ListItem key={i}>{task}</ListItem>)}
              </List>
            </TabContainer>
          )}
        </SwipeableViews>
      </div>
    );
  }
}

export default withStyles(styleSheet)(App);