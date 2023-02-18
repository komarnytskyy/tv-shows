import React, { FC } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { Result } from "../types";
import RenderHtml from "react-native-render-html";

const Card: FC<Result> = ({ show }) => {
  const { image, name, summary } = show;
  const { width } = useWindowDimensions();

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image style={styles.image} source={{ uri: image?.medium }} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text>No image</Text>
          </View>
        )}
      </View>
      <View style={styles.view}>
        <Text style={styles.title}>{name}</Text>
        <RenderHtml
          baseStyle={styles.description}
          contentWidth={width}
          source={{ html: summary || "" }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 15,
  },
  imageContainer: {
    height: 150,
    marginRight: 10,
  },
  image: {
    height: 150,
    width: 150 * 0.7,
    borderRadius: 2,
  },
  imagePlaceholder: {
    height: 150,
    width: 150 * 0.7,
    backgroundColor: "lightgrey",
    color: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
  },
  view: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    color: "white",
  },
  description: {
    color: "#8f95a3",
  },
});

export default Card;
