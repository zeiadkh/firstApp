import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Goal from "./Components/Goal";
import GoalInput from "./Components/TextInput";
export default function App() {
  const [goals, setGoals] = useState([]);

  function addGoalHandler(enteredGoalText) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <GoalInput onAddGoal={addGoalHandler} />
      </View>
      <View style={styles.goalList}>
        <FlatList
          data={goals}
          renderItem={(goalData) => {
            return <Goal text={goalData.item.text} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
  },
  goalList: {
    flex: 4,
  },
});
