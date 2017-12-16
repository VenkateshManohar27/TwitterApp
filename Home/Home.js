import React, {Component}  from 'react';

import { Container, Header, Title, Card, Segment, CardItem, Content, Button, Left, Right, Body, Icon, Text, Thumbnail, View,Fab } from 'native-base';
import TimeLineCards from '../Card/timelineCards';
import Tabs from './Tabs';
import FooterContent from './Footer';

export default class Home extends Component{
  constructor() {
    super();
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: 'white'}}>
          <Left>
          <Button rounded  onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
          <Thumbnail source={require('../assets/dp.png')} />
          </Button>
          </Left>

          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Segment >
          <Button first >
            <Icon ios='ios-home' android='md-home' />
          </Button>
          <Button onPress={() =>  this.props.navigation.navigate('Search')}>
            <Icon ios='ios-search' android='md-search' />
          </Button>
          <Button onPress={() =>  this.props.navigation.navigate('Notification')}>
            <Icon ios='ios-notifications' android='md-notifications' />
          </Button>
          <Button  onPress={() =>  this.props.navigation.navigate('Mail')}>
            <Icon ios='ios-mail' android='md-mail' />
          </Button>
        </Segment>
        <Content>
          <Content>
            <TimeLineCards/>
            <TimeLineCards/>
            <TimeLineCards/>
          </Content>
           
        </Content>
        
        <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: 'blue', marginBottom: 30 }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>
        
          <FooterContent/>
      </Container>
    );
  }
}

module.exports = Home;