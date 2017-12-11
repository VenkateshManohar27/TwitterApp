import React, {Component}  from 'react';

import { Container, Header, Title, Card, Segment, CardItem, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Thumbnail, View,Fab } from 'native-base';
import TimeLineCards from '../Card/timelineCards';

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
        <Header>
          <Left>
          <Button  onPress={()=>this.props.openDrawer()}>
          <Icon ios='ios-person' android='md-person' />
          </Button>
          </Left>

          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>
        <Segment>
          <Button first >
            <Icon ios='ios-home' android='md-home' />
          </Button>
          <Button >
            <Icon ios='ios-search' android='md-search' />
          </Button>
          <Button >
            <Icon ios='ios-notifications' android='md-notifications' />
          </Button>
          <Button last>
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
            style={{ backgroundColor: '#5067FF' }}
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
        
        <Footer style={{backgroundColor: 'white'}}>
          <FooterTab style={{backgroundColor: 'white'}}>
              
              <Button vertical><Text> All </Text></Button>
              <Button vertical><Text> Mentions </Text></Button>
                
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

module.exports = Home;