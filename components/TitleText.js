import React from "react";
import { Text, StyleSheet, View } from "react-native";

const TitleText = (props) => {
  return (
    <View style={styles.textStyle}>
      <Text style={styles.fontStyle}>{props.children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  fontStyle: {
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  textStyle: {
    padding: 10,
  },
});

export default TitleText;
