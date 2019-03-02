import React, { Component } from "react";
import { ImageBackground, View, StatusBar } from "react-native";
import { Container, Button, H3, Text, Item,
  Form, Content, Input, Label   } from "native-base";

import styles from "./styles";

const launchscreenBg = require("../../../assets/background.png");
const launchscreenLogo = require("../../../assets/thumbnail_image.png");

class Home extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <ImageBackground source={launchscreenBg} style={styles.imageContainer}>
          <View style={styles.logoContainer}>
            <ImageBackground source={launchscreenLogo} style={styles.logo} />
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 50,
              backgroundColor: "transparent"
            }}
          >
            <H3 style={styles.text}>Ready Freddy</H3>
            <View style={{ marginTop: 8 }} />
            <H3 style={styles.text}>It's game time</H3>
          </View>
          <View style={{ marginBottom: 80 }}>
            <Button
              style={{ backgroundColor: "#71C4DE", alignSelf: "center" }}
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text>Let's Go</Text>
            </Button>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

export default Home;
