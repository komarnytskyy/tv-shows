import React, { useCallback } from "react";
import { Linking, Text, Pressable, StyleSheet } from "react-native";
import { OpenURLButtonProps } from "../types";

const OpenURLButton = ({ url, children }: OpenURLButtonProps) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);
  return (
    <Pressable onPress={handlePress}>
      <Text style={styles.button}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    color: "#8075ff",
    marginHorizontal: 2,
  },
});

export default OpenURLButton;
