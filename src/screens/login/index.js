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
import {AsyncStorage} from 'react-native';

const launchscreenBg = require("../../../assets/background.png");
const launchscreenLogo = require("../../../assets/thumbnail_image.png");

class Login extends Component {
  state = {email: '', password: ''}
  _login = async() => {
    try {
      await AsyncStorage.setItem("email", this.state.email);
      this.props.navigation.navigate('Info');
    } catch (error) {
            this.props.navigation.navigate('Info');

      // Error saving data
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>

        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                style={{ color: "#71C4DE" }}
                onChangeText={email => this.setState({ email })}
                value={this.state.email} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                secureTextEntry
                style={{ color: "#71C4DE" }}
                onChangeText={password => this.setState({ password })}
                value={this.state.password} />
            </Item>
          </Form>
          <Button block style={{ margin: 15, marginTop: 50, backgroundColor: "#71C4DE" }} onPress={() => this._login()}>
            <Text>Sign In</Text>
          </Button>
        </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default Login;
