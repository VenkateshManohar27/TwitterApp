import React, { Component } from 'react';
import { Drawer } from 'native-base';
import Sidebar from './SideBar';
import Home from '../Home/Home';
export default class UserProfile extends Component {
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
      
      </Drawer>
    );
  }
}