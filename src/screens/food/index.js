import React, { Component } from 'react';
import { Image, View, ImageBackground } from "react-native";
import { Container, Header, Content, Item, Input,Footer, FooterTab,
  Form, Button, Text, Icon, Left, Right, Card, CardItem, Body, Title} from 'native-base';
import styles from "./styles";
import { Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width
const launchscreenBg = require("../../../assets/background.png");

class Food extends Component {
  constructor(props) {
    super(props);
    let data = [
      "boiled eggs (300gm)",
      "pancakes (200gm)",
      "oats (200gm)",
      "banana (200gm)",
      "Greek Yogurt",
      "fruit juice (400ml)",
      "club sandwich (200gm)",
      "vegetable salad (300gm)",
      "papaya (200gm)",
      "cooked sprouts (400gm)",
      "poha (300gm)"
    ];
    let num = Math.floor((Math.random()*10));
    
    this.state = {
      'value1': data[parseInt(num)],
      'value2': data[parseInt(num)+1],
      'value3': data[parseInt(num)+2]
    }
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
            <Title>Breakfast</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem bordered>
              <Text>{value1}</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  {value2}
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Text>{value3}</Text>
            </CardItem>
          </Card>
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

export default Food;

