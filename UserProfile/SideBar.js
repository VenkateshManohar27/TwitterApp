import React, { Component } from 'react';
import {
  Text,View 
} from 'react-native';


import {Content, Header,Left, Body, Right, Button, Icon, Title, List, ListItem, Separator, Footer,FooterTab, Thumbnail} from 'native-base';

export default class Sidebar extends Component {
  render() {
    return (
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Header style={{backgroundColor:'#FFFFFF'}}>
          <Left>
          <Thumbnail source={require('../assets/dp.png')} />
          </Left>
          <Body/>
          <Right/>

        </Header>
        <Content>
        	<Text> Venkatesh Manohar</Text>
        	<Text> @Venkatesh_Manohar</Text>
        	<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        		<Text >690 Following</Text>
        		<Text>653 Followers </Text>
        	</View>
        </Content>
        <Content>
           <List>
            <ListItem >
            	<Icon ios='ios-person-outline' android='md-person' />
              <Text> Profile</Text>
            </ListItem>
            <ListItem>
            <Icon ios='ios-list-box-outline' android='md-list-box' />
              <Text> Lists</Text>
            </ListItem>
           	<ListItem>
           	 <Icon name='flash' />
              <Text> Moments</Text>
            </ListItem>
            <ListItem>
            	 <Icon ios="ios-photos" android='md-photos'/>
              <Text> Highlights</Text>
            </ListItem>
            <Separator/>
             <ListItem>
              <Text>Settings and Privacy</Text>
            </ListItem>
            <ListItem>
              <Text>Help Centre</Text>
            </ListItem>
          </List>
        </Content>
        <Footer>
        	<FooterTab style={{backgroundColor:'#FFFFFF'}}>
            <Button>
              <Icon ios="ios-moon-outline" android='md-moon'/>
            </Button>
            <Button>
              <Icon ios="ios-apps" android='md-apps'/>
            </Button>
          </FooterTab>
        </Footer>
          </Content>
    );
  }
}

module.exports = Sidebar;