import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);
  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }
  function addGoalHandler() {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalList}>
        <FlatList
          data={goals}
          renderItem={(goalData) => {
            return (
              <View style={styles.goal}>
                <Text style={styles.goalText}>{goalData.item.text}</Text>
              </View>
            );
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
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalList: {
    flex: 4,
  },
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
