import { View, Text, StyleSheet } from "react-native";
function Goal(props) {
  return (
    <View style={styles.goal}>
      <Text style={styles.goalText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    padding: 8,
    margin: 8,
    backgroundColor: "black",
    borderRadius: 4,
  },
  goalText: {
    color: "#fff",
  },
});

export default Goal;
