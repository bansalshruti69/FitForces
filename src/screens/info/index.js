import React, { Component } from "react";
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
  Text
} from "native-base";
import styles from "./styles";
const launchscreenBg = require("../../../assets/background.png");
const launchscreenLogo = require("../../../assets/thumbnail_image.png");

class Info extends Component {
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
  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
        <Header transparent>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Add Basic Details</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Height</Label>
              <Input
                style={{ color: "#71C4DE" }}
                onChangeText={height => this.setState({ height })}
                value={this.state.height} />
            </Item>
            <Item floatingLabel>
              <Label>Weight</Label>
              <Input
                style={{ color: "#71C4DE" }}
                onChangeText={weight => this.setState({ weight })}
                value={this.state.weight} />
            </Item>
            <Item floatingLabel>
              <Label>Age</Label>
              <Input
                style={{ color: "#71C4DE" }}
                onChangeText={age => this.setState({ age })}
                value={this.state.age} />
            </Item>
            <Item floatingLabel>
              <Label>Gender</Label>
              <Input
                style={{ color: "#71C4DE" }}
                onChangeText={gender => this.setState({ gender })}
                value={this.state.gender}/>
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50, backgroundColor: "#71C4DE"  }} onPress={() => this._saveInfo()}>
            <Text>Continue</Text>
          </Button>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Info;
