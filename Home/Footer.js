import React, {Component}  from 'react';
import {Footer, FooterTab,Right, Button, Text, Icon}  from 'native-base';

export default class FooterContent extends Component{


	render(){
		return (
		<Footer style={{backgroundColor: 'white'}}>
          <FooterTab style={{backgroundColor: 'white'}}>
              
              <Button >
              	<Text style={{fontSize: 12, color: 'blue',  fontWeight: 'bold'}}> All </Text>
              </Button>
              <Button >
              	<Text style={{fontSize: 12,  color: 'black',fontWeight: 'bold'}}>Mentions</Text>
              </Button>
                
          </FooterTab>

          <Right>
              <Icon style={{ marginRight: 10, color: 'blue' }} name='settings'></Icon>
          </Right>
        </Footer>

			);

	};
}