import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import SkeletonComponent from "./components/SkeletonComponent";
import { useState, useEffect } from "react";
import Card from "./components/Card";

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
        <SkeletonComponent
          width={300}
          height={150}
          style={{ borderRadius: 20, backgroundColor: "#DF2839" }}
        />
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
