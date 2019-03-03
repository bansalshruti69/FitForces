import React, { Component } from "react";
import { Image, View, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Title,
  Button,
  IconNB,
  DeckSwiper,
  Card,
  CardItem,
  Icon,
  Thumbnail,
  Text,
  Left,
  Right,
  Body,
  Footer,
  FooterTab,
  Content,
  Form,
  Picker
} from "native-base";
import styles from "./styles";
import { Dimensions } from 'react-native';
import { Api } from '../../utils';
let deviceWidth = Dimensions.get('window').width
const launchscreenBg = require("../../../assets/background.png");




class Diet extends Component {
	constructor(props) {
    super(props);
    this.state = {
      selected: undefined,
      selected1: undefined,
      selected2: undefined,
      show: false,
      value1: null,
      value2: null,
      value3: null

    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }
  onValueChange1(value: string) {
  	this.setState({
  		selected1: value
  	})
  }
  onValueChange2(value: string) {
  	this.setState({
  		selected2: value
  	})
  }
  render() {
    let { value1, value2, value3 } = this.state;
    return (
      <Container style={styles.container}>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Diet</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Form style={{ marginTop: 80 }}>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your FOOD PREFERENCE"
              placeholderStyle={{ color: "#bfc6ea", fontWeight: 'bold' }}
              placeholderIconColor="#007aff"
              style={{ width: deviceWidth, marginTop: 80 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="VEGETARIAN" value="key0" />
              <Picker.Item label="NON_VEGETARIAN" value="key1" />
              <Picker.Item label="VEGAN" value="key2" />
            </Picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your DIET PLAN"
              placeholderStyle={{ color: "#bfc6ea", fontWeight: 'bold' }}
              placeholderIconColor="#007aff"
              style={{ width: deviceWidth, marginTop: 80 }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange1.bind(this)}
            >
              <Picker.Item label="KETO DIET" value="key0" />
              <Picker.Item label="ZONE DIET" value="key1" />
              <Picker.Item label="BODYBUILDING DIET" value="key2" />
              <Picker.Item label="5:2 DIET" value="key3" />
            </Picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your LOCATION"
              placeholderStyle={{ color: "#bfc6ea", fontWeight: 'bold' }}
              placeholderIconColor="#007aff"
              style={{ width: deviceWidth, marginTop: 80 }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Picker.Item label="DELHI" value="key0" />
              <Picker.Item label="TRICHY" value="key1" />
              <Picker.Item label="PATNA" value="key2" />
              <Picker.Item label="GANGA NAGAR" value="key3" />
              <Picker.Item label="CHENNAI" value="key4" />
            </Picker>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50, backgroundColor: "#000000" }} onPress={() => this.props.navigation.navigate('Food')}  >
            <Text>Evaluate</Text>
          </Button>
        </Content>
        
        
        <Footer>
          <FooterTab>
            <Button vertical onPress={() => this.props.navigation.navigate('Feed')}>
              <Icon name="apps" />
              <Text>Feed</Text>
            </Button>
            <Button vertical>
              <Icon name="person" onPress={() => this.props.navigation.navigate('Profile')}/>
              <Text>Profile</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Diet')}>
              <Icon active name="navigate" />
              <Text>Diet</Text>
            </Button>
            <Button vertical onPress={() => this.props.navigation.navigate('Challenge')}>
              <Icon name="trophy" />
              <Text>Fit Task</Text>
            </Button>
          </FooterTab>
        </Footer>
        </ImageBackground>
      </Container>
    );
  }
}

export default Diet;
