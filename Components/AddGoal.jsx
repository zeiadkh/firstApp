import {
  TextInput,
  StyleSheet,
  Button,
  Modal,
  View,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(text) {
    setEnteredGoalText(text);
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputModal}>
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <View style={styles.inputContainer}>
          <TextInput
            value={enteredGoalText}
            style={styles.GoalInput}
            placeholder="Add your course goal"
            onChangeText={goalInputHandler}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                style={styles.button}
                title="Add Goal"
                onPress={() => {
                  props.onAddGoal(enteredGoalText);
                  setEnteredGoalText("");
                }}
              />
            </View>
            <View style={styles.cancelButton}>
              <Button
                title="Cancel"
                color={"#E96768"}
                onPress={props.hide}
              ></Button>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  GoalInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    padding: 16,
    marginBottom: 16,
    color: "#120438",
    borderRadius: 8,
    backgroundColor: "#e4d0ff",
  },
  inputContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  inputModal: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#311b6b",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: 100,
    marginRight: 8,
  },
  cancelButton: {
    width: 100,
    marginRight: 8,
    color: "black",
  },
  image: {
    width: 100,
    height: 100,
    // flex: 1
  },
});
export default GoalInput;
