import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  EasingNode,
  block,
  not,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import tinycolor from "tinycolor2";

function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 800,
    toValue: new Value(0),
    easing: EasingNode.linear,
  };

  return block([
    cond(not(clockRunning(clock)), [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
    ]),
    state.position,
  ]);
}

const ShimmerSkeleton = ({
  width = 200,
  height = 20,
  backgroundColor = "#e0e0e0",
  isCircle = false,
  borderRadius = 4,
}) => {
  const clock = new Clock();
  const animationValue = runTiming(clock, -width, width * 2);

  const animatedStyle = {
    transform: [{ translateX: animationValue }],
  };

  const shapeStyle = isCircle
    ? {
        borderRadius: Math.min(width, height) / 2,
      }
    : {
        borderRadius: borderRadius,
      };

  const baseColor = tinycolor(backgroundColor);
  const highlightColor = baseColor.lighten(10).toRgbString();

  const gradientStart = isCircle ? { x: 0, y: 0 } : { x: 0, y: 0.5 };
  const gradientEnd = isCircle ? { x: 1, y: 1 } : { x: 1, y: 0.5 };

  return (
    <View style={[styles.container, shapeStyle, { width, height }]}>
      <View
        style={[
          styles.skeleton,
          shapeStyle,
          { backgroundColor, width, height },
        ]}
      />
      <Animated.View style={[styles.shimmer, animatedStyle]}>
        <LinearGradient
          colors={[
            "rgba(255, 255, 255, 0)",
            highlightColor,
            "rgba(255, 255, 255, 0)",
          ]}
          start={gradientStart}
          end={gradientEnd}
          style={[styles.gradient, shapeStyle, { height, width: width / 2 }]}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
  },
  skeleton: {},
  shimmer: {
    position: "absolute",
    height: "100%",
  },
  gradient: {},
});

export default ShimmerSkeleton;
