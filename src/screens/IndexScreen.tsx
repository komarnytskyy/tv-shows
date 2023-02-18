import React, { FC, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Container } from "../components/Container";
import Card from "../components/Card";
import useResults from "../hooks/useResults";
import { IndexScreenProps, Result } from "../types";

const IndexScreen: FC<IndexScreenProps> = ({ navigation }) => {
  const [searchApi, results] = useResults();
  const [term, setTerm] = useState<string>("");

  const onInputChange = (value: string) => {
    setTerm(value);

    value.length > 2 ? searchApi(value) : searchApi("");
  };

  return (
    <Container>
      <View>
        <TextInput
          style={styles.input}
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Search"
          value={term}
          onChangeText={(value) => onInputChange(value)}
        />
      </View>
      {results.length ? (
        <View style={styles.list}>
          <FlatList
            data={Object.values(results)}
            showsVerticalScrollIndicator={false}
            keyExtractor={(result) => result.show.id.toString()}
            renderItem={({ item }: { item: Result }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Detail", { item: item })}
                >
                  <Card {...item} />
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <View>
          <Text>Sorry, nothing found with this search</Text>
        </View>
      )}
    </Container>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#8f95a3",
    borderRadius: 4,
    marginBottom: 10,
    padding: 6,
    fontSize: 18,
    color: "white",
  },
  list: {
    flex: 1,
  },
});

export default IndexScreen;
