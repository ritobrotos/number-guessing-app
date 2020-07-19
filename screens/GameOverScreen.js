import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!!</TitleText>
      <Image
        source={require("../assets/success.png")}
        style={styles.image}
        // source={{uri: ''}}
        resizeMode="contain"
      />
      <Text>Number of rounds: {props.roundsNumber}</Text>
      <BodyText>
        Number was: <Text style={styles.highlight}>{props.userNumber}</Text>
      </BodyText>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: 300,
    margin: 20,
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOverScreen;
