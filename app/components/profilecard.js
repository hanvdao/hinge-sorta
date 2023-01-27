import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  PixelRatio,
} from "react-native";

import { Icons, Themes } from "../../assets/Themes";
const { height, width } = Dimensions.get("window");

export default function ProfileCard() {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.nameText}>MTL</Text>
      <Image
        style={styles.cardImage}
        source={require("../../assets/Profiles/woman1.jpg")}
      />
      <Text style={styles.distanceText}>2 miles away</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    height: height * 0.45,
    width: width * 0.8,
    position: "relative",
    ...Themes.light.shadows,
  },
  cardImage: {
    flex: 1,
    height: undefined,
    width: undefined,
    borderRadius: 10,
  },
  nameText: {
    position: "absolute",
    left: 10,
    top: 10,
    zIndex: 100,
    color: Themes.light.textSecondary,
    fontSize: 30,
    fontFamily: "Sydney",
  },
  distanceText: {
    position: "absolute",
    left: 10,
    bottom: 10,
    zIndex: 100,
    color: Themes.light.textSecondary,
    fontSize: 15,
    fontFamily: "Sydney",
  },
});
