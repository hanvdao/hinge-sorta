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
    alignItems: "center",
    justifyContent: "space-around",
    width: width,
    height: height * 0.1,
  },
  playerIcon: {
    height: height * 0.05,
    width: width * 0.1,
    resizeMode: "contain",
  },
  audioWaveIcon: {
    width: width * 0.5,
    resizeMode: "contain",
  },
  headerText: {
    fontFamily: "Sydney",
    fontSize: 30,
  },
  audioPlayerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
