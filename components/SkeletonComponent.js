import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withSequence,
  withTiming,
  Easing,
  FadeOut,
} from "react-native-reanimated";

// variant prop --> "box" || "circle"

const SkeletonComponent = ({ width, height, variant = "box", style }) => {
  const opacity = useSharedValue(0.4);

  opacity.value = withRepeat(
    withTiming(1, { duration: 500, easing: Easing.ease }),
    withTiming(0.4, { duration: 800, easing: Easing.ease }) - 1,
    true
  );

  const animStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  }, [opacity]);

  let borderRadius = 0;
  if (variant === "circle") {
    borderRadius =
      typeof height === "string" ? parseInt(height, 10) / 2 : height / 2;
  }

  return (
    <Animated.View
      style={[animStyle, { height, width, borderRadius }, styles.rect, style]}
    />
  );
};

export default SkeletonComponent;

const styles = StyleSheet.create({
  rect: {
    backgroundColor: "#ddd",
  },
});
