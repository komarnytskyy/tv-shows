import React, { FC } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  useWindowDimensions,
} from "react-native";
import { Container } from "../components/Container";
import OpenURLButton from "../components/OpenURLButton";
import { DetailScreenProps, Result } from "../types";
import RenderHtml from "react-native-render-html";

const DetailScreen: FC<DetailScreenProps> = ({ navigation }) => {
  const item: Result = navigation.getParam("item");
  const { image, name, genres, officialSite, status, schedule, summary } =
    item.show;
  const { width } = useWindowDimensions();

  return (
    <Container>
      <View>
        <View style={styles.imageContainer}>
          {image ? (
            <Image style={styles.image} source={{ uri: image?.original }} />
          ) : (
            <View style={styles.imagePlaceholder}>
              <Text>No image</Text>
            </View>
          )}
        </View>
        <Text style={[styles.title, styles.white]}>{name}</Text>
        <View style={[styles.listView, styles.bottomMargin]}>
          <Text style={[styles.lightGrey]}>Genre:</Text>
          <FlatList
            horizontal
            data={genres}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <Text style={[styles.horizontalPadding, styles.white]}>
                  {item}
                </Text>
              );
            }}
          />
        </View>

        <View style={[styles.listView, styles.bottomMargin]}>
          <Text style={styles.lightGrey}>Status:</Text>
          <Text style={[styles.white, styles.horizontalPadding]}>{status}</Text>
        </View>

        <View style={[styles.listView, styles.bottomMargin]}>
          <Text style={[styles.lightGrey]}>Schedule:</Text>
          <Text style={[styles.white, styles.horizontalPadding]}>
            {schedule?.time}
          </Text>
          <FlatList
            horizontal
            data={schedule?.days}
            keyExtractor={(item) => item}
            renderItem={({ item }) => {
              return (
                <Text style={[styles.white, styles.horizontalPadding]}>
                  {item}
                </Text>
              );
            }}
          />
        </View>
        <View>
          <RenderHtml
            baseStyle={styles.white}
            contentWidth={width}
            source={{ html: summary || "" }}
          />
        </View>
        <View style={styles.listView}>
          <Text style={styles.lightGrey}>Learn more:</Text>
          {officialSite && (
            <OpenURLButton url={officialSite} children={`Visit ${name} site`} />
          )}
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 250,
    display: "flex",
    alignItems: "center",
  },
  image: {
    width: 250 * 0.7,
    height: 250,
    borderRadius: 2,
  },
  imagePlaceholder: {
    height: 250,
    width: 250 * 0.7,
    borderRadius: 2,
    backgroundColor: "lightgrey",
    color: "darkgrey",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  white: {
    color: "white",
  },
  lightGrey: {
    color: "#8f95a3",
  },
  listView: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  horizontalPadding: {
    paddingHorizontal: 2,
  },
  bottomMargin: {
    marginBottom: 10,
  },
});

export default DetailScreen;
