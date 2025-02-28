import { TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }
  return (
    <>
      <TextInput
        value={enteredGoalText}
        style={styles.GoalInput}
        placeholder="Add your course goal"
        onChangeText={goalInputHandler}
      />
      ;
      <Button
        title="Add Goal"
        onPress={() => {
          props.onAddGoal(enteredGoalText);
          setEnteredGoalText("");
        }}
      />
    </>
  );
}
const styles = StyleSheet.create({
  GoalInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
export default GoalInput;
