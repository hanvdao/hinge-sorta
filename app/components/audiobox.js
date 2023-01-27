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

export default function AudioBox() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>My hottest take</Text>
      <View style={styles.audioPlayerContainer}>
        <Image source={Icons.player.light} style={[styles.playerIcon]} />
        <Image source={Icons.audioWave.light} style={[styles.audioWaveIcon]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: Themes.light.bgSecondary,
    ...Themes.light.shadows,
    marginVertical: 20,
    width: width * 0.8,
    borderRadius: 15,
    paddingVertical: 25,
    paddingHorizontal: 20,
  },
  playerIcon: {
    resizeMode: "contain",
    width: PixelRatio.getPixelSizeForLayoutSize("20"),
    height: PixelRatio.getPixelSizeForLayoutSize("20"),
  },
  audioWaveIcon: {
    width: "75%",
    resizeMode: "contain",
  },
  headerText: {
    fontFamily: "Sydney",
    fontSize: PixelRatio.getFontScale() * height * 0.03,
  },
  audioPlayerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: height * 0.05,
    marginTop: 20,
  },
});
