import React, { FC } from "react";
import { View, StyleSheet } from "react-native";
import { ContainerProps } from "../types";

export const Container: FC<ContainerProps> = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#151617",
  },
});
