import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState, useEffect } from "react";
import ShimmerSkeleton from "./components/ShimmerSkeleton";
import Card from "./components/Card";
import Circle from "./components/Circle";

export default function App() {
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const simulateFetch = () => {
      setTimeout(() => {
        setFetched(true);
      }, 2000);
    };

    simulateFetch();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {fetched ? (
        <Card />
      ) : (
        <ShimmerSkeleton width={300} height={150} borderRadius={15} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
