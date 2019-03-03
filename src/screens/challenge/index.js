import React, { Component } from "react";
import { Image,ImageBackground, View } from "react-native";
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
  FooterTab
} from "native-base";
import styles from "./styles";
import { Dimensions } from 'react-native';
let deviceWidth = Dimensions.get('window').width
const launchscreenBg = require("../../../assets/background.png");


const cardOne = require("../../../assets/swiper-1.jpg");
const cardTwo = require("../../../assets/swiper-2.jpg");
const cardThree = require("../../../assets/swiper-3.jpg");
const cardFour = require("../../../assets/swiper-4.jpg");
const cards = [
  {
    text: "Walk The Talk",
    name: "One",
    image: cardOne,
    description: "For all you lazies, we challenge you to walk the talk you have been peddling for days. Complete 10,000 steps in 48 hours and win 100 points"
  },
  {
    text: "FootBall Fever",
    name: "Two",
    image: cardTwo,
    description: "All you football fans, gather 10 friends and play a muddy game to win 150 points in the next 48 hours.Nominate your frinds by sharing your challenge card."
  },
  {
    text: "Ultimate Cycling",
    name: "Three",
    image: cardThree,
    description: "Follow your dream cardio regime by simply getting on your two wheels. We challenge you to cycle 50 km in 5 days and win 200 points. "
  },
  {
    text: "March Cardio Challenge",
    name: "Four",
    image: cardFour,
    description: "Follow the 30 day cardio challenge and win 300 points. Nominate your friends by sharing this challenge card."
  }
];

class Challenge extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Fit Tasks</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            ref={mr => (this._deckSwiper = mr)}
            dataSource={cards}
            looping={false}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>
                        {item.text}
                      </Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem >
                <Body>
                  <Image
                    style={{
                      resizeMode: "cover",
                      width: 300,
                      flex: 1,
                      height: 300
                    }}
                    source={item.image}
                  />
                  <Text>{item.description}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>95 Already Subscriber</Text>
                </Button>
              </Left>
                </CardItem>
              </Card>}
          />
        </View>
        
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
      </Container>
    );
  }
}

export default Challenge;
