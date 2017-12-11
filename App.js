/*
import { StyleSheet, Text, View, Button } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import Home from './Home/Home';
import UserProfile from './UserProfile/UserProfile';
import SearchScreen from './Search/Searchscreen';
import Drawer from './Drawer';

const SimpleApp = DrawerNavigator({
  
  Home: {screen: Home},
  Search: {screen: SearchScreen},
  UserProfile: { screen: UserProfile }
}, {
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    return <SimpleApp />;
  }
}
*/



import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';

import {Drawer} from 'native-base';

import Home from './Home/Home';


import Sidebar from './UserProfile/SideBar';


export default class App extends Component {
  closeDrawer = () => {
    this.drawer._root.close()
  };
  openDrawer = () => {
    this.drawer._root.open()
  };


  render() {
    return (
              <Drawer
                ref={(ref) => { this.drawer = ref; }}
                content={<Sidebar/>}
                onClose={() => this.closeDrawer()} >

                <Home
                    openDrawer={this.openDrawer.bind(this)}
                />
                
                </Drawer>
    );
  }
}

module.exports = App;