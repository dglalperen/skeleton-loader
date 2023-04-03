import { Easing, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, { FadeIn } from "react-native-reanimated";

const Circle = () => {
  return (
    <Animated.View
      entering={FadeIn.duration(500)}
      style={{
        height: 150,
        borderRadius: 75,
        width: 150,
        backgroundColor: "#DF2839",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "900", textAlign: "center" }}>
        Loaded
      </Text>
    </Animated.View>
  );
};

export default Circle;

const styles = StyleSheet.create({});
