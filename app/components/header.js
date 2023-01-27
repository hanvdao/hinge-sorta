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

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Image source={Icons.menu.light} style={[styles.icon]} />
      <Text style={styles.headerText}>ensom</Text>
      <Image source={Icons.sun} style={[styles.icon]} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: width,
    height: height * 0.1,
  },
  icon: {
    height: height * 0.05,
    width: width * 0.1,
    resizeMode: "contain",
  },
  headerText: {
    fontFamily: "SydneyBold",
    fontSize: PixelRatio.getFontScale() * height * 0.04,
  },
});
