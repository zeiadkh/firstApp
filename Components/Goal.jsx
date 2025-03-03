import { View, Text, StyleSheet, Pressable } from "react-native";
function Goal(props) {
  return (
    <View style={styles.goal}>
      <Pressable
        android_ripple={{ color: "#dddddd", foreground: true }}
        onPress={props.onDelete.bind(this, props.id)}
        style={({pressed}) => pressed && styles.pressedGoal}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    backgroundColor: "black",
    borderRadius: 4,
  },
  goalText: {
    padding: 8,
    color: "#fff",
  },
  pressedGoal:{
    opacity: 0.5
  }
});

export default Goal;
