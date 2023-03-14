import { Easing, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";

const Card = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(900)}
      style={{
        height: 150,
        borderRadius: 20,
        width: 300,
        backgroundColor: "#DF2839",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "900" }}>
        Fertig geladene Karte
      </Text>
    </Animated.View>
  );
};

export default Card;

const styles = StyleSheet.create({});
