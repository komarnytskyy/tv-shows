import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import DetailScreen from "./src/screens/DetailScreen";
import IndexScreen from "./src/screens/IndexScreen";

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Detail: DetailScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "TV-shows",
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
