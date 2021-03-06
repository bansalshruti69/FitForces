import React, { Component } from "react";
const { Dimensions, Platform } = React;

import { ImageBackground, View, StatusBar } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
  Footer, FooterTab
} from "native-base";
import styles from "./styles";
import { Avatar } from 'react-native-elements'

const launchscreenBg = require("../../../assets/profile_2.png");
const launchscreenLogo = require("../../../assets/thumbnail_image.png");


class Profile extends Component {
  state = {
    height: '',
    weight: '',
    age: '',
    gender: ''
  }
  _saveInfo = async() => {
    try {
      await AsyncStorage.setItem("height", this.state.height);
      await AsyncStorage.setItem("weight", this.state.weight);
      await AsyncStorage.setItem("age", this.state.age);
      await AsyncStorage.setItem("gender", this.state.gender);
      this.props.navigation.navigate('Profile');
    } catch (error) {
      this.props.navigation.navigate('Profile');
    }
  }

  _challege = async() => {
    this.props.navigation.navigate('Challenge');
  }

  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <Header
          span
          noLeft
          style={{ backgroundColor: '#01B9F5' }}
          androidStatusBarColor="#01B9F5">
          <Left>
            <View style={{ flexDirection: 'row'}} >
              <Avatar
                width={100}
                height={100}
                rounded
                size="medium"
                source={{
                uri: 'https://lh3.googleusercontent.com/-D74e3lK4kvE/XHomgE7x4fI/AAAAAAAAWTQ/s5XkKUY-4FsYvCWnBqJiyhLE0JZfF7BMgCL0BGAYYCw/h512/profile.png',
              }}
            />
            <View style={{ width: 250, marginTop: 10, marginLeft: 10 }}>
            <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
             }}>Hi,</Text>
             <Text style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
             }}>Shefali Bansa</Text>
            </View>
            </View>
           <View>
            
          </View>
          </Left>
          <Right />
        </Header>

        <Content>
          
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('Feed')}>
              <Icon name="apps" />
              <Text>Feed</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" onPress={() => this.props.navigation.navigate('Profile')}/>
              <Text>Profile</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Diet')}>
              <Icon active name="navigate" />
              <Text>Diet</Text>
            </Button>
            <Button vertical onPress={() => this._challege()}>
              <Icon name="person" />
              <Text>Fit Task</Text>
            </Button>
          </FooterTab>
        </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export default Profile;
