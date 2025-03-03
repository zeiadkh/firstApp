import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import Goal from "./Components/Goal";
import GoalInput from "./Components/AddGoal";
export default function App() {
  const [goals, setGoals] = useState([]);
  const [addGoalVisible, setAddGoalVisible] = useState(false);
  const addGoallVisibleHandler = () => {
    setAddGoalVisible(true);
  };
  const hideAddGoalHandler = () => {
    setAddGoalVisible(false);
  };
  function addGoalHandler(enteredGoalText) {
    setGoals((prevGoals) => [
      ...prevGoals,
      { id: Math.random().toString(), text: enteredGoalText },
    ]);
    hideAddGoalHandler();
  }
  function deleteGoalHandler(id) {
    setGoals([...goals.filter((goals) => goals.id !== id)]);
  }
  return (
    <View style={styles.appContainer}>
      <Button title="Add Goal+" onPress={addGoallVisibleHandler}></Button>
      <GoalInput
        onAddGoal={addGoalHandler}
        visible={addGoalVisible}
        hide={hideAddGoalHandler}
      />
      <View style={styles.goalList}>
        <FlatList
          data={goals}
          renderItem={(goalData) => {
            return (
              <Goal
                text={goalData.item.text}
                id={goalData.item.id}
                onDelete={deleteGoalHandler}
              />
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

  goalList: {
    flex: 4,
  },
});
